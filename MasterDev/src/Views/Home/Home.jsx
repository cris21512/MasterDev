import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";

import LiquidEther from "../../Backgrounds/LiquidEther/LiquidEther";

import MasterDev from '../../assets/Images/Logos/MasterDev.webp'

import CV from '../../assets/Icons/Home/CV.svg'
import Linkedin from '../../assets/Icons/Home/linkedin.svg'
import Gmail from '../../assets/Icons/Home/Gmail.svg'
import Upwork from '../../assets/Icons/Home/Upwork.png'

import CVMD from '../../assets/CristopherMD_CV.pdf'

import TextType from "../../TextAnimations/TextType/TextType";

import "./Home.css";

const Home = () => {
    const [t, i18n] = useTranslation("global");

    return (
        <>
            <div className="Home-style">
                <div
                    style={{
                        width: "100%",
                        height: "100vh",
                        position: "absolute",
                        overflow: "hidden",
                        zIndex: 0
                    }}
                >
                    <LiquidEther
                        colors={["#5682B1", "#739EC9", "rgba(212, 252, 255, 1)"]}
                        mouseForce={20}
                        cursorSize={100}
                        isViscous={true}
                        viscous={30}
                        iterationsViscous={32}
                        iterationsPoisson={32}
                        resolution={0.5}
                        isBounce={false}
                        autoDemo={true}
                        autoSpeed={0.5}
                        autoIntensity={2.2}
                        takeoverDuration={0.25}
                        autoResumeDelay={3000}
                        autoRampDuration={0.6}
                    />
                </div>
                    <div className="content-home">
                        <img src={MasterDev} alt="MasterDev" className="img-home" />
                        <h1 style={{ fontSize: '4rem' }}>MasterDev</h1>
                        <TextType 
                        text={["Software Engineer, Web developer & Design", "Ingeniero de Software, Desarrollador Web & Diseñador", "' Lo que imagines, yo lo programo.'", "' Whatever you imagine, I program it.'"]}
                        typingSpeed={75}
                        pauseDuration={1500}
                        showCursor={true}
                        cursorCharacter="</>"
                        />

                        <div className="icons-home">
                            <a className="icon-home" href={CVMD} target="_blank" rel="noreferrer" download="CristopherMD_CV.pdf">
                                <img src={CV} alt="CV" className="icon-size" />
                            </a>
                            <a className="icon-home" href="https://www.linkedin.com/in/cristopherfuentes/" target="_blank" rel="noreferrer">
                                <img src={Linkedin} alt="Linkedin" className="icon-size" />
                            </a>
                            <a className="icon-home" href="mailto:masterkingdev215@gmail.com" target="_blank" rel="noreferrer">
                                <img src={Gmail} alt="Github" className="icon-size" />
                            </a>
                            <a className="icon-home" href="https://www.upwork.com/freelancers/masterdev" target="_blank" rel="noreferrer">
                                <img src={Upwork} alt="Upwork" className="icon-size" />
                            </a>
                        </div>
                    </div>
            </div>
        </>
    );
};

export default Home;