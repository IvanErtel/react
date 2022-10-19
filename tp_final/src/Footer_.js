import React from "react";
import './Footer_.css';
 import {Link} from 'react-router-dom';
function Footer() {
    return (
        <>
      <div className="container-fluid footer"> 
      <footer className="text-center footer-style">
    <div className="container animate__animated animate__fadeIn">
        <div className="row">
            <div className="col animate__animated animate__lightSpeedInRight">
                <h3>Dirección</h3>
                <p>
                    CABA - Argentina <br />
                    carrasco 400
                </p>
            </div>
            
            <div className="col animate__animated animate__fadeIn justify-content-center menu">
                <h3 className="animate__animated animate__lightSpeedInRight">Nuestras redes</h3>
                    <Link  to="/" > <img className="imgLogo animate__animated animate__lightSpeedInRight" src="../facebook.png"></img> </Link>                   
                    <Link  to="/"><img className="imgLogo animate__animated animate__lightSpeedInRight" src="../instagram.png"></img> </Link>                  
                    <Link  to="/"><img className="imgLogo animate__animated animate__lightSpeedInRight" src="../tik-tok.png"></img> </Link>
            </div>
            <div className="col animate__animated animate__lightSpeedInRight">
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