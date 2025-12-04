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
                    {t("About.Title")}
                    </ScrollFloat>
                    <p>
                        <Copy><p>{t("About.text1")}</p></Copy>
                        <br />• Crazydev
                        <br />• WYK Homes
                        <br />• Otis-Valen
                        <br />
                        <Copy><p>{t("About.text2")}</p></Copy>
                    </p>
                </div>
                <img src={Master} alt="Master" style={{ width: '350px', height: 'auto', borderRadius: '1rem' }} />
            </div>
        </div>
    );
};

export default About;