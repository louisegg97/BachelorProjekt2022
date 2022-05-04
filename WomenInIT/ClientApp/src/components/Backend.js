import React, { Component } from 'react';
import './OmProgrammering_Undersider.css';
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
                            <section><a href ="Backend/#section1_underside"><FaLaptopCode size="4em" className="one"/></a></section>
                            <section><a href ="Backend/#section2_underside"><FaLanguage size="4em" className="two"/></a></section>
                            <section><a href ="Backend/#section3_underside"><FaHandHoldingUsd size="4em" className="three"/></a></section>
                            <section><a href ="Backend/#section1_underside"><p className="four">Hvad er Backend</p></a></section>
                            <section><a href ="Backend/#section2_underside"><p className="five">Backend-end sprog</p></a></section>
                            <section><a href ="Backend/#section3_underside"><p className="six">Jobmuligheder</p></a></section>
                        </article>
                        </div>
                 </div>


               <div id="section1_underside">
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
               <div id="section2_underside">
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
               <div id="section3_underside">
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