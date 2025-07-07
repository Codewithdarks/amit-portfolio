import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../App.css';

function Header() {
  const [isDark, setIsDark] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Navbar expand="lg" fixed="top" className="thin-navbar blur-navbar custom-navbar">
      <Container>
        <Navbar.Brand data-glow href="#home">CodeWithDarks</Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-nav" />

        <Navbar.Collapse id="navbar-nav">
          {/* Center Navigation Links */}
          <Nav className="mx-auto">
            <Nav.Link 
              data-glow 
              className="mx-3" 
              href="#about"
              onClick={() => scrollToSection('About')}
            >
              Skills
            </Nav.Link>
            <Nav.Link 
              data-glow 
              className="mx-3" 
              href="#projects"
              onClick={() => scrollToSection('projects')}
            >
              Projects
            </Nav.Link>
            <Nav.Link 
              data-glow 
              className="mx-3" 
              href="#contact"
              onClick={() => scrollToSection('contact')}
            >
              Contact
            </Nav.Link>
          </Nav>

          {/* Social Media Icons */}
          <Nav className="social-icons">
            <Nav.Link 
              href="https://www.linkedin.com/in/codewithamittiwari/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-icon"
            >
              <i className="bi bi-linkedin"></i>
            </Nav.Link>
            <Nav.Link 
              href="https://github.com/Codewithdarks" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-icon"
            >
              <i className="bi bi-github"></i>
            </Nav.Link>
            <Nav.Link 
              href="https://www.instagram.com/amittiwari_0104/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-icon"
            >
              <i className="bi bi-instagram"></i>
            </Nav.Link>
            
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
