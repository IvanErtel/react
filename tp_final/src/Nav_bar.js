import React from "react";
import './Nav_bar.css';
import { Container, Nav, Navbar} from 'react-bootstrap';
import {NavLink, Link} from 'react-router-dom';

function Menu() {
    return (
    <>
    <Nav className="justify-content-center" variant="tabs" >
       <Navbar collapseOnSelect expand="lg" variant="dark" className="navbar justify-content-center">
         <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
          <NavLink style={{textDecoration: 'none', color:'black', marginRight:'5Rem' }}  to="/"><img className="imgNavbar" src="../logoHome.jpg"></img><h5>Home</h5></NavLink>
          <Link style={{textDecoration: 'none', color:'black', marginRight:'5Rem' }} to="/producto/1"><img className="imgNavbar" src="../remera_negra.jpg"></img><h5>Remeras</h5> </Link>
          <Link style={{textDecoration: 'none', color:'black', marginRight:'5Rem' }} to="/pantalones/3"><img className="imgNavbar" src="../pantalon4.webp"></img><h5>Pantalones</h5></Link>
          <Link style={{textDecoration: 'none', color:'black', marginRight:'5Rem' }} to="/producto/catId:4">Cat 4</Link>
          <NavLink style={{textDecoration: 'none', color:'black', marginRight:'5Rem' }}  to="/contacto">Contactanos</NavLink>
          <NavLink style={{textDecoration: 'none', color:'black', marginRight:'5Rem' }}  to="/cart"><img className="imgNavbar" src="../logoCarrito3.jpg"></img><h5>Carrito</h5></NavLink>
          </Navbar.Collapse>
         </Container>
        </Navbar>
    </Nav>
    </>
    );
  }
  
  export default Menu;