import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase/config'
import { toast } from 'react-toastify'
const Register = () => {
  let [user,setUser]=useState({username:'',email:'',password:'',cpassword:'',role:'user'})
    let [errors,setErrors]=useState({})
    let [isLoading,setIsLoading]=useState(false)
    const navigate=useNavigate()
       let handleSubmit=async(e)=>{
        setIsLoading(true)
        e.preventDefault()
        let myerrors=validateUser(user)
        if(Object.keys(myerrors).length == 0){
            setErrors({})         
            createUserWithEmailAndPassword(auth, user.email, user.password)
            .then((userCredential) => {
                const user = userCredential.user;
                toast.success("registered successfully")
                navigate('/')
            })
            .catch((error) => {
               toast.error(error.message)
            });
            
            setIsLoading(false)
        }
        else {
            setErrors(myerrors)
            setIsLoading(false)
            e.preventDefault()
        }
    }

    let validateUser=(user)=>{
        let formerrors={}
        let pattern= /^[\w\!\@\#\$\%\^\&\*\-\+\=\.]+\@[\w]+\.[a-zA-Z]{2,3}$/
        if(user.username==''){
            formerrors.unameerr="Username is required" // formerrors={unameerr:"Username is required"}
        }
        if(user.email.length==0){
            formerrors.emailerr="Email is required" // formerrors={unameerr:"Username is required",emailerr:"Email is required"}
        }
        else if(!pattern.test(user.email)){
            formerrors.emailerr="Invalid Email"
        }
        if(user.password==''){
            formerrors.pwderr="password is required"
        }    
        if(user.cpassword=='' || user.password != user.cpassword){
            formerrors.cpwderr="password not match"
        }
        return formerrors
    }


  return (
    <Container className='mt-5'>
        {isLoading && <h1>Loading</h1>}
    <Row className='shadow p-3'>
        <Col>
            <img src='/src/assets/register.png' height={400} />
        </Col>
        <Col>   
                <Form onSubmit={handleSubmit}>
                    <Form.Group>
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" name="username" value={user.username} onChange={(e)=>setUser({...user,username:e.target.value})}/>
                    </Form.Group>
                    {errors.unameerr && <span className='text-danger'>{errors.unameerr}</span>}
                    <Form.Group>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="text" name="email"  value={user.email} onChange={(e)=>setUser({...user,email:e.target.value})}/>
                    </Form.Group>
                    {errors.emailerr && <span className='text-danger'>{errors.emailerr}</span>}
                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name="password"  value={user.password} onChange={(e)=>setUser({...user,password:e.target.value})}/>
                    </Form.Group>
                    {errors.pwderr && <span className='text-danger'>{errors.pwderr}</span>}
                  
                    <Form.Group>
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" name="cpassword"  value={user.cpassword} onChange={(e)=>setUser({...user,cpassword:e.target.value})}/>
                    </Form.Group>
                    {errors.cpwderr && <span className='text-danger'>{errors.cpwderr}</span>}
                    <br/>
                     <Button type="submit" variant='primary' className='mt-3'>Submit</Button>
                </Form>
                <p>Already an account?? <Link to='/login'>Login</Link></p>
        </Col>
    </Row>
    </Container>
  )
}

export default Register
