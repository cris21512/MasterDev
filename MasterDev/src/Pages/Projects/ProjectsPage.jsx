import React from 'react';

import ElectricBorderWrapper from '../../Components/ElectricBorder/ElectricBorderWrapper';

import './ProjectsPage.css';

import { useTranslation } from "react-i18next";

import Gym from '../../assets/Images/Projects/Gym.webp';
import Sky from '../../assets/Images/Projects/Sky.webp';

import Copy from '../../Components/Copy/Copy'
import Button from '../../Components/Buttons/ButtonsProject/Button'

const ProjectsPage = () => {

        const [t, i18n] = useTranslation("global");

    return (
        <div className="ProjectsPage-style">
            <section className="projects-vertical">
                <div className="projects-row">
                <ElectricBorderWrapper
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
                        <img src={Gym} alt="GYMBROS" className="img-project" />
                        <h1 className="name-project" >GYMBROS</h1>
                        <Copy>
                            <p style={{ margin: '6px 0 0', opacity: 0.8}}>
                                {t("Tools.Project3")}
                            </p>
                        </Copy>
                        <div className="buttons-style">
                            <a href="https://crazydev-three.vercel.app/" target='_blank' rel='noopener noreferrer' ><Button text={t("Tools.View")} /></a>
                            <a href="https://github.com/cris21512/Crazydev" target='_blank' rel='noopener noreferrer' ><Button text={t("Tools.ViewGit")} /></a>
                        </div>
                    </div>
                </ElectricBorderWrapper>               
                <ElectricBorderWrapper
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
                        <img src={Sky} alt="Sky" className="img-project" />
                        <h1 className="name-project" >SkyBound</h1>
                        <Copy>
                            <p style={{ margin: '6px 0 0', opacity: 0.8}}>
                                {t("Tools.Project3")}
                            </p>
                        </Copy>
                        <div className="buttons-style">
                            <a href="https://skyboundlp.vercel.app/" target='_blank' rel='noopener noreferrer' ><Button text={t("Tools.View")} /></a>
                            <a href="https://github.com/cris21512/Crazydev" target='_blank' rel='noopener noreferrer' ><Button text={t("Tools.ViewGit")} /></a>
                        </div>
                    </div>
                </ElectricBorderWrapper>
                </div>

                <div className="projects-row">
                    <div className="project-card">Proyecto 3</div>
                    <div className="project-card">Proyecto 4</div>
                </div>

                <div className="projects-row">
                    <div className="project-card">Proyecto 5</div>
                    <div className="project-card">Proyecto 6</div>
                </div>
            </section>
        </div>
    );
};

export default ProjectsPage;
