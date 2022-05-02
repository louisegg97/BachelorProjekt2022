import React, { Component } from 'react';
import './Frontend.css';
import { FaLanguage } from 'react-icons/fa';
import { FaHandHoldingUsd } from 'react-icons/fa';
import { FaLaptopCode } from 'react-icons/fa';
import frontend_1 from './images/Frontend/Frontend_1.png'
import frontend_2 from './images/Frontend/Frontend_2.png'
import frontend_3 from './images/Frontend/Frontend_3.png'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

export class Backend extends Component {
    static displayName = Backend.name;
  
    componentDidMount() {
      window.scrollTo(0, 0);
    } 
    
    render() {
      return (
          <div className='body'>
              <div className="billedeBaggrund">
              <Link to="/OmProgrammering" className="tilbage">Tilbage</Link>
                    <h1 className="overskrift_P">Backend</h1>
                    
                    <div className="icons_">
                        <article>
                            <section><FaLaptopCode size="4em" className="one"/></section>
                            <section><FaLanguage size="4em" className="two"/></section>
                            <section><FaHandHoldingUsd size="4em" className="three"/></section>
                            <section><p className="four">Hvad er Backend</p></section>
                            <section><p className="five">Backend-end sprog</p></section>
                            <section><p className="six">Jobmuligheder</p></section>
                        </article>
                        </div>
                 </div>


               <div id="section_underside">
                   <div className='section_1'>
                        <h2 className='section1_h2'>Hvad er Backend?</h2>
                        <p className='section1_tekst'>Begrebet front-end dækker over grænsefladen på websteder, 
                            dvs alle de synlige elementer på webstedet eller applikationen. 
                            Der er således fokus på webudvikllingen af klientsiden, da der er 
                            fokus på, hvad brugerne ser visuelt. Front-end udviklere koder i HTML, 
                            CSS og Javascript, hvilket er de letteste programmeringssprog at lære. 
                            Disse tre sprog danner fundamentet for webstedet front-end.</p>
                    </div>
               </div>
               <div id="section2">
                    <div className='section_2'>
                        <h2>Backend sprog</h2>
                        <p className='section2_tekst'>Backend er alt det bagvedliggende på en hjemmeside og dækker 
                        dermed webapplikationslogik. Back-end udviklere bygger kode, der tillader en database 
                        og en applikation at kommunikere med hinanden. En backend består typisk af tre komponenter: en server, en applikation og en database
                        De sprog man ofte bruger er java, C#, Python og databasesprog.</p>
                    </div>
                    <div className="sprog_ikoner">
                            <img className="frontend_1"src={frontend_1} alt="frontend_1" />
                            <img className="frontend_2"src={frontend_2} alt="frontend_2" />
                            <img className="frontend_3"src={frontend_3} alt="frontend_3" />
                    </div>
               </div>
               <div id="section3">
                   <div className='section_3'>
                        <h2>Jobs inden for backend</h2>
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