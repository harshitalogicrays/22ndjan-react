import React from 'react'
import ProductList from './ProductList'

const Products = () => {
  let products= [ {id:101,name:'product1',price:4000,image:'images/a.jpg',qty:10},
  {id:102,name:'product2',price:5000,image:'images/b.jpg',qty:20},
  {id:103,name:'product3',price:2000,image:'images/c.jpeg',qty:30},
  {id:104,name:'product4',price:8000,image:'images/d.jpg',qty:14},
  {id:105,name:'product5',price:1000,image:'images/a.jpg',qty:1} ]
  return (
   <> <ProductList products={products}/>
   </>
  )
}

export default Products
