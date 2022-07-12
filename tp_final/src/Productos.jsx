import { Container, ListGroup } from "react-bootstrap";
import { NavLink, useParams} from "react-router-dom";
import './Productos.css';
    const productos =[
        {
         id: 1,
         nombre: "Remera Naranja",
         texto:"Some quick example text to build on the card title and make up the bulk of the card's content",
         img: "../remera_naranja.png"
        },
        {
            id: 2,
            nombre: "Remera Rosa",
            texto:"Some quick example text to build on the card title and make up the bulk of the card's content",
            img: "../remera_rosa.png"  
        },
        {
            id: 3,
            nombre: "Remera azul",
            texto:"Some quick example text to build on the card title and make up the bulk of the card's content",
            img: "../remera_azul.jpg"  
        },
        {
            id: 4,
            nombre: "Remera roja",
            texto:"Some quick example text to build on the card title and make up the bulk of the card's content",
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
                           <NavLink className="button" to={`/productos/${params.catId}/${e.id}`}> Detalle </NavLink>
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
