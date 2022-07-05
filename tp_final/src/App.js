
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './Nav_bar';
import Footer from './Footer_';
import Contactos from './paginas/Contactos';
import { Container} from 'react-bootstrap';
import {Route, BrowserRouter, Routes} from 'react-router-dom';
import Inicio from './paginas/Inicio';
// import ItemDetalles from './paginas/ItemDetalles';
import Producto from './paginas/ItemDetalles';
 
function App() {
  
  return (

   <Container>
    <BrowserRouter>
    <Menu></Menu>
    <Routes>
      <Route  path='/' element={ <Inicio/> }/> 
      <Route path='/producto' element={<Producto/>}></Route>
      <Route  path='/contacto' element={<Contactos/>}/>
      <Route path='/inicio' element={<Inicio/>}/>
      <Route path=':productoId' element={<Producto/>}/>
    </Routes>
    <Footer />
    
    </BrowserRouter> 
    
   </Container>
  );
}

export default App;
