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
  { src: React, alt: "React", href: "https://react.dev/" },
  { src: JS, alt: "JavaScript", href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { src: CSS, alt: "CSS", href: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
  { src: HTML, alt: "html", href: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
  { src: Python, alt: "Python", href: "https://www.python.org/" },
  { src: Typescript, alt: "Typescript", href: "https://www.typescriptlang.org/" },
  { src: Vte, alt: "Vite", href: "https://vite.dev/" },
  { src: VSCode, alt: "VScode", href: "https://code.visualstudio.com/" },
  { src: Nextjs, alt: "Nextjs", href: "https://nextjs.org/" },
  { src: Git, alt: "Git", href: "https://git-scm.com/downloads" },
  { src: GitHub, alt: "Github", href: "https://github.com/cris21512" },
  { src: Docker, alt: "Docker", href: "https://www.docker.com/" },
  { src: REFLEX, alt: "Reflex", href: "https://reflex.dev/" },
  { src: Figma, alt: "Figma", href: "https://www.figma.com/es-la/downloads/" },
  { src: Canva, alt: "Canva", href: "https://www.canva.com/es_es/?msockid=392f760bc69f6ed628b96030c7ea6fd7" },
  { src: Vercel, alt: "Vercel", href: "https://vercel.com/" },
  { src: Warp, alt: "Warp", href: "https://www.warp.dev/blog/launching-warp-on-windows" },
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