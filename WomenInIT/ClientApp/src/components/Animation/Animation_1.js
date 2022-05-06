import React, { useEffect } from "react";
import Aos from 'aos';
import 'aos/dist/aos.css';
import html from '../images/Frontend/html.png'
import css from '../images/Frontend/css.png'
import js from '../images/Frontend/js.png'
import '../OmProgrammering_Undersider.css';

const Animation_1 = () => {
    useEffect(() =>{
        Aos.init({ duration: 2000});
    }, []);

    return(
        <div className="Animation">
            <div className="front-end_sprog_ikoner">
                <article className='article_f_sprog'>
                    <img data-aos="fade-up" className="html"src={html} alt="frontend_3" />
                    <img data-aos="fade-up" className="css"src={css} alt="frontend_3" />
                    <img data-aos="fade-up" className="js"src={js} alt="frontend_3" />
                     <p data-aos="fade-up" className='html_h'>HTML</p>
                    <p data-aos="fade-up" className='css_h'>CSS</p>
                    <p data-aos="fade-up" className='js_h'>Javascript</p>
                    <p data-aos="fade-up" className='html_p'>HyperText Markup Language - HTML bruges til at strukturere indholdet på en hjemmeside ved hjælp af en række HTML-elementer. HTML-elementer består af tags.</p>
                    <p data-aos="fade-up" className='css_p'>Cascading Style Sheets - CSS bruges til at definere layoutet på dine HTML-sider. CSS visualiserer HTML-siderne.</p>
                     <p data-aos="fade-up" className='js_p'>JavaScript er et scripting-sprog, som du kan bruge til at gøre din hjemmeside interaktiv/dynamisk (dit indhold kan ændres afhængig af input fra brugeren)</p> 
                </article>
            </div>
        
        </div>

    );
};

export default Animation_1;