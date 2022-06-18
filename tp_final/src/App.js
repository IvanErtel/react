
import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import List from './paginas/List_product';
import Menu from './Nav_bar';
import Footer from './Footer_';
import { Route } from 'react-router-dom';
import Contactos from './paginas/Contactos';
// import { Container} from 'react-bootstrap';
import {BrowserRouter, Routes} from 'react-router-dom';
import Inicio from './paginas/Inicio';
 
function App() {
  return (

  //  <Container>
    <BrowserRouter>
    <Menu/>
    <Routes>
      {/* <Route  path='/' element={ <Menu/> }/>  */}
      <Route  path='/productos' element= {<List/>}/> 
      <Route  path='/contacto' element={<Contactos/>}/>
      <Route path='/inicio' element={<Inicio/>}/>
    </Routes>
    <Footer />
    
    </BrowserRouter> 
    
   //</Container>
  );
}

export default App;
