import React, { useEffect } from "react";
import Aos from 'aos';
import 'aos/dist/aos.css';
import python from '../images/Backend/python.png'
import php from '../images/Backend/php.png'
import java from '../images/Backend/java.png'
import '../OmProgrammering_Undersider.css';

const Animation_4 = () => {
    useEffect(() =>{
        Aos.init({ duration: 2000});
    }, []);

    return(
        <div className="Animation_4">
            <div className="backend_princip">
                <div className="oop_funktionel">
                    <div data-aos="fade-up" className="oop_boks">
                        <h4>Objekorienteret programmering</h4>
                            <p className="oop_tekst">OOP er teknikken, der fokuserer på skabelsen af objekter. 
                            Med objektorienteret programmering skal sætninger udføres i en bestemt rækkefølge. 
                            Populære OOP-sprog er Java, .NET og Python.</p>
                    </div>
                    <div data-aos="fade-up" className='funktionel_boks'>
                        <h4>Funktionel programmering</h4>
                            <p className="funktionel">Funktionel backend-programmering er en teknik, der er mere 
                            "action"-baseret. Funktionel programmering bruger deklarativt sprog, hvilket betyder, at 
                            sætninger kan udføres i enhver rækkefølge. Det bruges almindeligvis til datavidenskab, og 
                            populære sprog er SQL, F# og R.</p>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Animation_4;



