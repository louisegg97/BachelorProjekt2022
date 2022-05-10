import React, { useEffect } from "react";
import Aos from 'aos';
import 'aos/dist/aos.css';
import '../Home.css';

const Animation_6 = () => {
    useEffect(() =>{
        Aos.init({ duration: 2000});
    }, []);

    return(
        <div className="Animation_6">
            <div data-aos="fade-in" className="mellemdiv">
                <div className="indhold1">
                    <p className="tal1">1</p>
                    <p className ="stepTekst">Vælg, hvilket niveau du ønsker at lave opgaver på</p>
                </div>
            </div>
        </div>

    );
};

export default Animation_6;