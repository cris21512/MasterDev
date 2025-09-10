import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";

import Prism from "../../Backgrounds/Prism";
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
                    <Prism
                        animationType="hover"
                        timeScale={0.5}
                        height={3.5}
                        baseWidth={5.5}
                        scale={3.6}
                        hueShift={0}
                        colorFrequency={1}
                        noise={0}
                        glow={0.8}
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