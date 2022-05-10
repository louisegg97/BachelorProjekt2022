import React, { useEffect } from "react";
import Aos from 'aos';
import 'aos/dist/aos.css';
import '../Home.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const Animation_8 = () => {
    useEffect(() =>{
        Aos.init({ duration: 2000});
    }, []);

    return(
        <div className="Animation_8">
            <div className="mellemdiv">
                <div data-aos="fade-in" className="indhold3">
                    <p className="tal3">3</p>
                    <p className ="stepTekst3">Til sidst er det bare at gå igang med at programmere. Du kan altid hente hjælp, hvis du går i stå eller kommer i tvivl.</p>
                </div>
                <Link to="/Opgaver" className="prøvProgrammeringlæsMereHer">Kom i gang her</Link>
            </div>
        </div>

    );
};

export default Animation_8;