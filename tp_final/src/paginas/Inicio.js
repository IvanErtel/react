import React from "react";
import './Inicio.css';
import {Carousel} from 'react-bootstrap'
function Inicio(){
    return(
<Carousel>
<Carousel.Item>
  <img
    className="d-block w-100 carousel"
    src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/clothes-apparel-big-sale-banner-for-facebook-design-template-32dffcab7597606310e4cbedfef0ef73_screen.jpg?ts=1626695536"
    alt="First slide"
  />
  <Carousel.Caption>
  </Carousel.Caption>
</Carousel.Item>
<Carousel.Item>
  <img
    className="d-block w-100 carousel"
    src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/fashion-sale-banner-template-design-4772368bb4e85c49923b38d0c7cd5fc6_screen.jpg?ts=1649240579"
    alt="Second slide"
  />

  <Carousel.Caption>
  </Carousel.Caption>
</Carousel.Item>
<Carousel.Item>
  <img
    className="d-block w-100 carousel"
    src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/summer-clothes-sale-retail-banner-design-template-17bd9937665ee1326e96139f8c544db3_screen.jpg?ts=1567083202"
    alt="Third slide"
  />

  <Carousel.Caption>
  </Carousel.Caption>
</Carousel.Item>
</Carousel>
);
}

export default Inicio;