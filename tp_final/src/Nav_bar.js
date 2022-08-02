import React from "react";
import './Nav_bar.css';
import { Container, Navbar} from 'react-bootstrap';
import {NavLink, Link} from 'react-router-dom';

function Menu() {
    return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="success" variant="dark">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <NavLink style={{textDecoration: 'none', color:'white', marginRight:'5Rem' }}  to="/">Home</NavLink>
        <Link style={{textDecoration: 'none', color:'white', marginRight:'5Rem' }} to="/producto/1">Remeras</Link>
        <Link style={{textDecoration: 'none', color:'white', marginRight:'5Rem' }} to="/pantalones/3">Pantalones</Link>
        <Link style={{textDecoration: 'none', color:'white', marginRight:'5Rem' }} to="/producto/catId:4">Cat 4</Link>
        <NavLink style={{textDecoration: 'none', color:'white', marginRight:'5Rem' }}  to="/contacto">Contactanos</NavLink>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
    );
  }
  
  export default Menu;