import React, { Component } from 'react';
import './OmProgrammering.css';
import Baggrund_figur from './images/Baggrund_figur.png';
import Collapsible from './Collapsible';
import { FaLanguage } from 'react-icons/fa';
import { FaHandHoldingUsd } from 'react-icons/fa';
import { FaColumns } from 'react-icons/fa';
import frontendGif from './images/OmProgrammering/front_end.gif'
import backendGif from './images/OmProgrammering/back_end.gif'
import databaseGif from './images/OmProgrammering/database.gif'
import ReactDOM from "react-dom";




export class Frontend extends Component {
    static displayName = Frontend.name;
  
    componentDidMount() {
      window.scrollTo(0, 0);
    } 
    
    render() {
      return (
          <div className='body'>
              <div className="billedeBaggrund">
                    <h1 className="overskrift_P">Frontend</h1>
                    
                    <div className="icons_">
                        <article>
                            <section><FaColumns size="4em" className="one"/></section>
                            <section><FaLanguage size="4em" className="two"/></section>
                            <section><FaHandHoldingUsd size="4em" className="three"/></section>
                            <section><p className="four">Hvad er Front-end</p></section>
                            <section><p className="five">Front-end sprog</p></section>
                            <section><p className="six">Jobmuligheder</p></section>
                        </article>
                        </div>
                 </div>


               <div id="Hvad_er_frontend">
                   <div className='frontend'>
                        <h2 className='frontend_h2'>Hvad er Frontend?</h2>
                        <p className='frontend_tekst'>Begrebet front-end dækker over grænsefladen på websteder, 
                            dvs alle de synlige elementer på webstedet eller applikationen. 
                            Der er således fokus på webudvikllingen af klientsiden, da der er 
                            fokus på, hvad brugerne ser visuelt. Front-end udviklere koder i HTML, 
                            CSS og Javascript, hvilket er de letteste programmeringssprog at lære. 
                            Disse tre sprog danner fundamentet for webstedet front-end.</p>
                    </div>
               </div>
               <div id="frontend_sprog">
                    <div className='sprog'>
                        <h2>Frontend sprog</h2>
                        <p className='sprog_tekst'>Backend er alt det bagvedliggende på en hjemmeside og dækker 
                        dermed webapplikationslogik. Back-end udviklere bygger kode, der tillader en database 
                        og en applikation at kommunikere med hinanden. En backend består typisk af tre komponenter: en server, en applikation og en database
                        De sprog man ofte bruger er java, C#, Python og databasesprog.</p>
                    </div>
               </div>
               <div id="frontend_job">
                   <div className='database'>
                        <h2>Om databaser</h2>
                        <p className='databaser_tekst'>Når man snakker on en database, snakker man om et sted,
                         hvor man kan opbevare data på en struktureret måde. Mange databaser starter ud som et
                          regneark, men når omfanget af informationen bliver for stor er det en god ide at 
                          overføre sin data til en database. </p>
                    </div>
               </div>
          </div>
      );
    }
}