import { Container, ListGroup } from "react-bootstrap";
import { NavLink, useParams} from "react-router-dom";
import './Productos.css';

    const productos =[
        {
         id: 1,
         nombre: "Remera Naranja",
         texto:"Soy el detalle uno",
         img: "../remera_naranja.png"
        },
        {
            id: 2,
            nombre: "Remera Rosa",
            texto:"Soy el detalle dos",
            img: "../remera_rosa.png"  
        },
        {
            id: 3,
            nombre: "Remera azul",
            texto:"Soy el detalle tres",
            img: "../remera_azul.jpg"  
        },
        {
            id: 4,
            nombre: "Remera roja",
            texto:"Soy el detalle cuatro",
            img: "../remera_roja.jpg"  
        },
        

    ];

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
                          <div className="overflow">
                           <img src={e.img} alt="Imagen no encontrada" className="card-img-top"/>
                          </div>
                          <div className="card-body">
                           <h2 className="card-tittle">{e.nombre}</h2>
                           <p className="card-text text-secondary">
                             detalle: {e.texto} {props.id}-
                           </p>
                           <NavLink className="button" to={`/producto/${params.Id}/${e.id}`}> Detalle </NavLink>
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
