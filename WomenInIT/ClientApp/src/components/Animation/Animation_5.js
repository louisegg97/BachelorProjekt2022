import React, { useEffect } from "react";
import Aos from 'aos';
import 'aos/dist/aos.css';
import isabella from '../images/OmOs/isabella.png'
import louise from '../images/OmOs/louise.png'
import alberte from '../images/OmOs/alberte.png'
import '../OmOs.css';

const Animation_5 = () => {
    useEffect(() =>{
        Aos.init({ duration: 2000});
    }, []);

    return(
        <div className="Animation_5">
            <div data-aos="fade-in" className="omOsSamlet">
              <div className="omOsSeperat">
                <img className="personligtBillede" src={isabella} alt=""/>
                <p className="omOsTekst">Isabella Drest, 22 år</p>
              </div>

              <div className="omOsSeperat">
                <img className="personligtBillede" src={alberte} alt=""/>
                <p className="omOsTekst">Alberte Wærens, 23 år</p>
              </div>

              <div className="omOsSeperat">
                <img className="personligtBillede" src={louise} alt=""/>
                <p className="omOsTekst">Louise Götschze, 25 år</p>
              </div>
            </div>
        </div>

    );
};

export default Animation_5;