import React from 'react'
import { Button, Card, Col } from 'react-bootstrap'

const ProductItem = ({product}) => {
  return (
    <>
    <Col xs={3} className='mb-3'>
     <Card>
      <Card.Img variant="top" src={`/src/assets/${product.image}`} height='200px'/>
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>
          {product.price}<br/>
          {product.qty}
        </Card.Text>
        <Button variant="primary">Add to Cart</Button>
      </Card.Body>
    </Card>
    </Col>
    </>
  )
}

export default ProductItem
