import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect } from 'react'
import { Button, Form, Image, InputGroup } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaArrowAltCircleLeft, FaHome, FaList, FaListAlt, FaLock, FaPenAlt, FaSearch, FaShoppingCart } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { auth, db } from '../firebase/config';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { loginuser, logoutuser, selectuserName } from '../redux/authSlice';
import { doc, getDoc } from 'firebase/firestore';
const Header = () => {
  const dispatch=useDispatch()
  const navigate=useNavigate()
  let handleLogout=()=>{
    signOut(auth).then(() => {
      toast.success('LoggedOut Successfully')
      navigate('/')
    }).catch((error) => {
      toast.error(error.message)
    });
  }

  useEffect(()=>{
    onAuthStateChanged(auth, async(user) => {
      if (user) {
              const uid = user.uid;
              const docRef = doc(db,"users",uid)    
              const docSnap=await getDoc(docRef)  
              let obj={
                userEmail:docSnap.data().email,
                userName:docSnap.data().username,
                userId:uid,
                userRole:docSnap.data().role
              } 
              dispatch(loginuser(obj))
      } 
      else {
        dispatch(logoutuser())
      }
    });
  },[auth])


  const username=useSelector(selectuserName)

  return (
    <Navbar expand="lg" bg="dark" data-bs-theme="dark">
    <Container fluid>
      <Navbar.Brand href="#home"><Image src={"/src/assets/logo.jpg"} width={50} height={50}/> </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link as={Link} to='/'> <FaHome/> Home</Nav.Link>
          <Nav.Link as={Link} to='/products'><FaList/> Products</Nav.Link>
          {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown> */}
        </Nav>
        <Form inline>
        <InputGroup>
          <Form.Control placeholder="search by name "  />
          <Button variant='danger'><FaSearch/></Button>
        </InputGroup>
      </Form>
        <Nav>   
                <Nav.Link href="#home"><FaShoppingCart size={30}/>
                            <span class="badge rounded-pill text-bg-danger" >0</span >
                            
                </Nav.Link>
                <Nav.Link as={Link} to='/login'><FaLock/> Login</Nav.Link>
                <Nav.Link as={Link} to='/register'><FaPenAlt/> Register</Nav.Link>
                <Nav.Link href="#home"><FaListAlt/> My Orders</Nav.Link>
                <Nav.Link href="#home">Welcome {username}</Nav.Link>
                <Nav.Link onClick={handleLogout}><FaArrowAltCircleLeft/> Logout</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);
}

export default Header
