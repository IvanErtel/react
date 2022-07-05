   export function getProductos(){
    return productos;
   }
    let productos =[
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
  


export function getProducto(id){
    return productos.find(
        (producto) => producto.id === id
    )
}
