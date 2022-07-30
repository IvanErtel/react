import { DetallePantalones } from "./DetallePantalones";
import { Container, ListGroup } from "react-bootstrap";
import { NavLink, useParams} from "react-router-dom";
import './Productos.css';

const pantalones =[
    {
     id: 1,
     nombre: "pantalon Verde",
     precio: 1655,
     texto:"Soy el detalle uno",
     img: "../pantalon1.webp"
    },
    {
        id: 2,
        nombre: "pantalon Caqui",
        precio: 1500,
        texto:"Soy el detalle dos",
        img: "../pantalon2.jpg"  
    },
    {
        id: 3,
        nombre: "pantalon Jean",
        precio: 1450,
        texto:"Soy el detalle tres",
        img: "../pantalon3.jpg"  
    },
    {
        id: 4,
        nombre: "pantalon Gris",
        precio: 1750,
        texto:"Soy el detalle cuatro",
        img: "../pantalon4.webp"  
    },
    {
        id: 5,
        nombre: "Pantalon Negro",
        precio: 1950,
        texto:"Soy el detalle cuatro",
        img: "../pantalon5.jpg"  
    },
    {
        id: 6,
        nombre: "Pantalon Roto",
        precio: 1450,
        texto:"Soy el detalle cuatro",
        img: "../pantalon6.png"  
    },
    {
        id: 7,
        nombre: "Pantalon Roto 2",
        precio: 1780,
        texto:"Soy el detalle cuatro",
        img: "../pantalon7.png"  
    },
    {
        id: 8,
        nombre: "pantalon fulbo",
        precio: 1620,
        texto:"Soy el detalle cuatro",
        img: "../pantalon8.avif"  
    },

];
export function getPantalones(){
    return pantalones;
}
export function getPantalon(id){
return pantalones.find(
    (pantalon) => pantalon.id === id
);
}

export function Pantalones(props){
    let pantalones = getPantalones();
    let params = useParams();
    
    return (
       <Container>
        <ListGroup>
            <div className="container">
                <div className="row">
                    {pantalones.map((e) =>(                       
                        <div className="col-3" key={e.id}>
                          <div className="card text-center">
                          <div className="overflow boxImg">
                           <img src={e.img} alt="Imagen no encontrada" className="card-img-top cardImg"/>
                          </div>
                          <div className="card-body">
                           <h2 className="card-tittle">{e.nombre}</h2>
                           <p className="card-text">
                             Precio: {e.precio} {props.id}
                           </p>
                           <NavLink className="button" to={`/pantalones/${params.Id}/${e.id}`} element={<DetallePantalones/>}> Detalle </NavLink>
                            </div>
                         </div>
                         </div>                        
                    )
                    )}
                </div>
            </div>
        </ListGroup>
       </Container>
       
    );
}
export default Pantalones;
