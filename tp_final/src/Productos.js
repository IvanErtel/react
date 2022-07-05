import { Container, ListGroup } from "react-bootstrap";
import './Productos.css';
    const productos =[
        {
         id: 1,
         nombre: "Remera Naranja",
         texto:"Some quick example text to build on the card title and make up the bulk of the card's content",
         img: "./remera_naranja.jpg"
        },
        {
            id: 2,
            nombre: "Remera Rosa",
            texto:"Some quick example text to build on the card title and make up the bulk of the card's content",
            img: "./remera_rosa.jpg"  
        },
        {
            id: 3,
            nombre: "Remera azul",
            texto:"Some quick example text to build on the card title and make up the bulk of the card's content",
            img: "./remera_azul.jpg"  
        },
        {
            id: 4,
            nombre: "Remera roja",
            texto:"Some quick example text to build on the card title and make up the bulk of the card's content",
            img: "./remera_roja.jpg"  
        },

    ];
  


export function Productos(){
    return (
       <Container>
        <ListGroup>
            <div className="container m-4">
                <div className="row">
                    {productos.map(({ nombre, texto, img}) =>(
                        // <div className="container">
                        <div className="col-3">
                          <div className="card text-center">
                          <div className="overflow">
                           <img src={img} alt="producto" className="card-img-top"/>
                          </div>
                          <div className="card-body">
                           <h2 className="card-tittle">{nombre}</h2>
                           <p className="card-text text-secondary">
                             detalle: {texto}
                           </p>
                          </div>
                         </div>
                         </div>
                        //  </div>
                    )
                    )}
                </div>
            </div>
        </ListGroup>
       </Container>
    );
}
export default Productos;
