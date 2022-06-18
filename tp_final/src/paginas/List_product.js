import React from "react";
import './list_product.css';
import {Card, Button, Container} from 'react-bootstrap';
// import {BrowserRouter} from 'react-router-dom'

function List() {

    return (
       <Container className="producto" id="producto"> 
      
      <Card className="card bg-dark" style={{ width: '18rem'}} >
  <Card.Img variant="top" className="img" src="./remera_naranja.jpg"  />
  <Card.Body>
    <Card.Title className="tittle text-light">Remera Naranja</Card.Title>
    <Card.Text className="textC text-light">
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button className="btn1 btn-outline-secondary text-light rounded-0" variant="primary">Agregar al carrito</Button>
  </Card.Body>
</Card>

<Card style={{ width: '18rem' }} className="bg-dark">
  <Card.Img variant="top" className="img" src="./remera_rosa.jpg" />
  <Card.Body>
    <Card.Title className="tittle text-light">Remera Naranja</Card.Title>
    <Card.Text className="textC text-light">
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button className="btn1 btn-outline-secondary text-light rounded-0" variant="primary">Agregar al carrito</Button>
  </Card.Body>
</Card>

<Card style={{ width: '18rem' }} className="bg-dark">
  <Card.Img variant="top" className="img" src="./remera_azul.jpg" />
  <Card.Body>
    <Card.Title className="tittle text-light">Remera Naranja</Card.Title>
    <Card.Text className="textC text-light">
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button className="btn1 btn-outline-secondary text-light rounded-0" variant="primary">Agregar al carrito</Button>
  </Card.Body>
</Card>

<Card style={{ width: '18rem' }} className="bg-dark">
  <Card.Img variant="top" className="img" src="./remera_roja.jpg" />
  <Card.Body>
    <Card.Title className="tittle text-light">Remera Naranja</Card.Title>
    <Card.Text className="textC text-light">
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button className="btn1 btn-outline-secondary text-light rounded-0" variant="primary">Agregar al carrito</Button>
  </Card.Body>
</Card>

<Card style={{ width: '18rem' }} className="bg-dark">
  <Card.Img variant="top" className="img" src="./remera_verde.jpg" />
  <Card.Body>
    <Card.Title className="tittle text-light">Remera Naranja</Card.Title>
    <Card.Text className="textC text-light">
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button className="btn1 btn-outline-secondary text-light rounded-0" variant="primary">Agregar al carrito</Button>
  </Card.Body>
</Card>

</Container>


    );
  }
  
  export default List;
