import './Productos.css';
import Producto from "./Producto";

const Productos = () => {
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
    return(
        <div className="row">
            {productos.map(productos => {
                return(
    
                <Producto 
                          id={productos.id}
                          nombre={productos.nombre} 
                          img={productos.img} 
                          texto={productos.texto}/>
            
                )
            })}
        </div>
    )
}

export default Productos;