import React from 'react';
import './contactos.css';

function Contactos(){
return(
    <>
<div class="container-fluid d-flex justify-content-center formulario">
  <div class="row ">
    <div className='col-12 formulario2'>
      <div class="col ">
         <label for="exampleFormControlInput1" class="form-label">Email</label>
         <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@ejemplo.com"/>
      </div>
      <div class="col">
         <label for="exampleFormControlTextarea1" class="form-label">Tienes alguna duda?</label>
         <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
      </div>
      <div className='col-12 d-flex justify-content-center'>
         <button type="submit" class="btn btn-primary mb-3 mt-3 boton">Enviar</button>
       </div>
    </div>
  </div>
</div>
    </>
)
}
export default Contactos;