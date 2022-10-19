import 'animate.css';
import './Nav_bar.css';
import { Fragment } from 'react';

function Menu() {
  return (
 
    <Fragment>
          <div class="container d-flex justify-content-center">
            <nav class="navbar navbar-expand-lg col-12">
              <div class="col-10 ">
                    <a class="navbar-brand"  href="/"><img className="imgNavbarLogo" src="../logoHome.jpg"></img></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                      <span class="navbar-toggler-icon"></span>
                    </button>
                    </div>
                   <div class="animate__animated animate__pulse collapse col-2 navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                      <li class="nav-item">
                         <a class="nav-link" aria-current="page" href="/producto/1"><img className="imgNavbar" src="../remera_negra.jpg"></img></a>
                      </li>
                      <li class="nav-item">
                         <a class="nav-link" href="/pantalones/3"><img className="imgNavbar" src="../pantalon4.webp"></img></a>
                      </li>
                      <li class="nav-item ">
                         <a class="nav-link" href="/cart"><img className="imgNavbar" src="../logoCarrito3.jpg"></img></a>
                      </li>     
                    </ul>

                  </div>

            </nav>
          </div>
</Fragment>   
  );
}

export default Menu;
