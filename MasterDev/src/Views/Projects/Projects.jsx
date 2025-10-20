import React from "react";
import './Projects.css';

import ElectricBorder from '../../Components/ElectricBorder/ElectricBorder';
import ScrollFloat from "../../Components/ScrollFloat/ScrollFloat";

import Button from '../../Components/Buttons/ButtonsProject/Button'

import Crazydev from '../../assets/Images/Projects/crazydev.webp';
import Otis from '../../assets/Images/Projects/Otis.webp';

import Copy from '../../Components/Copy/Copy'

import { useTranslation } from "react-i18next";

const Projects = () => {

    const [t, i18n] = useTranslation("global");

    return (
        <div className="Projects-style">
            <ScrollFloat
                animationDuration={1}
                ease="back.inOut(2)"
                scrollStart="center bottom+=50%"
                scrollEnd="bottom bottom-=40%"
                stagger={0.03}
            >
                {t("Projects.Title")}
            </ScrollFloat>
            <div className="Center-projects">
                <ElectricBorder
                    color="#3b73af"
                    speed={1}
                    chaos={0.5}
                    thickness={2}
                    style={{ 
                        borderRadius: 16,
                        width: '90%',
                        maxWidth: '500px',
                        padding: '10px',
                        marginTop: '40px',
                        height: 'max-content',
                        minHeight: '400px',
                        justifyContent: 'center',
                        alignItems: 'center',
                        display: 'flex',
                        flexDirection: 'column',
                    }}
                >
                    <div className="box-content">
                        <img src={Crazydev} alt="Crazydev" className="img-project" />
                        <h1 className="name-project" >CrazyDev</h1>
                        <Copy>
                            <p style={{ margin: '6px 0 0', opacity: 0.8}}>
                                {t("Tools.Project1")}
                            </p>
                        </Copy>
                        <div className="buttons-style">
                            <a href="https://crazydev-three.vercel.app/" target='_blank' rel='noopener noreferrer' ><Button text={t("Tools.View")} /></a>
                            <a href="https://github.com/cris21512/Crazydev" target='_blank' rel='noopener noreferrer' ><Button text={t("Tools.ViewGit")} /></a>
                        </div>
                    </div>
                </ElectricBorder>
                <ElectricBorder
                    color="#3b73af"
                    speed={1}
                    chaos={0.5}
                    thickness={2}
                    style={{ 
                        borderRadius: 16,
                        width: '90%',
                        maxWidth: '500px',
                        padding: '10px',
                        marginTop: '40px',
                        height: 'max-content',
                        minHeight: '400px',
                        justifyContent: 'center',
                        alignItems: 'center',
                        display: 'flex',
                        flexDirection: 'column',
                    }}
                >
                    <div className="box-content">
                        <img src={Otis} alt="Crazydev" className="img-project" />
                        <h1 className="name-project" >Otis Valen</h1>
                        <Copy>
                            <p style={{ margin: '6px 0 0', opacity: 0.8 }}>
                                {t("Tools.Project2")}
                            </p>
                        </Copy>
                        <div className="buttons-style">
                            <a href="https://otis-valen-nine.vercel.app/" target='_blank' rel='noopener noreferrer' ><Button text={t("Tools.View")} /></a>
                            <a href="https://github.com/cris21512/Otis-Valen" target='_blank' rel='noopener noreferrer' ><Button text={t("Tools.ViewGit")} /></a>
                        </div>
                    </div>
                </ElectricBorder>
            </div>
        </div>
    );
};

export default Projects;