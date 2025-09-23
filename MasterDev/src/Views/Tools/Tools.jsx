import react from 'react';
import './Tools.css';

import ScrollFloat from "../../Components/ScrollFloat/ScrollFloat";

import LogoLoop from '../../Components/LogoLoop/LogoLoop';

import React from '../../assets/Icons/Tools/react.svg';
import JS from '../../assets/Icons/Tools/javascript.svg';
import CSS from '../../assets/Icons/Tools/css.svg';
import HTML from '../../assets/Icons/Tools/html5.svg';
import Python from '../../assets/Icons/Tools/python.svg';
import Typescript from '../../assets/Icons/Tools/typescript.svg';
import Vte from '../../assets/Icons/Tools/vitejs.svg';
import VSCode from '../../assets/Icons/Tools/vscode.svg';
import Nextjs from '../../assets/Icons/Tools/nextjs.svg';
import Git from '../../assets/Icons/Tools/git.svg';
import GitHub from '../../assets/Icons/Tools/github.svg';
import Docker from '../../assets/Icons/Tools/docker.svg';
import REFLEX from '../../assets/Icons/Tools/reflex.svg';
import Figma from '../../assets/Icons/Tools/figma.svg';
import Canva from '../../assets/Icons/Tools/canva.svg';
import Vercel from '../../assets/Icons/Tools/vercel.svg';
import Warp from '../../assets/Icons/Tools/warp.svg';

const imageLogos = [
  { src: React, alt: "React", href: "https://company1.com" },
  { src: JS, alt: "Company 2", href: "https://company2.com" },
  { src: CSS, alt: "Company 3", href: "https://company3.com" },
  { src: HTML, alt: "Company 3", href: "https://company3.com" },
  { src: Python, alt: "Company 3", href: "https://company3.com" },
  { src: Typescript, alt: "Company 3", href: "https://company3.com" },
  { src: Vte, alt: "Company 3", href: "https://company3.com" },
  { src: VSCode, alt: "Company 3", href: "https://company3.com" },
  { src: Nextjs, alt: "Company 3", href: "https://company3.com" },
  { src: Git, alt: "Company 3", href: "https://company3.com" },
  { src: GitHub, alt: "Company 3", href: "https://company3.com" },
  { src: Docker, alt: "Company 3", href: "https://company3.com" },
  { src: REFLEX, alt: "Company 3", href: "https://company3.com" },
  { src: Figma, alt: "Company 3", href: "https://company3.com" },
  { src: Canva, alt: "Company 3", href: "https://company3.com" },
  { src: Vercel, alt: "Company 3", href: "https://company3.com" },
  { src: Warp, alt: "Company 3", href: "https://company3.com" },
];

const Tools = () => {
    return (
        <div className="Tools-style">
            <ScrollFloat
                animationDuration={1}
                ease="back.inOut(2)"
                scrollStart="center bottom+=50%"
                scrollEnd="bottom bottom-=40%"
                stagger={0.03}
            >
                Tech Stack
            </ScrollFloat>
            <div style={{ height: '200px', position: 'relative', overflow: 'hidden', width: '100%' }}>                                     
                <LogoLoop
                    logos={imageLogos}
                    speed={120}
                    direction="left"
                    logoHeight={48}
                    gap={40}
                    pauseOnHover
                    scaleOnHover
                    fadeOut
                    fadeOutColor="#000000ff"
                    ariaLabel="Technology partners"
                />
            </div>
        </div>
    );
};

export default Tools;