import React from 'react'
import { Container, Table } from 'react-bootstrap'
import useFetchCollection from '../../custom hook/useFetchCollection'
import {FaPen, FaTrash} from 'react-icons/fa'
const ViewProducts = () => {
  const {data}=useFetchCollection("products")
  console.log(data)
  return (
    <Container className="mt-5 shadow p-3">
        <h1>View Products</h1>
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>Id</th>
          <th>Category</th>
          <th>Name</th>
          <th>Image</th>
          <th>Brand</th>
        <th>Price</th>
        <th>Stock</th>
        <th>Action</th>
        </tr>
      </thead>
      <tbody>
      {data.length==0 && <tr><td colSpan={8}>No product found</td></tr>}
      {data.map((product)=>
        <tr key={product.id}>
          <td>{product.id}</td>
          <td>{product.category}</td>
          <td>{product.name}</td>
          <td><img src={product.image} height={40} width={50}/></td>
          <td>{product.brand}</td>
          <td>{product.price}</td>
          <td>{product.stock}</td>
          <td>
            <button
              type="button"
              class="btn btn-success me-2"
            >
              <FaPen/>
            </button>
            <button
              type="button"
              class="btn btn-danger me-2"
            >
              <FaTrash/>
            </button>
          </td>
        </tr>
      )}
      </tbody>
    </Table>
   </Container>
  )
}

export default ViewProducts
