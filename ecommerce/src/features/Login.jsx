import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth'
import React, { useState } from 'react'
import {  Button, Col, Container, Form, Row } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { auth, db } from '../firebase/config'
import { toast } from 'react-toastify'
import { Timestamp, doc, getDoc, setDoc } from 'firebase/firestore'
import Loader from './Loader'

const Login = () => {
let initialState={email:'',password:''}
  const navigate=useNavigate()
  let [user,setUser]=useState({...initialState})
  let [errors,setErrors]=useState({})
  let [isLoading,setIsLoading]=useState(false)

  let handleSubmit=(e)=>{
      e.preventDefault()
      setIsLoading(true)
      signInWithEmailAndPassword(auth, user.email, user.password)
            .then(async(userCredential) => {
                const user1 = userCredential.user;  
                const docRef = doc(db,"users",user1.uid)    
                const docSnap=await getDoc(docRef)    
                if(docSnap.exists()){
                    // console.log(docSnap.data())
                    if(docSnap.data().role=="admin") {
                        navigate('/admin')
                        toast.success("loggedin successfully")
                        setIsLoading(false)
                    }
                    else if(docSnap.data().role=="user") {
                        navigate('/')
                        toast.success("loggedin successfully")
                        setIsLoading(false)
                    }                   
                }   
               
            })
            .catch((error) => {
                toast.error(error.message)
                setIsLoading(false)
            });
      }

      const provider = new GoogleAuthProvider();
        let loginwithgoogle=()=>{
            signInWithPopup(auth, provider)
            .then(async(result) => {
                    const user = result.user;
                    console.log(user)
                    const docRef = doc(db,"users",user.uid)
                    await setDoc(docRef,{
                        username:user.displayName,
                        email:user.email,
                        role:"user",
                        createdAt:Timestamp.now().toMillis()})
                    toast.success("loggedin successfully")
                    navigate('/')
           
            }).catch((error) => {
                toast.error(error.message)
            });
        }
  return (
    <Container className='mt-5'>
       
        {isLoading &&  <Loader/>}
    <Row className='shadow p-3'>
    <Col>
        <img src='/src/assets/login.png' height={400} />
    </Col>
    <Col>   
            <Form onSubmit={handleSubmit}>
            <Form.Group>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="text" name="email"  value={user.email} onChange={(e)=>setUser({...user,email:e.target.value})}/>
                    </Form.Group>
                  
                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name="password"  value={user.password} onChange={(e)=>setUser({...user,password:e.target.value})}/>
                    </Form.Group>
                  
    <br/>
                  <div class="d-grid gap-2">
                  <Button type="submit" variant='primary' >Login</Button>           
                    </div>
                <hr/>
                <div class="d-grid gap-2">
                <Button type="button" variant='danger' onClick={loginwithgoogle}>Login With Google</Button> 
                
                </div>
                
            </Form>
            <p>create an account?? <Link to='/register'>Signup</Link></p>
    </Col>
   </Row>
   </Container>
  )
}

export default Login
