import { getPantalon } from './Pantalones'
import { Row } from 'react-bootstrap';
import { useParams, NavLink } from "react-router-dom";
import { Fragment } from 'react';
import {Pantalones} from './Pantalones'
import './DetalleP.css';
export function DetallePantalones(){
  
  let params = useParams();
  let detallePantalon = getPantalon(parseInt(params.pantalonesId));
  
    return(
      <Row>                 
          <Fragment>
            <div className="container">
                <div className="row d-flex justify-content-center" key={detallePantalon.id}>                       
                        <div className="col-3 d-flex justify-content-end cardDettalle">
                        <img src={"../" + detallePantalon.img} alt="Imagen no encontrada" className="cardImgDetalle"></img>
                        </div>
                          <div className="col-3 d-flex justify-content-center">
                          <div>
                           <h2 className="card-tittle h2Nombre">{detallePantalon.nombre}</h2>
                            <ul className='listDetalles'>
                              <li> {detallePantalon.texto}</li>
                              <li> {detallePantalon.texto}</li>
                              <li> {detallePantalon.texto}</li>
                              <li> {detallePantalon.texto}</li>
                            </ul>
                            </div>
                          </div>
                          <div className="card col-3 d-flex justify-content-center text-center">
                            <h6 className='detalleEnvio'>Forma de envio: {detallePantalon.envio}</h6>
                            <h2>${detallePantalon.precio}</h2>
                            <h5>garantia de : {detallePantalon.garantia}</h5>                        
                            <NavLink className="buttonComprar" to={`/pantalones/${params.Id}`} element={<Pantalones/>}> Agregar al carrito </NavLink>
                         </div>
                                                        
                </div>
            </div>
          </Fragment>     
      </Row> 
                
      
    );
   
}
