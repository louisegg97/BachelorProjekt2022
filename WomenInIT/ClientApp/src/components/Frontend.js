import React, { Component } from 'react';
import './OmProgrammering_Undersider.css';
import { FaLanguage } from 'react-icons/fa';
import { FaHandHoldingUsd } from 'react-icons/fa';
import { FaChalkboardTeacher } from 'react-icons/fa';
import frontend_1 from './images/Frontend/Frontend_1.png'
import frontend_2 from './images/Frontend/Frontend_2.png'
import gui from './images/Frontend/gui.png'
import ui from './images/Frontend/ui.png'
import ux from './images/Frontend/ux.png'
import responsive from './images/Frontend/responsive.png'
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
                            <section><a href ="Frontend/#section3_underside"><FaHandHoldingUsd size="4em" className="three"/></a></section>
                            <section><a href ="Frontend/#section1_underside"><p className="four">Front-end sprog</p></a></section>
                            <section><a href ="Frontend/#section2_underside"><p className="five">Ansvarsområder</p></a></section>
                            <section><a href ="Frontend/#section3_underside"><p className="six">Jobmuligheder</p></a></section>
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
               </div>
               <div id="section2_underside">
                    <div className='section_2'>
                        <h2>Ansvarsområder</h2>
                        <p className='section2_tekst'>Alt, hvad der har en visuel tilstedeværelse, som folk interagerer 
                        med, er i bund og grund skabt af front-end-udvikleren. Der er nogle ansvarsområder, som altid er 
                        forbundet frontenden: </p>
                    </div>
                    <div className='front-end_ansvar_ikoner'>
                            <img className="gui"src={gui} alt="frontend_1" />
                            <img className="ui"src={ui} alt="frontend_1" />
                            <img className="ux"src={ux} alt="frontend_1" />
                            <img className="responsive"src={responsive} alt="frontend_1" />
                        </div>
               </div>
               <div id="section3_underside">
                   <div className='section_3'>
                        <h2>Jobs inden for frontend</h2>
                        <p className='section3_tekst'>Når man snakker on en database, snakker man om et sted,
                         hvor man kan opbevare data på en struktureret måde. Mange databaser starter ud som et
                          regneark, men når omfanget af informationen bliver for stor er det en god ide at 
                          overføre sin data til en database. </p>
                    </div>
               </div>
          </div>
      );
    }
}