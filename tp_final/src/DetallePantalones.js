import { getPantalon } from './Pantalones'
import { Row } from 'react-bootstrap';
import { useParams, NavLink } from "react-router-dom";
import { Fragment } from 'react';
import {Pantalones} from './Pantalones'
import './Productos.css';
export function DetallePantalones(){
  
  let params = useParams();
  let detallePantalon = getPantalon(parseInt(params.pantalonesId, 10));
   console.log(detallePantalon);
    return(
      <Row>                 
          <Fragment>
            <div className="container">
                <div className="row">                       
                        <div className="col-3" key={detallePantalon.id}>
                          <div className="card text-center">
                          <div className="overflow boxImg">
                           <img src={detallePantalon.img} alt="Imagen no encontrada" className="card-img-top"></img>                         
                          </div>
                          <div className="card-body">
                           <h2 className="card-tittle">{detallePantalon.nombre}</h2>
                           <p className="card-text text-secondary">
                             detalle: {detallePantalon.texto} 
                           </p>
                           <NavLink className="button" to={`/pantalones/${params.Id}`} element={<Pantalones/>}> Atras </NavLink>
                            </div>
                         </div>
                         </div>                                                        
                </div>
            </div>
          </Fragment>     
      </Row> 
                
      
    );
   
}
