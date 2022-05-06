import React, { useEffect } from "react";
import Aos from 'aos';
import 'aos/dist/aos.css';
import python from '../images/Backend/python.png'
import php from '../images/Backend/php.png'
import java from '../images/Backend/java.png'
import '../OmProgrammering_Undersider.css';

const Animation_3 = () => {
    useEffect(() =>{
        Aos.init({ duration: 2000});
    }, []);

    return(
        <div className="Animation_2">
            <div className="backend-end_sprog_ikoner">
                 <article className='article_b_sprog'>
                    <img data-aos="fade-up" className="python"src={python} alt="frontend_3" />
                    <img data-aos="fade-up" className="java"src={java} alt="frontend_3" />
                    <img data-aos="fade-up" className="php"src={php} alt="frontend_3" />
                    <p data-aos="fade-up" className='python_h'>Python</p>
                    <p data-aos="fade-up" className='php_h'>PHP</p>
                    <p data-aos="fade-up" className='java_h'>Java</p>
                 </article>
            </div>
        
        </div>

    );
};

export default Animation_3;



