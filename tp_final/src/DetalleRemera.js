import { getProducto } from './Productos'
import { Row } from 'react-bootstrap';
import { useParams, NavLink } from "react-router-dom";
import { Fragment } from 'react';
import './Productos.css';

export function DetalleRemera(){
  
  let params = useParams();
  let detalleRemera = getProducto(parseInt(params.productoId, 10));
   console.log(detalleRemera);
    return(
      <Row>                 
          <Fragment>
            <div className="container">
                <div className="row">                       
                        <div className="col-3" key={detalleRemera.id}>
                          <div className="card text-center">
                          <div className="overflow boxImg">
                           <img src={detalleRemera.img} alt="Imagen no encontrada" className="card-img-top"></img>                         
                          </div>
                          <div className="card-body">
                           <h2 className="card-tittle">{detalleRemera.nombre}</h2>
                           <p className="card-text text-secondary">
                             detalle: {detalleRemera.texto} {detalleRemera.id}
                           </p>
                           <NavLink className="button" to={`/producto/${params.Id}`} element={<DetalleRemera/>}> Atras </NavLink>
                            </div>
                         </div>
                         </div>                                                        
                </div>
            </div>
          </Fragment>     
      </Row> 
                
      
    );
   
}
