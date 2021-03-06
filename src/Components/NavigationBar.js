import React from 'react'
import {Navbar,Nav,Container,Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function NavigationBar() {
  return (
       <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark" className='fixed-top'>
  <Container>
    <Button variant='outline-warning'>
    <Navbar.Brand href="#home">SMOOTH CREATIONS <br/> PTY LTD</Navbar.Brand>
    </Button>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse bg='danger' id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link as={Link} to="/"><b>HOME</b></Nav.Link>
      <Nav.Link as={Link} to="/Products"><b>ABOUT</b></Nav.Link>
      <Nav.Link as={Link} to="/Solutions"><b>SOLUTIONS</b></Nav.Link>
      <Nav.Link as={Link} to="/Team"><b>MEET THE TEAM</b></Nav.Link>
      <Nav.Link as={Link} to="/Gallery"><b>GALLERY</b></Nav.Link>
    </Nav>
    <Nav>
      <Button variant='danger'>
      <Nav.Link as={Link} to="/Contact"><b>GET IN TOUCH</b></Nav.Link>
      </Button>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
  )
}

