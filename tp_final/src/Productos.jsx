import { Container, ListGroup } from "react-bootstrap";
import { NavLink, useParams} from "react-router-dom";
import { DetalleRemera } from "./DetalleRemera";
import './Productos.css';

    const productos =[
        {
         id: 1,
         nombre: "Remera Naranja",
         precio: 150,
         texto:"Soy el detalle uno",
         img: "../remera_naranja.png"
        },
        {
            id: 2,
            nombre: "Remera Rosa",
            precio: 170,
            texto:"Soy el detalle dos",
            img: "../remera_rosa.png"  
        },
        {
            id: 3,
            nombre: "Remera azul",
            precio: 185,
            texto:"Soy el detalle tres",
            img: "../remera_azul.jpg"  
        },
        {
            id: 4,
            nombre: "Remera roja",
            precio: 174,
            texto:"Soy el detalle cuatro",
            img: "../remera_roja.jpg"  
        },
        {
            id: 5,
            nombre: "Remera gris",
            precio: 144,
            texto:"Soy el detalle cuatro",
            img: "../remera_gris.png"  
        },
        {
            id: 6,
            nombre: "Remera negra",
            precio: 144,
            texto:"Soy el detalle cuatro",
            img: "../remera_negra.jpg"  
        },
        {
            id: 7,
            nombre: "Remera anime",
            precio: 144,
            texto:"Soy el detalle cuatro",
            img: "../remera_anime.png"  
        },
        {
            id: 8,
            nombre: "Remera bowie",
            precio: 144,
            texto:"Soy el detalle cuatro",
            img: "../remera_bowie.png"  
        },

    ];
    

// funciones para producto remeras
export function getProductos(){
    return productos;
}

export function getProducto(id){
    return productos.find(
        (producto) => producto.id === id
    );
}

export function Productos(props){
    let productos = getProductos();
    let params = useParams();
    
    return (
       <Container>
        <ListGroup>
            <div className="container">
                <div className="row">
                    {productos.map((e) =>(                       
                        <div className="col-3" key={e.id}>
                          <div className="card text-center">
                          <div className="overflow boxImg">
                           <img src={e.img} alt="Imagen no encontrada" className="card-img-top cardImg"/>
                          </div>
                          <div className="card-body">
                           <h2 className="card-tittle">{e.nombre}</h2>
                           <p className="card-text">
                             Precio: $ {e.precio} {props.id}
                           </p>
                           <NavLink className="button" to={`/producto/${params.Id}/${e.id}`} element={<DetalleRemera/>}> Detalle </NavLink>
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
export default Productos;

