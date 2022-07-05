import React from "react";
import './Footer_.css';
 import {Link} from 'react-router-dom';
function Footer() {
    return (
      <div className="container-fluid footer"> 
      <footer class="text-center footer-style">
    <div class="container">
        <div class="row">
            <div class="col-md-4 footer-col">
                <h3>Dirección</h3>
                <p>
                    CABA - Argentina <br />
                    carrasco 400
                </p>
            </div>
            
            <div class="col-md-4 footer-col menu">
                <h3>Mis redes</h3>
                    <Link className="w-100" to="/" >Facebook </Link> 
                    <br/>
                    <Link className="w-100" to="/">Instagram </Link>
                    <br/>
                    <Link className="w-100" to="/">TikTok </Link>
                    <br/>
            </div>
            <div class="col-md-4 footer-col">
                <h3>DeRemeras</h3>
                <p>La mayor variedad en remeras de todo el pais!</p>
            </div>
        </div>
    </div>
</footer>
    </div>
    );
  
  }
  
  export default Footer;