import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../App.css';

function Header() {
  return (
    <Navbar expand="lg" fixed="top" className="thin-navbar blur-navbar custom-navbar">
      <Container>
        <Navbar.Brand href="#home">CodeWithDarks</Navbar.Brand>

        {/* Hamburger Menu Button */}
        <Navbar.Toggle aria-controls="navbar-nav" />

        {/* Collapsible Nav Links */}
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className="mx-3" href="#projects">Projects</Nav.Link>
            <Nav.Link className="mx-3" href="#about">About</Nav.Link>
            <Nav.Link className="mx-3" href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
