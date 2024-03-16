import React from 'react'
import { Button, Col, Container, Form, Image, Row } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { ADD_USER } from '../redux/userSlice'

const AddUser = () => {
  let {register,handleSubmit,formState: { errors },trigger,getValues}=useForm()
  const dispatch=useDispatch()
  let adduser=(data)=>{
      // alert(JSON.stringify(data))   
      dispatch(ADD_USER({...data,role:'user'}))
  }
  return (
   <> <Container >
          <Row className='shadow mt-5 p-2'>
            <Col xs={4}>
             <Image src={'/src/assets/register.png'} className='img-fluid' />
            </Col>
            <Col>
              <Form onSubmit={handleSubmit(adduser)} >
                  <Form.Group className='mb-3'>
                      <Form.Label>Username</Form.Label>
                      <Form.Control type="text" {...register('username',{required:"Username is required"
                    })} onBlur={()=>trigger('username')}></Form.Control>
                  </Form.Group>
                  {errors.username && <span className='text-danger'>{errors.username.message}</span>}
                  <Form.Group className='mb-3'>
                      <Form.Label>Email</Form.Label>
                      <Form.Control type="text"  {...register('email',{required:'email is required',
                        pattern:{
                          value:/^([\w\!\@\#\$\%\^\&\*\-\+\=\.]+)\@([\w]+)\.([a-zA-Z]{3})$/,
                          message:"Invalid Email"
                        }
                    })} onBlur={()=>trigger('email')}></Form.Control>
                  </Form.Group>
                  {errors.email && <span className='text-danger'>{errors.email.message}</span>}
                  <Form.Group className='mb-3'>
                      <Form.Label>Password</Form.Label>
                      <Form.Control type="password"  {...register('password',{required:"password is required", minLength:{value:5,message:"min 5 char"},maxLength:{value:12,message:"max 12 char"}})} onBlur={()=>trigger('password')}></Form.Control>
                  </Form.Group>
                  {errors.password && <span className='text-danger'>{errors.password.message}</span>}
                  <Form.Group className='mb-3'>
                      <Form.Label>Confirm Password</Form.Label>
                      <Form.Control type="password"  {...register('cpassword',{required:"confirm password is required",
                    validate:(cpassword)=>{
                        const {password}=getValues()
                        return password==cpassword || "password not match"
                    }
                    })}></Form.Control>
                  </Form.Group>
                  {errors.cpassword && <span className='text-danger'>{errors.cpassword.message}</span>}<br/>
                  <Button type="submit">Submit</Button>
              </Form>
            </Col>
          </Row>
        </Container>
   </>
  )
}

export default AddUser
