import React from "react";
// import 'Nav_bar.css'
import './Nav_bar.css';
import {Container, Navbar, Nav} from 'react-bootstrap'

function Menu() {
    return (
    <>
    <Navbar sticky="top" bg="success" variant="dark">
      <Container >
      <Navbar.Brand className="centrar" href="#home">DeRemeras</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link className="letras" href="#home">Home</Nav.Link>
        <Nav.Link className="letras" href="#features">Indumentaria</Nav.Link>
        <Nav.Link className="letras" href="#pricing">Sobre nosotros</Nav.Link>
      </Nav>
      </Container>
    </Navbar>
    </>
    );
  }
  
  export default Menu;