import React from "react";
import './Inicio.css';
import {Carousel} from 'react-bootstrap'
function Inicio(){
    return(
<Carousel>
<Carousel.Item>
  <img
    className="d-block w-100 carousel"
    src="https://www.tooltyp.com/wp-content/uploads/2014/10/1900x920-8-beneficios-de-usar-imagenes-en-nuestros-sitios-web.jpg"
    alt="First slide"
  />
  <Carousel.Caption>
    <h3>First slide label</h3>
    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
  </Carousel.Caption>
</Carousel.Item>
<Carousel.Item>
  <img
    className="d-block w-100 carousel"
    src="https://ep01.epimg.net/elpais/imagenes/2019/10/30/album/1572424649_614672_1572453030_noticia_normal.jpg"
    alt="Second slide"
  />

  <Carousel.Caption>
    <h3>Second slide label</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  </Carousel.Caption>
</Carousel.Item>
<Carousel.Item>
  <img
    className="d-block w-100 carousel"
    src="https://images.unsplash.com/photo-1621139261252-27d1a67449f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHNhdmFubmF8ZW58MHx8MHx8&w=1000&q=80"
    alt="Third slide"
  />

  <Carousel.Caption>
    <h3>Third slide label</h3>
    <p>
      Praesent commodo cursus magna, vel scelerisque nisl consectetur.
    </p>
  </Carousel.Caption>
</Carousel.Item>
</Carousel>
);
}

export default Inicio;