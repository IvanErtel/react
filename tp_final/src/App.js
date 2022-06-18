
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import List from './List_product';
import Menu from './Nav_bar';
// import Footer from './Footer_';
// import { Container} from 'react-bootstrap';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
 
function App() {
  return (

  //  <Container>
    <BrowserRouter>
    <Routes>
      <Route exact path='/' element={ <Menu/>}/> 
      <Route exact path='/Productos' element= {<List/>}/> 
      {/* <Footer /> */}
    </Routes>
    </BrowserRouter> 
    
   //</Container>
  );
}

export default App;
