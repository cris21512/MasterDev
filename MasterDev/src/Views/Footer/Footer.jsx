import React from "react";
import './Footer.css'

const Footer = () => {
    return(
        <div className="Footer-style">
            <h1 className="title-footer">MasterDev - DesignDev</h1>
            <div className="footer-container">
                <div className="footer-section">
                    <h3>Ubicacion</h3>
                    <span>Guatemala</span>
                </div>
                <div className="footer-section">
                    <h1>Contact</h1>
                    <h3><a href="mailto:masterkingdev215@gmail.com">masterkingdev215@gmail.com</a></h3>
                    <p>(+502) 3955-9554</p>
                </div>
                <div className="footer-section">
                    <h3>Redes Sociales</h3>
                    <p><a href="" >Instagram</a></p>
                    <p><a href="" >Facebook</a></p>
                </div>
            </div>
            <p>Made with ❤️ by MasterDev</p>
        </div>
    )
}

export default Footer;