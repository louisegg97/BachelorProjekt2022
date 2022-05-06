import React, {useeffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./OmProgrammering_Undersider.css"
import gui from './images/Frontend/gui.png'
import ui from './images/Frontend/ui.png'
import ux from './images/Frontend/ux.png'
import responsive from './images/Frontend/responsive.png'
import html from './images/Frontend/html.png'
import css from './images/Frontend/css.png'
import js from './images/Frontend/js.png'


const FadeIn = () => {
  useeffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return(
    <div className = "Fadein">
      <div className="Frontend">
          <div data-aos="fade-up" className="xx">
          <div className="front-end_sprog_ikoner">
                        <article className='article_f_sprog'>
                            <section><img className="html"src={html} alt="frontend_1" /></section>
                            <section><img className="css"src={css} alt="frontend_1" /></section>
                            <section><img className="js"src={js} alt="frontend_1" /></section>
                        </article>
                        </div>
          </div>
      </div>
      </div>
  );
};

export default FadeIn;