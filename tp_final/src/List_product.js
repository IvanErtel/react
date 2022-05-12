import React from "react";
import './list_product.css';
import {Card, Button, Container} from 'react-bootstrap';
function List() {
    return (
      <>
      <Container className="producto" id="producto">
      
      <Card className="card" style={{ width: '18rem'}} >
  <Card.Img variant="top" className="img" src="./remera_naranja.jpg"  />
  <Card.Body>
    <Card.Title className="tittle">Remera Naranja</Card.Title>
    <Card.Text className="textC">
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button className="btn1" variant="primary">Agregar al carrito</Button>
  </Card.Body>
</Card>

<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" className="img" src="./remera_rosa.jpg" />
  <Card.Body>
    <Card.Title className="tittle">Remera Naranja</Card.Title>
    <Card.Text className="textC">
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Agregar al carrito</Button>
  </Card.Body>
</Card>

<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" className="img" src="./remera_azul.jpg" />
  <Card.Body>
    <Card.Title className="tittle">Remera Naranja</Card.Title>
    <Card.Text className="textC">
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Agregar al carrito</Button>
  </Card.Body>
</Card>

<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" className="img" src="./remera_roja.jpg" />
  <Card.Body>
    <Card.Title className="tittle">Remera Naranja</Card.Title>
    <Card.Text className="textC">
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Agregar al carrito</Button>
  </Card.Body>
</Card>

<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" className="img" src="./remera_verde.jpg" />
  <Card.Body>
    <Card.Title className="tittle">Remera Naranja</Card.Title>
    <Card.Text className="textC">
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Agregar al carrito</Button>
  </Card.Body>
</Card>
</Container>
 </>

    );
  }
  
  export default List;