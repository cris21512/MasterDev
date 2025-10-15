import React from "react";
import './Footer.css'

import Copy from '../../Components/Copy/Copy'

const Footer = () => {

    const copiarAlPortapapeles = async () => {
        try {
            await navigator.clipboard.writeText('masterkingdev215@gmail.com');
            alert("Copied to clipboard!");
        } catch (err) {
            console.error("Error", err);
        }
    }
    const copiarNumero = async () =>{
    try{
        await navigator.clipboard.writeText('3955 9554');
        alert("Copied to clipboard!");
    } catch (err) {
        console.error("Error", err);
    }
  }

    return(
        <div className="Footer-style">
            <h1 className="title-footer">MasterDev - DesignDev</h1>
            <div className="footer-container">
                <div className="footer-section">
                    <h3>Available for</h3>
                    <Copy><p>Full-time or Freelance</p></Copy>
                </div>
                <div className="footer-section">
                    <h1>Contact</h1>
                    <h3 onClick={copiarAlPortapapeles} >
                        <Copy>
                            <a>
                            masterkingdev215@gmail.com 
                            <br /> 'Tap to copy'
                            </a>
                        </Copy>
                    </h3>
                    <Copy>
                        <p onClick={copiarNumero}>
                            (+502) 3955-9554 <br />
                            'Tap to copy'
                        </p>
                    </Copy>
                </div>
                <div className="footer-section">
                    <h3>Social Links</h3>
                    <Copy>
                        <p>
                            <a href="https://www.upwork.com/freelancers/~0105b56b27037797a6" target="_blank" rel="noopener noreferrer" >Upwork</a>
                        </p>
                    </Copy>
                    <Copy>
                        <p>
                            <a href="https://www.facebook.com/share/1EG6F9GGUo/" target="_blank" rel="noopener noreferrer" >Facebook</a>
                        </p>
                    </Copy>
                    <Copy>
                        <p>
                            <a href="https://github.com/cris21512" target="_blank" rel="noopener noreferrer" >Github</a>
                        </p>
                    </Copy>
                </div>
            </div>
            <p>Made with ❤️ by <span>MasterDev</span></p>
        </div>
    )
}

export default Footer;