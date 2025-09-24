import React from "react";
import './Projects.css';

import ElectricBorder from '../../Components/ElectricBorder/ElectricBorder';
import ScrollFloat from "../../Components/ScrollFloat/ScrollFloat";

import Button from '../../Components/Buttons/ButtonsProject/Button'

import Crazydev from '../../assets/Images/Projects/crazydev.webp';
import Otis from '../../assets/Images/Projects/Otis.webp';

const Projects = () => {
    return (
        <div className="Projects-style">
            <ScrollFloat
                animationDuration={1}
                ease="back.inOut(2)"
                scrollStart="center bottom+=50%"
                scrollEnd="bottom bottom-=40%"
                stagger={0.03}
            >
                Featured Projects
            </ScrollFloat>
            <div className="Center-projects">
                <ElectricBorder
                    color="#3b73af"
                    speed={1}
                    chaos={0.5}
                    thickness={2}
                    style={{ borderRadius: 16, width: '500px', padding: '12px', marginTop: '20px', height: '1200px', justifyContent: 'center', alignItems: 'center', display: 'flex', flexDirection: 'column' }}
                >
                    <div className="box-content">
                        <img src={Crazydev} alt="Crazydev" style={{ width: '450px', borderRadius: '12px' }} />
                        <h1 style={{ fontSize: '3rem' }}>CrazyDev</h1>
                        <p style={{ margin: '6px 0 0', opacity: 0.8, paddingTop: '3rem' }}>
                            A personal website that embodies my approach to modern web development and user-centered design. Built as an elegant digital business card, it features a clean structure, smooth interactions, and a strong focus on visual aesthetics. The site stands out for its intuitive navigation, responsive design, legible typography, and a professional color palette. In the projects section, each work is presented with careful attention to both functionality and visual detail—reinforcing the idea that code can also be art.
                        </p>
                        <div className="buttons-style">
                            <a href="https://crazydev-three.vercel.app/" target='_blank' rel='noopener noreferrer' ><Button text="View Project" /></a>
                            <a href="https://github.com/cris21512/Crazydev" target='_blank' rel='noopener noreferrer' ><Button text="View on Github" /></a>
                        </div>
                    </div>
                </ElectricBorder>
                <ElectricBorder
                    color="#3b73af"
                    speed={1}
                    chaos={0.5}
                    thickness={2}
                    style={{ borderRadius: 16, width: '500px', padding: '12px', marginTop: '20px', height: '1200px', justifyContent: 'center', alignItems: 'center', display: 'flex', flexDirection: 'column' }}
                >
                    <div className="box-content">
                        <img src={Otis} alt="Crazydev" style={{ width: '450px', borderRadius: '12px' }} />
                        <h1 style={{ fontSize: '3rem' }}>Otis Valen</h1>
                        <p style={{ margin: '6px 0 0', opacity: 0.8, paddingTop: '3rem' }}>
                            A dynamic website that highlights my ability to bring ideas to life through clean code and engaging user experiences. My role focused on frontend development, animations, SEO optimization, and ensuring the site feels both interactive and enjoyable to explore. The design was a collaborative effort with a friend, and together we built a project that is both visually striking and impactful. The site demonstrates how thoughtful development and teamwork can transform ideas.
                        </p>
                        <div className="buttons-style">
                            <a href="https://otis-valen-nine.vercel.app/" target='_blank' rel='noopener noreferrer' ><Button text="View Project" /></a>
                            <a href="https://github.com/cris21512/Otis-Valen" target='_blank' rel='noopener noreferrer' ><Button text="View on Github" /></a>
                        </div>
                    </div>
                </ElectricBorder>
            </div>
        </div>
    );
};

export default Projects;