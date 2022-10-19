import React from "react";
import './Inicio.css';
import {Carousel} from 'react-bootstrap'
function Inicio(){
    return(
<Carousel>
<Carousel.Item>
  <img
    className="d-block w-100 carousel"
    src="../banner1.png" 
    alt="First slide"
  />
  <Carousel.Caption>
  </Carousel.Caption>
</Carousel.Item>
<Carousel.Item>
  <img
    className="d-block w-100 carousel"
    src="../banner2.png"
    alt="Second slide"
  />

  <Carousel.Caption>
  </Carousel.Caption>
</Carousel.Item>
<Carousel.Item>
  <img
    className="d-block w-100 carousel"
    src="../banner3.png"
    alt="Third slide"
  />

  <Carousel.Caption>
  </Carousel.Caption>
</Carousel.Item>
</Carousel>
);
}

export default Inicio;