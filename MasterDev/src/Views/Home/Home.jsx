import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";

import Prism from "../../Backgrounds/Prism/Prism";
import LiquidEther from "../../Backgrounds/LiquidEther/LiquidEther";

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
                        position: "relative",
                        overflow: "hidden",
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
                <section className="Home-content">
                    <h1> hola a todos </h1>
                </section>
            </div>
        </>
    );
};

export default Home;