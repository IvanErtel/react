import React from "react";
// import {Button, Card, Container} from 'react-bootstrap';
import { useParams} from 'react-router-dom';
import { getProductos } from "./Productos";
 
export default function Productos(){
  let params = useParams();
  let producto = getProductos(parseInt(params.productoId));
  return(
    <main style={{ padding: "1rem" }}>
      <h2>Nombre: {producto.nombre}</h2>
      <p>
        {producto.texto}: {producto.texto}
      </p>
    </main>
  )
}

// const Producto = (props) => {
//     const detalle = useNavigate();
//     return(
//         <Container className="col-md-3">
//           <Container className="tex-center card-box" id="producto" >
//            <Card className="card bg-dark" style={{ maxWidth: '18rem'}} >
//             <Card.Img variant="top" className="img" src={props.img}  />
            
//              <Card.Body>
//                <Card.Title className="tittle text-light"><h2>{props.nombre}</h2></Card.Title>
//                <Card.Text className="textC text-light">{props.texto}</Card.Text>
//                <Button label='Ver Detalle' className="p-button-raiser p-button-rounded" onClick={() => detalle('/itemDetalles')}>Ver detalle</Button>              
//              </Card.Body>
//            </Card>
//           </Container>
//         </Container>
//     );
// }

// export default Productos;