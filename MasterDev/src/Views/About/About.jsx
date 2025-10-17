import React from "react";
import "./About.css";

import Master from '../../assets/Images/Logos/MasterD.webp'

import ScrollFloat from "../../Components/ScrollFloat/ScrollFloat";

import Copy from '../../Components/Copy/Copy'

import { useTranslation } from "react-i18next";

const About = () => {
    const [t, i18n] = useTranslation("global");

    return (
        <div className="About-style">
            <div className="Center-about">
                <div className="info-style">
                    <ScrollFloat
                    animationDuration={1}
                    ease='back.inOut(2)'
                    scrollStart="center bottom+=50%"
                    scrollEnd="bottom bottom-=40%"
                    stagger={0.03}
                    >
                    About me
                    </ScrollFloat>
                    <Copy>
                    <p>
                        {t("About.text1")}
                        <br />• Crazydev
                        <br />• WYK Homes
                        <br />• Otis-Valen
                        <br />
                        I'm currently focused on improving my skills, expanding my knowledge, and gaining more hands-on experience in the tech industry.💻 I'm MasterDev… And this is my Website!
                    </p>
                    </Copy>
                </div>
                <img src={Master} alt="Master" style={{ width: '350px', height: 'auto', borderRadius: '1rem' }} />
            </div>
        </div>
    );
};

export default About;