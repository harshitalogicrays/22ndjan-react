import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'
import React, { useState } from 'react'
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap'
import { db, storage } from '../../firebase/config'
import { toast } from 'react-toastify'
import { Timestamp, addDoc, collection } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom'

const AddProduct = () => {
    const categories=[  {id:1,name:'Cloths',desc:'fghjfhgf'},
                        {id:2,name:'Electronics',desc:'fghjfhgf'},
                        {id:3,name:'Grocery',desc:'fghjfhgf'},
                        {id:4,name:'Accessories',desc:'fghjfhgf'},
                        {id:5,name:'Games',desc:'fghjfhgf'},
                        {id:6,name:'Books',desc:'fghjfhgf'}]

    let initialState={name:'',brand:'',category:'',price:'',stock:'',image:'',desc:''}
    const [product,setProduct]=useState({...initialState})
    const [uploadprogress,setUploadProgress]=useState(0)
    const navigate=useNavigate()

    let handleImage=(e)=>{
        // console.log(e.target.files)
        let file=e.target.files[0]
           const storageRef = ref(storage,`22ndreact/products/${Date.now()}`)
           const uploadTask=uploadBytesResumable(storageRef,file)
           uploadTask.on("state_changed",(snapshot)=>{
                let progress=(snapshot.bytesTransferred /snapshot.totalBytes) *100
                setUploadProgress(progress)
           },(error)=>{toast.error(error.message)},
           ()=>{
                getDownloadURL(uploadTask.snapshot.ref).then((url)=>{
                    console.log(url)
                    setProduct({...product,image:url})  
                })
           })
    }

    let handleSubmit=async(e)=>{
        e.preventDefault()
        try{
            const docRef=collection(db,"products")
            await addDoc(docRef,{...product,createdAt:Timestamp.now().toMillis()})
            toast.success("product added")
            navigate('/admin/viewproducts')
        }
        catch(error){
            toast.error(error.message)
        }
    }
  return (
    <Container>
        <Card>
            <Card.Header><h1>Add Product 
                <Button variant='primary' className='btn-lg float-end'>View Products</Button></h1></Card.Header>
                <Card.Body>
                <Form onSubmit={handleSubmit}>
                        <Form.Group>
                            <Form.Label>Category</Form.Label>
                            <Form.Select name="category" value={product.category} onChange={(e)=>setProduct({...product,category:e.target.value})}>
                                <option value='' selected disabled>select one</option>
                                {categories.map((c,i)=><option key={c.id}>{c.name}</option>)}
                            </Form.Select>
                        </Form.Group>
                        <Row>
                            <Col xs={6}>
                            <Form.Group>
                            <Form.Label>Name</Form.Label>
                            <Form.Control name="name"  value={product.name} onChange={(e)=>setProduct({...product,name:e.target.value})}></Form.Control>
                        </Form.Group>
                            </Col>
                            <Col xs={6}>
                            <Form.Group>
                            <Form.Label>Brand</Form.Label>
                            <Form.Control name="brand"  value={product.brand} onChange={(e)=>setProduct({...product,brand:e.target.value})}></Form.Control>
                            </Form.Group>
                            </Col>
                        </Row>
                        <Row className='mb-3'>
                            <Col xs={6}>
                            <Form.Group>
                            <Form.Label>Price</Form.Label>
                            <Form.Control type="number" name="price"  value={product.price} onChange={(e)=>setProduct({...product,price:e.target.value})}></Form.Control>
                        </Form.Group>
                            </Col>
                            <Col xs={6}>
                            <Form.Group>
                            <Form.Label>Stock</Form.Label>
                            <Form.Control name="stock" type="number"  value={product.stock} onChange={(e)=>setProduct({...product,stock:e.target.value})}></Form.Control>
                            </Form.Group>
                            </Col>
                        </Row>
    {uploadprogress > 0 && 
     <div class="progress">
    <div class="progress-bar" style={{width: `${uploadprogress}%`}}>
      {uploadprogress < 100 ? `uploading ${uploadprogress}%` : `uploaded ${uploadprogress}%`}
      </div>
      </div>}
                        <Form.Group>
                            <Form.Label>Image</Form.Label>
                            <Form.Control name="image" type="file" onChange={handleImage}></Form.Control>
                        </Form.Group>
                        <Form.Group className='mb-3'>
                            <Form.Label>Description</Form.Label>
                            <Form.Control name="desc" as="textarea"  value={product.desc} onChange={(e)=>setProduct({...product,desc:e.target.value})}></Form.Control>
                        </Form.Group>
                        <Button type="submit">Submit</Button>
               </Form>
                </Card.Body>
        </Card>
        
    </Container>
  )
}

export default AddProduct