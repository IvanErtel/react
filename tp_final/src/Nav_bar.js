import React from "react";
import './Nav_bar.css';
import {Container, Navbar, Nav} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';

function Menu() {
    return (
    <>
    <Navbar sticky="top" bg="success" variant="dark">
      <Container >
      
      <Navbar.Brand className="centrar" href='/inicio'>DeRemeras</Navbar.Brand>
      <Nav className="me-auto"/>
        <NavLink className="letras" to="/inicio">Home</NavLink>
        <NavLink className="letras" to="/producto">Remeras</NavLink> | {" "}
        <NavLink className="letras" to="/contacto">Contactanos</NavLink>
      
      </Container>
    </Navbar>
    </>
    );
  }
  
  export default Menu;