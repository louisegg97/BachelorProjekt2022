import React, { Component } from 'react';
import './OmProgrammering.css';
import Baggrund_figur from './images/Baggrund_figur.png';
import Collapsible from './Collapsible';
import { FaDatabase } from 'react-icons/fa';
import { FaLaptopCode } from 'react-icons/fa';
import { FaColumns } from 'react-icons/fa';
import frontendGif from './images/OmProgrammering/front_end.gif'
import backendGif from './images/OmProgrammering/back_end.gif'
import databaseGif from './images/OmProgrammering/database.gif'
import ReactDOM from "react-dom";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";




export class OmProgrammering extends Component {
    static displayName = OmProgrammering.name;
  
    componentDidMount() {
      window.scrollTo(0, 0);
    } 
    
    render() {
      return (
          <div className='body'>
              <div className="billedeBaggrund">
                    <h1 className="overskrift_P">Om programmering</h1>
                    
                    <div className='collapsible'>
                        <Collapsible label="Hvad er programmering egentlig?">
                                <p>Programmering dækker over udvikling af software og applikationer
                                    m.m. Formålet med software er at udføre nogle opgaver ud fra den 
                                    data, som programmet modtager for at kunne generere et output til
                                    brugeren. For at softwaren ved hvordan opgaverne skal udføres 
                                    anvendes programmeringssprog. Der findes en lang række forskellige 
                                    sprog heraf er de mest udbredte sprog som Java, C#, JavaScript osv. 
                                    Her vil vi give et overblik over de forskellige aspekter, der er ved 
                                    programmering</p>
                        </Collapsible>
                    </div>
                    <div className="icons_">
                        <article>
                            <section><FaColumns size="4em" className="one"/></section>
                            <section><FaLaptopCode size="4em" className="two"/></section>
                            <section><FaDatabase size="4em" className="three"/></section>
                            <section><p className="four">Front-end</p></section>
                            <section><p className="five">Back-end</p></section>
                            <section><p className="six">Databaser</p></section>
                        </article>
                        </div>
                 </div>


               <div id="frontend_OmProgrammering">
                   <div className='frontend'>
                        <h2 className='frontend_h2'>Om Frontend</h2>
                        <p className='frontend_tekst'>Begrebet front-end dækker over grænsefladen på websteder, 
                            dvs alle de synlige elementer på webstedet eller applikationen. 
                            Der er således fokus på webudvikllingen af klientsiden, da der er 
                            fokus på, hvad brugerne ser visuelt. Front-end udviklere koder i HTML, 
                            CSS og Javascript, hvilket er de letteste programmeringssprog at lære. 
                            Disse tre sprog danner fundamentet for webstedet front-end.</p>
                            <img className="frontendGif"src={frontendGif} alt="frontendGif" />
                    </div>
                    <Link to="/Frontend" className="frontend_knap">Læs mere her</Link>
               </div>
               <div id="backend_OmProgrammering">
                    <div className='backend'>
                        <h2>Om backend</h2>
                        <p className='backend_tekst'>Backend er alt det bagvedliggende på en hjemmeside og dækker 
                        dermed webapplikationslogik. Back-end udviklere bygger kode, der tillader en database 
                        og en applikation at kommunikere med hinanden. En backend består typisk af tre komponenter: en server, en applikation og en database
                        De sprog man ofte bruger er java, C#, Python og databasesprog.</p>
                        <img className="backendGif"src={backendGif} alt="backendGif" />
                    </div>
               </div>
               <div id="database_OmProgrammering">
                   <div className='database'>
                        <h2>Om databaser</h2>
                        <p className='databaser_tekst'>Når man snakker on en database, snakker man om et sted,
                         hvor man kan opbevare data på en struktureret måde. Mange databaser starter ud som et
                          regneark, men når omfanget af informationen bliver for stor er det en god ide at 
                          overføre sin data til en database. </p>
                          <img className="databaseGif"src={databaseGif} alt="databaseGif" />
                    </div>
               </div>
          </div>
      );
    }
}