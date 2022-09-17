import React from "react";
import './Footer_.css';
 import {Link} from 'react-router-dom';
function Footer() {
    return (
        <>
        <div class="container divcolor"></div>
      <div className="container-fluid footer"> 
      <footer className="text-center footer-style">
    <div className="container">
        <div className="row">
            <div className="col">
                <h3>Dirección</h3>
                <p>
                    CABA - Argentina <br />
                    carrasco 400
                </p>
            </div>
            
            <div className="col justify-content-center menu">
                <h3>Nuestras redes</h3>
                    <Link to="/" > <img className="imgLogo" src="../facebook.png"></img> </Link>                   
                    <Link  to="/"><img className="imgLogo" src="../instagram.png"></img> </Link>                  
                    <Link  to="/"><img className="imgLogo" src="../tik-tok.png"></img> </Link>
            </div>
            <div className="col">
                <h3>DeRopa</h3>
                <p>La mayor variedad en remeras de todo el pais!</p>
            </div>
        </div>
    </div>
</footer>
    </div>
    </>
    );
  
  }
  
  export default Footer;