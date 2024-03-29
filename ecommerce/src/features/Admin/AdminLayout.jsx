import React, { useEffect } from 'react'
import { Button, Col, Form, Image, InputGroup, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaArrowAltCircleLeft, FaHome, FaList, FaListAlt, FaLock, FaPenAlt, FaSearch, FaShoppingCart } from "react-icons/fa";
import { useSelector } from 'react-redux';
import { selectuserName } from '../../redux/authSlice';
import { Link, Outlet } from 'react-router-dom';
import { Logout } from '../hiddenlinks';

const AdminLayout = () => {
  return (
    <>
    <Navbar expand="lg" bg="dark" data-bs-theme="dark">
    <Container fluid>
      <Navbar.Brand href="#home"><Image src={"/src/assets/logo.jpg"} width={50} height={50}/> </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link as={Link} to='/admin'> <FaHome/> Home</Nav.Link>
          <NavDropdown title="Users" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Add</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">View </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Category" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Add</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">View </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Products" id="basic-nav-dropdown">
            <NavDropdown.Item as={Link} to='/admin/addproduct'>Add</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item as={Link} to='/admin/viewproducts'>View </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="slider" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Add</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">View </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link as={Link} to='/admin'>Orders</Nav.Link>
        </Nav>
       
        <Nav>   
        <Nav.Link><Logout/></Nav.Link>
                
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>

        <Row>
            <Col xs={2} className="bg-secondary">sider bar</Col>
            <Col xs={10}>
                <Container className='mt-5'>
                     <Outlet/>
                </Container>
                 
            </Col>
        </Row>
           
    </>
  )
}

export default AdminLayout
