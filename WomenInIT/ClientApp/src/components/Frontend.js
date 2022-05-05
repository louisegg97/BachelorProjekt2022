import React, { Component } from 'react';
import './OmProgrammering_Undersider.css';
import { FaLanguage } from 'react-icons/fa';
import { FaUserGraduate } from 'react-icons/fa';
import { FaChalkboardTeacher } from 'react-icons/fa';
import frontend_1 from './images/Frontend/Frontend_1.png'
import frontend_2 from './images/Frontend/Frontend_2.png'
import gui from './images/Frontend/gui.png'
import ui from './images/Frontend/ui.png'
import ux from './images/Frontend/ux.png'
import responsive from './images/Frontend/responsive.png'
import html from './images/Frontend/html.png'
import css from './images/Frontend/css.png'
import js from './images/Frontend/js.png'
import FadeIn from './FadeIn';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";





export class Frontend extends Component {
    static displayName = Frontend.name;
  
    componentDidMount() {
      window.scrollTo(0, 0);
    } 
    
    render() {
      return (
          <div className='body'>
              <div className="billedeBaggrund">
              <Link to="/OmProgrammering" className="tilbage">Tilbage</Link>
                    <h1 className="overskrift_P">Frontend</h1>
                    
                    <div className="icons_">
                        <article>
                            <section><a href ="Frontend/#section1_underside"><FaLanguage size="4em" className="one"/></a></section>
                            <section><a href ="Frontend/#section2_underside"><FaChalkboardTeacher size="4em" className="two"/></a></section>
                            <section><a href ="Frontend/#section3_underside"><FaUserGraduate size="4em" className="three"/></a></section>
                            <section><a href ="Frontend/#section1_underside"><p className="four">Front-end sprog</p></a></section>
                            <section><a href ="Frontend/#section2_underside"><p className="five">Ansvarsområder</p></a></section>
                            <section><a href ="Frontend/#section3_underside"><p className="six">Lær frontend</p></a></section>
                        </article>
                        </div>
                 </div>


               <div id="section1_underside">
                   <div className='section_1'>
                        <h2 className='section1_h2'>Frontend sprog</h2>
                        <p className='section1_tekst'>Begrebet front-end dækker over grænsefladen på websteder, 
                            dvs alle de synlige elementer på webstedet eller applikationen. 
                            Der er således fokus på webudvikllingen af klientsiden, da der er 
                            fokus på, hvad brugerne ser visuelt. Front-end udviklere koder i HTML, 
                            CSS og Javascript, hvilket er de letteste programmeringssprog at lære. 
                            Disse tre sprog danner fundamentet for webstedet front-end.</p>
                    </div>
                    <div className="front-end_sprog_ikoner">
                        <article className='article_f_sprog'>
                            <section><img className="html"src={html} alt="frontend_1" /></section>
                            <section><img className="css"src={css} alt="frontend_1" /></section>
                            <section><img className="js"src={js} alt="frontend_1" /></section>
                            <section><p className='html_h'>HTML</p></section>
                            <section><p className='css_h'>CSS</p></section>
                            <section><p className='js_h'>JavaScript</p></section>
                            <section><p className='html_p'>HyperText Markup Language - HTML bruges til at strukturere indholdet på en hjemmeside ved hjælp af en række HTML-elementer. HTML-elementer består af tags.</p></section>
                            <section><p className='css_p'>Cascading Style Sheets - CSS bruges til at definere layoutet på dine HTML-sider. CSS visualiserer HTML-siderne.</p></section>
                            <section><p className='js_p'>JavaScript er et scripting-sprog, som du kan bruge til at gøre din hjemmeside interaktiv/dynamisk (dit indhold kan ændres afhængig af input fra brugeren)</p></section>
                        </article>
                        </div>
               </div>
               <div id="section2_underside">
                    <div className='section_2'>
                        <h2>Ansvarsområder</h2>
                        <p className='section2_tekst'>Alt, hvad der har en visuel tilstedeværelse, som folk interagerer 
                        med, er i bund og grund skabt af front-end-udvikleren. Der er nogle ansvarsområder, som altid er 
                        forbundet frontenden: </p>
                    </div>
                    <div className="front-end_ansvar_ikoner">
                        <article className='article_f_ansvar'>
                            <section><img className="gui"src={gui} alt="frontend_1" /></section>
                            <section><img className="ui"src={ui} alt="frontend_1" /></section>
                            <section><img className="ux"src={ux} alt="frontend_1" /></section>
                            <section><img className="responsive"src={responsive} alt="frontend_1" /></section>
                            <section><p className='gui_h'>Gui</p></section>
                            <section><p className='ui_h'>Ui</p></section>
                            <section><p className='ux_h'>Ux</p></section>
                            <section><p className='responsive_h'>Responsiv</p></section>
                            <section><p className='gui_p'>Graphic user interface - er en visuel forside, som giver mulighed for at interagere med softwaren</p></section>
                            <section><p className='ui_p'>User interface - skaber det rum, hvor interaktioner mellem menneske og maskine finder sted.</p></section>
                            <section><p className='ux_p'>User-experience - er den samlede oplevelse kunden opnår ved brug af jeres produkt, hjemmeside.</p></section>
                            <section><p className='responsive_p'>Responsivt design handler om at tilpasse designet af grænsefladen til at passe til alle skærme.</p></section>
                        </article>
                        </div>
               </div>
               <div id="section3_underside">
                   <div className='section_3'>
                        <h2>Lær frontend</h2>
                        <p className='section3_tekst'>Hvis frontend udvikling siger dig noget. Så prøv kræfter af
                        med vores opgaver, der giver dig en introduktion til proncipperne bag frontend udvikling, og
                        husk at begynd i det små! Start derfor med at forstå HTML og CSS før du bevæger dig videre til JavaScript. God programmerings lyst!! </p>
                        <Link to="/FrontendOpg" className="FO_knap">Gå til frontend opgaver</Link>
                    </div>

               </div>
          </div>
      );
    }
}