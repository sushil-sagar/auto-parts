import React, { useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useLocation } from 'react-router-dom'; // Import useLocation from react-router-dom

const navStyle = {
  backgroundColor: 'black',
  height: '15vh', // Increase the height of the navbar
};

const linkStyle = {
  color: '#ffffff',
  textDecoration: 'none',
  fontSize: '18px', // Increase font size for the links
};

const brandStyle = {
  color: '#ffffff',
};

const phoneNumberStyle = {
  ...linkStyle,
  backgroundColor: '#C2185B', // Background color for the phone number link
  padding: '1px 5px', // Padding around the text within the background
  borderRadius: '15px',
  marginLeft: '20px',
  height: '30px', // Adjust the height as needed to decrease the overall height
};

function Navbars() {
  const location = useLocation(); // Get the current URL location
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const currentLinkStyle = {
    ...linkStyle,
    color: '#C2185B', // Color for the current page link
    textDecoration: 'line-cross',
     // Strikethrough for the active link
  };
  return (
    <Navbar expand="lg" className="bg-body-dark" style={navStyle}>
      <Container>
        <Navbar.Brand href="/" style={brandStyle}>Quality Auto Salvage</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="navbar-dark" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav" className={`justify-content-end ${isMenuOpen ? 'show' : ''}`}>
          <Nav className="me-auto navbar-nav w-100">
            <Nav.Link href="/" style={location.pathname === '/' ? currentLinkStyle : linkStyle} className="nav-link">Home</Nav.Link>
            <Nav.Link href="/about" style={location.pathname === '/about' ? currentLinkStyle : linkStyle} className="nav-link">About</Nav.Link>
            <Nav.Link href="/place-an-order" style={location.pathname === '/place-an-order' ? currentLinkStyle : linkStyle} className="nav-link">Place an Order</Nav.Link>
            <Nav.Link href="/part-list" style={location.pathname === '/part-list' ? currentLinkStyle : linkStyle} className="nav-link">Part List</Nav.Link>
            <Nav.Link href="/customer-service" style={location.pathname === '/customer-service' ? currentLinkStyle : linkStyle} className="nav-link">Customer Service</Nav.Link>
            <Nav.Link href="/contact-us" style={location.pathname === '/contact-us' ? currentLinkStyle : linkStyle} className="nav-link">Contact Us</Nav.Link>
            <Nav.Link href="tel:+18887202716" style={phoneNumberStyle} className="nav-link">+1(888) 720-2716</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <style>
        {`
          .nav-link:hover {
            color: #C2185B !important;
          }
          @media (max-width: 768px) {
            .nav-link {
              background-color: #000;
              text-align: center;
            }
          }
         
        `}
      </style>
    </Navbar>
  );
}

export default Navbars;
