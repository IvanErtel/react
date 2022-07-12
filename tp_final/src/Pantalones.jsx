import { Container, ListGroup } from "react-bootstrap";
import { Link,} from "react-router-dom";
import './Pantalones.css';
    const pantalones =[
        {
         id: 1,
         nombre: "pantalon 1",
         texto:"Some quick example text to build on the card title and make up the bulk of the card's content",
         img: "../pantalon1.webp"
        },
        {
            id: 2,
            nombre: "pantalon 2",
            texto:"Some quick example text to build on the card title and make up the bulk of the card's content",
            img: "../pantalon2.jpg"  
        },
        {
            id: 3,
            nombre: "pantalon 3",
            texto:"Some quick example text to build on the card title and make up the bulk of the card's content",
            img: "../pantalon3.jpg"  
        },
        {
            id: 4,
            nombre: "pantalon 4",
            texto:"Some quick example text to build on the card title and make up the bulk of the card's content",
            img: "../pantalon4.webp"  
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

export function Pantalones(props){
    // let {productosId} = useParams()
    return (
       <Container>
        <ListGroup>
            <div className="container m-4">
                <div className="row">
                    {pantalones.map(({id, nombre, texto, img}) =>(
                        
                        <div className="col-3" key={id}>
                          <div className="card text-center">
                          <div className="overflow">
                           <img src={img} alt="Imagen no encontrada" className="card-img-top"/>
                          </div>
                          <div className="card-body">
                           <h2 className="card-tittle">{nombre}</h2>
                           <p className="card-text text-secondary">
                             detalle: {texto} {props.id}
                           </p>
                           <Link className="button" to={`/productos/${pantalones.id}`}> Detalle </Link>
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
