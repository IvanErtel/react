import { getProducto } from './Productos'
// import { Container, ListGroup } from "react-bootstrap";
import { useParams } from 'react-router';
export function DetalleRemera(){
   let detalleRemera = getProducto();
   let {productoId}= useParams();
    return(

        <div>
          {detalleRemera.id}
          <h1>{detalleRemera.nombre}</h1>
          <p className="card-text text-secondary">
                 detalle:{productoId} {detalleRemera.texto}
          </p>
         </div>
                
      
    );
   
}
