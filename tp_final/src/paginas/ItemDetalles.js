import React from "react";
// import {Card, Button, Container} from 'react-bootstrap';
import Producto from "../Productos";

function ItemDetalles(props){

    return(
      <>
      <Producto id={props.id}></Producto>
      <Producto id={props.nombre}></Producto>

      </>
  //       <Container className="producto" id="producto"> 
      
  //       <Card className="card bg-dark" style={{ width: '18rem'}} >
  //   <Card.Img variant="top" className="img" src="./remera_naranja.jpg"  />
  //   <Card.Body>
  //     <Card.Title className="tittle text-light">{props.nombre}</Card.Title>
  //     <Card.Text className="textC text-light">
  //       Some quick example text to build on the card title and make up the bulk of
  //       the card's content.
  //     </Card.Text>
  //     <Button className="btn1 btn-outline-secondary text-light rounded-0" variant="primary">Agregar al carrito</Button>
  //   </Card.Body>
  // </Card>
  // </Container>
    )
}

export default ItemDetalles;