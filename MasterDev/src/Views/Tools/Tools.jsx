import react from 'react';
import './Tools.css';

import ScrollFloat from "../../Components/ScrollFloat/ScrollFloat";


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
        </div>
    );
};

export default Tools;