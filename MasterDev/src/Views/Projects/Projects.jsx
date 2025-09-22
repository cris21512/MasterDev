import React from "react";
import './Projects.css';

import ElectricBorder from '../../Components/ElectricBorder/ElectricBorder';
import ScrollFloat from "../../Components/ScrollFloat/ScrollFloat";

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
                    <div>
                        <p style={{ margin: '6px 0 0', opacity: 0.8 }}>
                            A glowing, animated border wrapper.
                        </p>
                    </div>
                </ElectricBorder>
                <ElectricBorder
                    color="#739EC9"
                    speed={1}
                    chaos={0.5}
                    thickness={2}
                    style={{ borderRadius: 16, width: '500px', padding: '12px', marginTop: '20px', height: '1200px' }}
                >
                    <div>
                        <p style={{ margin: '6px 0 0', opacity: 0.8 }}>
                            A glowing, animated border wrapper
                        </p>
                    </div>
                </ElectricBorder>
            </div>
        </div>
    );
};

export default Projects;