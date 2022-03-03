import React from 'react'
import {NavLink} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Container , Navbar } from 'react-bootstrap';
const Header = ()=>{
    return(
        
   <>    
<Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">Tourism</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto ">
   
      <Nav.Link > <NavLink  to ='/'  style={{ textDecoration: 'none', color:'inherit'}}>Home</NavLink></Nav.Link>
      {/* <Nav.Link><NavLink  to ='/travel'  style={{ textDecoration: 'none', color:'inherit'}}>Travel</NavLink></Nav.Link> */}
      <Nav.Link><NavLink  to ='/about'  style={{ textDecoration: 'none', color:'inherit' }}>About</NavLink></Nav.Link>
      
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>

  </>
    )
};
export default Header;