import React from 'react'
import {Navbar,Nav,Container,Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function NavigationBar() {
  return (
       <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark" className='fixed-top'>
  <Container>
    <Button variant='outline-info'>
    <Navbar.Brand href="#home">Smooth Creations</Navbar.Brand>
    </Button>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse bg='danger' id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link as={Link} to="/"><b>HOME</b></Nav.Link>
      <Nav.Link as={Link} to="/Solutions"><b>SOLUTIONS</b></Nav.Link>
      <Nav.Link as={Link} to="/Products"><b>PRODUCTS & SERVICES</b></Nav.Link>
      <Nav.Link as={Link} to="/Team"><b>MEET THE TEAM</b></Nav.Link>
    </Nav>
    <Nav>
      <Button variant='info'>
      <Nav.Link as={Link} to="/Contact"><b>GET IN TOUCH</b></Nav.Link>
      </Button>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
  )
}

