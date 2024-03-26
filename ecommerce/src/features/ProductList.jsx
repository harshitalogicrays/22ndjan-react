import React from 'react'
import { Container, Row } from 'react-bootstrap'
import ProductItem from './ProductItem'

const ProductList = ({products}) => {
  return (
    <Container className='mt-5'>
        {products.length==0 && <h1>No Product Found</h1>}
        <Row>
                 {products.map(product=> <ProductItem key={product.id}  product={product}/>)}
        </Row>
    </Container>
  )
}

export default ProductList
