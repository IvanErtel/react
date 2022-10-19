
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './Nav_bar';
import Footer from './Footer_';
import Contactos from './paginas/Contactos';
import { Container} from 'react-bootstrap';
import {Route, BrowserRouter, Routes} from 'react-router-dom';
import Inicio from './paginas/Inicio';
import { DetalleRemera } from './DetalleRemera';
import Productos from './Productos';
import { DetallePantalones } from './DetallePantalones';
import{Pantalones} from './Pantalones'
import Cart from './paginas/cart';

 
function App() {
  return (
 
   <Container>
    <BrowserRouter>
    <Menu></Menu>
    
    <Routes>
      <Route path='/' element={<Inicio/>}></Route>
      <Route path='/producto/:Id' element={<Productos/> }></Route>
      <Route path='/producto/:productoId/:productoId' element={<DetalleRemera/> }></Route>
      <Route path='/pantalones/:Id' element={<Pantalones/> }></Route>
      <Route path='/pantalones/:pantalonesId/:pantalonesId' element={<DetallePantalones/> }></Route>
      <Route path='/contacto' element={<Contactos/>}></Route>
      <Route path='/cart' element={<Cart/>}></Route>
    </Routes>
    <Footer />
    
    
    </BrowserRouter> 
    
   </Container>
  );
}

export default App;
