import React from "react";
import './list_product.css';
function List() {
    return (
      
      
      <div className="producto" id="producto">
        <div className="producto__Int">
          <img src={`./remera_naranja.jpg`} alt="No se encontro la imagen"/>
          </div>
        <div className="product__description">
          <h3 className="produto__title">Remera Naranja</h3>
          <spam className="produto__price">$90.00</spam>
          <button className="btn">Comprar</button>
        </div>
        <div className="producto__Int">
          <img src={`./remera_rosa.jpg`} alt="No se encontro la imagen"/>
          </div>
        <div className="product__description">
          <h3 className="produto__title">Remera Naranja</h3>
          <spam className="produto__price">$90.00</spam>
          <button className="btn">Comprar</button>
        </div>
        <div className="producto__Int">
          <img src={`./remera_azul.jpg`} alt="No se encontro la imagen"/>
          </div>
        <div className="product__description">
          <h3 className="produto__title">Remera Azul</h3>
          <spam className="produto__price">$90.00</spam>
          <button className="btn">Comprar</button>
        </div>
        <div className="producto__Int">
          <img src={`./remera_roja.jpg`} alt="No se encontro la imagen"/>
          </div>
        <div className="product__description">
          <h3 className="produto__title">Remera Roja</h3>
          <spam className="produto__price">$90.00</spam>
          <button className="btn">Comprar</button>
        </div>
      </div>

    );
  }
  
  export default List;