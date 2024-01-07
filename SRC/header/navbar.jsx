import React, { useState } from 'react';
import {  Container, Nav, Navbar } from 'react-bootstrap';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useLocation } from 'react-router-dom'; // Import useLocation from react-router-dom
import Logo from '../assets/logomain.png';
import "./navbars.css";


const linkStyle = {
  color: '#ffffff',
  textDecoration: 'none',
  fontSize: '18px',
  marginLeft:'20px', // Increase font size for the links
};

const phoneNumberStyle = {
  ...linkStyle,
  backgroundColor: '#C2185B', // Background color for the phone number link
  padding: '1px 5px', // Padding around the text within the background
  borderRadius: '15px',
  marginLeft: '75px',
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
      <Navbar expand="lg" style={{ backgroundColor: '#000' }}>
        <Container>
        <Navbar.Brand href="/">
        <img
          src={Logo}
          alt="Logo"
          style={{
            width: '120px',
            // Default width for larger screens
            
          }}
        />
      </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="navbar-dark custom-toggle" onClick={toggleMenu}>
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
          <style>
        {`
          .nav-link:hover {
            color: #C2185B !important;
          }
          @media (max-width: 768px) {
            .navbar-toggler {
              display: block !important;
            }
            .navbar-collapse {
              display: ${isMenuOpen ? 'block' : 'none'} !important;
              text-align: center; /* Center-align the links */
            }
            .navbar-nav {
              display: flex;
              flex-direction: column;
              align-items: center; /* Align items (links) in the center */
            }
            .nav-link {
              display: block; /* Make links behave as block elements */
              margin-bottom: 10px; /* Add space between links */
              background-color: #000;
            }
          }
        `}
      </style>
      </Container>
    </Navbar>
  );
}

export default Navbars;