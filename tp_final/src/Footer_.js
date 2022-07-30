import React from "react";
import './Footer_.css';
 import {Link} from 'react-router-dom';
function Footer() {
    return (
      <div className="container-fluid footer"> 
      <footer className="text-center footer-style">
    <div className="container">
        <div className="row">
            <div className="col-md-4 footer-col">
                <h3>Dirección</h3>
                <p>
                    CABA - Argentina <br />
                    carrasco 400
                </p>
            </div>
            
            <div className="col-md-4 footer-col menu">
                <h3>Mis redes</h3>
                    <Link className="w-100" to="/" >Facebook </Link> 
                    <br/>
                    <Link className="w-100" to="/">Instagram </Link>
                    <br/>
                    <Link className="w-100" to="/">TikTok </Link>
                    <br/>
            </div>
            <div className="col-md-4 footer-col">
                <h3>DeRopa</h3>
                <p>La mayor variedad en remeras de todo el pais!</p>
            </div>
        </div>
    </div>
</footer>
    </div>
    );
  
  }
  
  export default Footer;