import React from 'react';
import{Navbar, Nav} from 'react-bootstrap'
var FontAwesome = require('react-fontawesome');

function About(){
    return(
        
      <Navbar  sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="#Home">Charles Daoust Portfolio</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#Home">Home</Nav.Link>
          <Nav.Link href="#About">About Me</Nav.Link>
          <Nav.Link href="#Client Reviews">Client Reviews</Nav.Link> 
          <Nav.Link href="#Work & Personal projects">Work & Personal projects</Nav.Link> 
        </Nav>
        <Nav className="ml-auto">
          <Nav.Link href="https://www.linkedin.com/in/charles-daoust-5a043b165/">
        <FontAwesome
        name="linkedin"
        size="2x"
        style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
      />
      </Nav.Link>
        </Nav>
        
      </Navbar.Collapse>
    </Navbar>
    )
}


export default About;