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
                <div className="row d-flex justify-content-center" key={detalleRemera.id}>                       
                        <div className="col-3 d-flex justify-content-end cardDettalle">
                        <img src={"../" + detalleRemera.img} alt="Imagen no encontrada" className="cardImgDetalle"></img>
                        </div>
                          <div className="col-3 d-flex justify-content-center">
                          <div>
                           <h2 className="card-tittle h2Nombre">{detalleRemera.nombre}</h2>
                            <ul className='listDetalles'>
                              <li> {detalleRemera.texto}</li>
                              <li> {detalleRemera.texto}</li>
                              <li> {detalleRemera.texto}</li>
                              <li> {detalleRemera.texto}</li>
                            </ul>
                            </div>
                          </div>
                          <div className="card col-3 d-flex justify-content-center text-center">
                            <h6 className='detalleEnvio'>Forma de envio: {detalleRemera.envio}</h6>
                            <h2>${detalleRemera.precio}</h2>
                            <h5>garantia de : {detalleRemera.garantia}</h5>                        
                            <NavLink className="buttonComprar" to={`/pantalones/${params.Id}`} element={<DetalleRemera/>}> Agregar al carrito </NavLink>
                         </div>
                                                        
                </div>
            </div>
          </Fragment>     
      </Row> 
                
      
    );
   
}
