
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './Nav_bar';
import Footer from './Footer_';
import Contactos from './paginas/Contactos';
import { Container} from 'react-bootstrap';
import {Route, BrowserRouter, Routes} from 'react-router-dom';
import Inicio from './paginas/Inicio';
import Productslista from './Productoslista';
import Pantaloneslista from './Pantaloneslista'

 
function App() {
  // const {productos} = useParams();
  
  return (
 
   <Container>
    <BrowserRouter>
    <Menu></Menu>
    <Routes>
      <Route path='/' element={<Inicio/>}></Route>
      <Route path='/producto/:productosId' element={<Productslista/> }></Route>
      <Route path='/pantalones/:pantalonesId' element={<Pantaloneslista/> }></Route>
      <Route path='/contacto' element={<Contactos/>}></Route>
    </Routes>
    <Footer />
    
    
    </BrowserRouter> 
    
   </Container>
  );
}

export default App;
