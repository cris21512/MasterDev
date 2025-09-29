import React from "react";
import "./About.css";

import Master from '../../assets/Images/Logos/Master.webp'

import ScrollFloat from "../../Components/ScrollFloat/ScrollFloat";

import Copy from '../../Components/Copy/Copy'

const About = () => {
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
                        I'm 18 years old and a software developer specialized in frontend web development. I discovered programming in 2023 through a short Kotlin tutorial, but it was in 2024 when I truly began my journey into building web applications. Since then, I've gained experience through personal projects and by collaborating with companies based in the United States including:
                        <br />• Crazydev
                        <br />• WYK Homes
                        <br />• Otis-Valen
                        <br />
                        I'm currently focused on improving my skills, expanding my knowledge, and gaining more hands-on experience in the tech industry.💻 I'm MasterDev… and this is my Website!
                    </p>
                    </Copy>
                </div>
                <img src={Master} alt="Master" style={{ width: '350px', height: 'auto', borderRadius: '1rem' }} />
            </div>
        </div>
    );
};

export default About;