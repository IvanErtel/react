import { useParams } from "react-router-dom";
import { getProducto } from "../Productos";
import './itemDetalles.css'

export default function Producto(){
  let params = useParams();
  let producto = getProducto(parseInt(params.productoId, 10));
  return(
    <main style={{ padding: "1rem" }}>
    <h2>nombre del producto: {producto.nombre}</h2>
    <p>
      {producto.nombre}: {producto.nombre}
    </p>
    <p>Especificacion: {producto.texto}</p>
  </main>
  );
}
        