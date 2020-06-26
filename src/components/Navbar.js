import React from 'react';
import{Navbar, Nav} from 'react-bootstrap'

function About(){
    return(
        
      <Navbar  sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="#section-a">Charles Daoust Portfolio</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#section-a">Home</Nav.Link>
          <Nav.Link href="#section-b">About</Nav.Link>
          <Nav.Link href="#section-c">Projects</Nav.Link> 
        </Nav>
        
      </Navbar.Collapse>
    </Navbar>
    )
}


export default About;