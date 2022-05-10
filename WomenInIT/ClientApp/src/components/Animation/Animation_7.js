import React, { useEffect } from "react";
import Aos from 'aos';
import 'aos/dist/aos.css';
import '../Home.css';

const Animation_7 = () => {
    useEffect(() =>{
        Aos.init({ duration: 2000});
    }, []);

    return(
        <div className="Animation_7">
            <div className="mellemdiv">
                <div data-aos="fade-in" className="indhold2">
                    <p className ="stepTekst2">Nu kan du vælger, hvilken type programmering du vil afprøve </p>
                    <p className="tal2">2</p>
                </div>
            </div>
        </div>

    );
};

export default Animation_7;