import React from 'react'
import {Navbar, Nav} from 'react-bootstrap'
import { Link } from "react-router-dom"
export default function Naavbar() {
    return (
     <div>  
  <Navbar bg="dark" variant="dark">

    <Navbar.Brand href="home">Movie App</Navbar.Brand>
    <Nav className="me-auto">
      <Link to="home">Home</Link>
      <Link to="movies">Movies</Link>
      <Link to="Search">Search</Link>
      
    </Nav>
    
  </Navbar>
  </div>

    )
}

