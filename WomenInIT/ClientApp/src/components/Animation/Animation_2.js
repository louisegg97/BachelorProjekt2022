import React, { useEffect } from "react";
import Aos from 'aos';
import 'aos/dist/aos.css';
import gui from '../images/Frontend/gui.png'
import ui from '../images/Frontend/ui.png'
import ux from '../images/Frontend/ux.png'
import responsive from '../images/Frontend/responsive.png'
import '../OmProgrammering_Undersider.css';

const Animation_2 = () => {
    useEffect(() =>{
        Aos.init({ duration: 2000});
    }, []);

    return(
        <div className="Animation_2">
            <div className="front-end_ansvar_ikoner">
                 <article className='article_f_ansvar'>
                    <img data-aos="fade-up" className="gui"src={gui} alt="frontend_3" />
                    <img data-aos="fade-up" className="ux"src={ux} alt="frontend_3" />
                    <img data-aos="fade-up" className="ui"src={ui} alt="frontend_3" />
                    <img data-aos="fade-up" className="responsive"src={responsive} alt="frontend_3" />
                    <p data-aos="fade-up" className='gui_h'>Gui</p>
                    <p data-aos="fade-up" className='ui_h'>Ui</p>
                    <p data-aos="fade-up" className='ux_h'>Ux</p>
                    <p data-aos="fade-up" className='responsive_h'>Responsiv</p>
                    <p data-aos="fade-up" className='gui_p'>Graphic user interface - er en visuel forside, som giver mulighed for at interagere med softwaren</p>
                    <p data-aos="fade-up" className='ui_p'>User interface - skaber det rum, hvor interaktioner mellem menneske og maskine finder sted.</p>
                    <p data-aos="fade-up" className='ux_p'>User-experience - er den samlede oplevelse kunden opnår ved brug af jeres produkt, hjemmeside.</p>
                    <p data-aos="fade-up" className='responsive_p'>Responsivt design handler om at tilpasse designet af grænsefladen til at passe til alle skærme.</p>
                </article>
            </div>
        
        </div>

    );
};

export default Animation_2;



