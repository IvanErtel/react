import { Container, ListGroup } from "react-bootstrap";
import { Link, useParams} from "react-router-dom";
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

// export function getProductos(){
//     return productos;
// }

// export function getProducto(id){
//     return productos.find(
//         (producto) => producto.id === id
//     );
// }

export function Productos(props){
    // let {productosId} = useParams()
    return (
       <Container>
        <ListGroup>
            <div className="container m-4">
                <div className="row">
                    {productos.map(({id, nombre, texto, img}) =>(
                        
                        <div className="col-3" key={productos.id}>
                          <div className="card text-center">
                          <div className="overflow">
                           <img src={img} alt="Imagen no encontrada" className="card-img-top"/>
                          </div>
                          <div className="card-body">
                           <h2 className="card-tittle">{nombre}</h2>
                           <p className="card-text text-secondary">
                             detalle: {texto} {props.id}
                           </p>
                           <Link className="button" to={`/productos/${productos.id}`}> Detalle </Link>
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
