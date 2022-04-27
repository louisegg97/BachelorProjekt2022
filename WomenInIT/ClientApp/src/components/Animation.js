import React, { useEffect } from "react";
import Aos from 'aos';
import 'aos/dist/aos.css';
import frontend_3 from './images/Frontend/Frontend_3.png'
import './Frontend.css';

const Animation = () => {
    useEffect(() =>{
        Aos.init({ duration: 2000});
    }, []);

    return(
        <div className="Animation">
            <img data-aos="fade-up" className="frontend_3"src={frontend_3} alt="frontend_3" />
        
        </div>

    );
};

export default Animation;