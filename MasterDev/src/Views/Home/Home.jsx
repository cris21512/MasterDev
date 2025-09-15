import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";

import LiquidEther from "../../Backgrounds/LiquidEther/LiquidEther";

import MasterDev from '../../assets/Images/Logos/MasterDev.webp'

import CV from '../../assets/Icons/Home/CV.svg'
import Facebook from '../../assets/Icons/Home/facebook.svg'
import Github from '../../assets/Icons/Home/github.svg'
import Upwork from '../../assets/Icons/Home/Upwork.png'

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
                        zIndex: 1
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
                        <p>Software Engineer & Design </p>

                        <div className="icons-home">
                            <div className="icon-home">
                                <img src={Facebook} alt="Facebook" className="icon-size" />
                            </div>
                            <div className="icon-home">
                                <img src={CV} alt="CV" className="icon-size" />
                            </div>
                            <div className="icon-home">
                                <img src={Github} alt="Github" className="icon-size" />
                            </div>
                            <div className="icon-home">
                                <img src={Upwork} alt="Upwork" className="icon-size" />
                            </div>
                        </div>
                    </div>
            </div>
        </>
    );
};

export default Home;