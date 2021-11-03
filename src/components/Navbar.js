import React from 'react'
import {Navbar, Nav} from 'react-bootstrap'
export default function Naavbar() {
    return (
     <div>  
  <Navbar bg="dark" variant="dark">

    <Navbar.Brand href="home">Movie App</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="home">Home</Nav.Link>
      <Nav.Link href="features">Movies</Nav.Link>
      <Nav.Link href="pricing">Others</Nav.Link>
      
    </Nav>
    
  </Navbar>
  </div>

    )
}

