import React from 'react';

import ElectricBorderWrapper from '../../Components/ElectricBorder/ElectricBorderWrapper';

import './ProjectsPage.css';

import { useTranslation } from "react-i18next";

import Gym from '../../assets/Images/Projects/Gym.webp';
import Sky from '../../assets/Images/Projects/Sky.webp';
import CYC from '../../assets/Images/Projects/chitoycris.png';
import WYK from '../../assets/Images/Projects/house.webp';
import DES from '../../assets/Images/Projects/Desing.webp';
import CAS from '../../assets/Images/Projects/Casas.webp';

import Copy from '../../Components/Copy/Copy'
import Button from '../../Components/Buttons/ButtonsProject/Button'
import FuzzyText from '../../Components/Buttons/404/FuzzyText';

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
                            <FuzzyText
                            baseIntensity={0.1}
                            >
                                not available
                            </FuzzyText>
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
                                {t("Tools.Project4")}
                            </p>
                        </Copy>
                        <div className="buttons-style">
                            <a href="https://skyboundlp.vercel.app/" target='_blank' rel='noopener noreferrer' ><Button text={t("Tools.View")} /></a>
                            <a href="https://github.com/cris21512/Crazydev" target='_blank' rel='noopener noreferrer' ><Button text={t("Tools.ViewGit")} /></a>
                        </div>

                        <p style={{ color: "#cfcfcf", fontSize: "14px" }}></p>
                    </div>
                </ElectricBorderWrapper>
                </div>

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
                        <img src={CYC} alt="Chito y Cris" className="img-project" />
                        <h1 className="name-project" >Chito y Cris</h1>
                        <Copy>
                            <p style={{ margin: '6px 0 0', opacity: 0.8}}>
                                {t("Tools.Project5")}
                            </p>
                        </Copy>
                        <div className="buttons-style">
                            <a href="https://chito-y-cris.vercel.app/" target='_blank' rel='noopener noreferrer' ><Button text={t("Tools.View")} /></a>
                            <a href="https://github.com/cris21512/Chito-Y-Cris" target='_blank' rel='noopener noreferrer' ><Button text={t("Tools.ViewGit")} /></a>
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
                        <img src={WYK} alt="WYK HOMES" className="img-project" />
                        <h1 className="name-project" >WYK Homes</h1>
                        <Copy>
                            <p style={{ margin: '6px 0 0', opacity: 0.8}}>
                                {t("Tools.Project6")}
                            </p>
                        </Copy>
                        <div className="buttons-style">
                            <a href="https://wyk-homes.vercel.app/" target='_blank' rel='noopener noreferrer' ><Button text={t("Tools.View")} /></a>
                            <a href="https://github.com/cris21512/WYK-Homes" target='_blank' rel='noopener noreferrer' ><Button text={t("Tools.ViewGit")} /></a>
                        </div>
                    </div>
                </ElectricBorderWrapper>
                </div>

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
                        <img src={DES} alt="Desing-Dev" className="img-project" />
                        <h1 className="name-project" >Design-Dev</h1>
                        <Copy>
                            <p style={{ margin: '6px 0 0', opacity: 0.8}}>
                                {t("Tools.Project7")}
                            </p>
                        </Copy>
                        <div className="buttons-style">
                            <FuzzyText
                            baseIntensity={0.1}
                            >
                                not available
                            </FuzzyText>
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
                        <img src={CAS} alt="CASAS" className="img-project" />
                        <h1 className="name-project" >CASAS</h1>
                        <Copy>
                            <p style={{ margin: '6px 0 0', opacity: 0.8}}>
                                {t("Tools.Project8")}
                            </p>
                        </Copy>
                        <div className="buttons-style">
                            <FuzzyText
                            baseIntensity={0.1}
                            >
                                not available
                            </FuzzyText>
                        </div>
                    </div>
                </ElectricBorderWrapper>
                </div>
                <div className="projects-row">
                    <a href="https://masterdev.vercel.app/" rel='noopener noreferrer' ><Button text="Back to home" /></a>
                </div>
            </section>
        </div>
    );
};

export default ProjectsPage;
