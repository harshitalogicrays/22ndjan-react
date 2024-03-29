import React, { useState } from 'react'
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap'

const AddProduct = () => {
    const categories=[  {id:1,name:'Cloths',desc:'fghjfhgf'},
                        {id:2,name:'Electronics',desc:'fghjfhgf'},
                        {id:3,name:'Grocery',desc:'fghjfhgf'},
                        {id:4,name:'Accessories',desc:'fghjfhgf'},
                        {id:5,name:'Games',desc:'fghjfhgf'},
                        {id:6,name:'Books',desc:'fghjfhgf'}]

    let initialState={name:'',brand:'',category:'',price:'',stock:'',image:'',desc:''}
    const [product,setProduct]=useState({...initialState})

    let handleImage=(e)=>{
        console.log(e.target.files)
    }

    let handleSubmit=(e)=>{
        e.preventDefault()
        alert(JSON.stringify(product))
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
                        <Row>
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