import React from "react";
import './Footer.css'

const Footer = () => {

    const copiarAlPortapapeles = async () => {
        try {
            await navigator.clipboard.writeText('cristopherfm21.5@gmail.com');
            alert(t("Copy.Copy"));
        } catch (err) {
            console.error(t("Copy.Error"), err);
        }
    }  
    const copiarNumero = async () =>{
    try{
        await navigator.clipboard.writeText('3955 9554');
        alert(t("Copy.Copy"));
    } catch (err) {
        console.error(t("Copy.Error"), err);
    }
  }

    return(
        <div className="Footer-style">
            <h1 className="title-footer">MasterDev - DesignDev</h1>
            <div className="footer-container">
                <div className="footer-section">
                    <h3>Ubication</h3>
                    <p>Guatemala</p>
                </div>
                <div className="footer-section">
                    <h1>Contact</h1>
                    <h3><a href="mailto:masterkingdev215@gmail.com">masterkingdev215@gmail.com</a></h3>
                    <p>(+502) 3955-9554</p>
                </div>
                <div className="footer-section">
                    <h3>Socials Links</h3>
                    <p><a href="https://www.upwork.com/freelancers/~0105b56b27037797a6" target="_blank" rel="noopener noreferrer" >Upwork</a></p>
                    <p><a href="https://www.facebook.com/share/1EG6F9GGUo/" target="_blank" rel="noopener noreferrer" >Facebook</a></p>
                </div>
            </div>
            <p>Made with ❤️ by MasterDev</p>
        </div>
    )
}

export default Footer;