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
     img: "../pantalon1.webp",
     garantia: "8 meses",
     envio: "Llega gratis mañana", 
    },
    {
        id: 2,
        nombre: "pantalon Caqui",
        precio: 1500,
        texto:"Soy el detalle dos",
        img: "../pantalon2.jpg",
        garantia: "12 meses",
        envio: "El vendedor no especifico forma de envio",   
    },
    {
        id: 3,
        nombre: "pantalon Jean",
        precio: 1450,
        texto:"Soy el detalle tres",
        img: "../pantalon3.jpg", 
        garantia: "6 meses",
        envio: "gratis Buenos Aires",  
    },
    {
        id: 4,
        nombre: "pantalon Gris",
        precio: 1750,
        texto:"Soy el detalle cuatro",
        img: "../pantalon4.webp",
        garantia: "6 meses" ,
        envio: "gratis Cordoba y la Pampa",  
    },
    {
        id: 5,
        nombre: "Pantalon Negro",
        precio: 1950,
        texto:"Soy el detalle cinco",
        img: "../pantalon5.jpg",
        garantia: "3 meses", 
        envio: "gratis caba y gba",  
    },
    {
        id: 6,
        nombre: "Pantalon Roto",
        precio: 1450,
        texto:"Soy el detalle seis",
        img: "../pantalon6.png",
        garantia: "6 meses",
        envio: "gratis",  
    },
    {
        id: 7,
        nombre: "Pantalon Roto 2",
        precio: 1780,
        texto:"Soy el detalle siete",
        img: "../pantalon7.png",
        garantia: "8 meses",
        envio: "gratis",   
    },
    {
        id: 8,
        nombre: "pantalon fulbo",
        precio: 1620,
        texto:"Soy el detalle ocho",
        img: "../pantalon8.avif",
        garantia: "12 meses",
        envio: "$600 pesos Gran buenos aires",   
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
                        <div className="col-sm" key={e.id}>
                          <div className="card text-center">
                          <div className="overflow boxImg">
                           <img src={e.img} alt="Imagen no encontrada" className="card-img-top cardImg"></img>
                          </div>
                          <div className="card-body">
                           <h2 className="card-tittle">{e.nombre}</h2>
                           <p className="card-text">
                             Precio: {e.precio} {props.id}
                           </p>
                           <NavLink className="button" to={`/pantalones/${params.Id}/${e.id}`} element={<DetallePantalones/>}> Comprar </NavLink>
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
