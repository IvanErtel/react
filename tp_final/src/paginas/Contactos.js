import React from 'react';
import './contactos.css';

function Contactos(){
return(
    <>
    <div class="container formulario">
        <div class="formulario2">
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Email</label>
        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@ejemplo.com"/>
      </div>
      <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">Tienes alguna duda?</label>
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
     </div>
     <div class="col-auto">
       <button type="submit" class="btn btn-primary mb-3 boton">Enviar</button>
     </div>
     </div>
    </div>
    </>
)
}
export default Contactos;