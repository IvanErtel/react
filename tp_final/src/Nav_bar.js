import React from "react";
import './Nav_bar.css';
import {Container, Navbar, Nav} from 'react-bootstrap';
import {NavLink, Link} from 'react-router-dom';

function Menu() {
    return (
    <>
    <Navbar sticky="top" bg="success" variant="dark">
      <Container >
      <Nav className="navbar"/>
      {/* <Navbar.Brand className="centrar" href='/'>DeRemeras</Navbar.Brand> */}
        <NavLink style={{textDecoration: 'none', color:'white', marginRight:'5Rem' }}  to="/">Home</NavLink>
        <Link style={{textDecoration: 'none', color:'white', marginRight:'5Rem' }} to="/producto/1">Remeras</Link>
        <Link style={{textDecoration: 'none', color:'white', marginRight:'5Rem' }} to="/pantalones/2">Pantalones</Link>
        <Link style={{textDecoration: 'none', color:'white', marginRight:'5Rem' }} to="/producto/3">Cat 3</Link>
        <Link style={{textDecoration: 'none', color:'white', marginRight:'5Rem' }} to="/producto/catId:4">Cat 4</Link>
        <NavLink style={{textDecoration: 'none', color:'white', marginRight:'5Rem' }}  to="/contacto">Contactanos</NavLink>
      </Container>
    </Navbar>
    </>
    );
  }
  
  export default Menu;