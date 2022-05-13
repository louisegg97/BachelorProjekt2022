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
                    
                    <div className='boks'>
                        <div className='tekstBoks'>
                            <h2 >Hvad er programmering egentlig?</h2>
                                    <p>Programmering dækker over udvikling af software og applikationer
                                        m.m. Formålet med software er at udføre nogle opgaver ud fra den 
                                        data, som programmet modtager, for at kunne generere et output til
                                        brugeren. For at softwaren ved, hvordan opgaverne skal udføres, 
                                        anvendes programmeringssprog. Der findes en lang række forskellige 
                                        sprog, heraf er de mest udbredte Java, C#, JavaScript osv. 
                                        Her vil vi give et overblik over de forskellige aspekter, der er ved 
                                        programmering.</p>
                        </div>
                    </div>
                        <div className="icons">
                            <article>
                                <section><a href="OmProgrammering/#frontend_OmProgrammering"><FaColumns size="4em" className="one"/></a></section>
                                <section><a href="OmProgrammering/#backend_OmProgrammering"><FaLaptopCode size="4em" className="two"/></a></section>
                                <section><a href="OmProgrammering/#database_OmProgrammering"><FaDatabase size="4em" className="three"/></a></section>
                                <section><a href="OmProgrammering/#frontend_OmProgrammering"><p className="four">Front-end</p></a></section>
                                <section><a href="OmProgrammering/#backend_OmProgrammering"><p className="five">Back-end</p></a></section>
                                <section><a href="OmProgrammering/#database_OmProgrammering"><p className="six">Databaser</p></a></section>
                            </article>
                            </div>
                    </div>

               <div id="frontend_OmProgrammering">
                   <div className='frontend'>
                        <h2 className='frontend_h2'>Om Front-end</h2>
                        <p className='frontend_tekst'>Begrebet front-end dækker over grænsefladen på websteder, 
                            dvs. alle de synlige elementer på webstedet eller applikationen. 
                            Der er således fokus på webudvikllingen af klientsiden, da der er 
                            fokus på, hvad brugerne oplever visuelt. Front-end-udviklere koder i HTML, 
                            CSS og Javascript, som er de letteste programmeringssprog at lære. 
                            Disse tre sprog danner fundamentet for webstedets front-end.</p>
                            <img className="frontendGif"src={frontendGif} alt="frontendGif" />
                    </div>
                    <Link to="/Frontend" className="frontend_knap">Læs mere her</Link>
               </div>
               <div id="backend_OmProgrammering">
                    <div className='backend'>
                        <h2>Om Back-end</h2>
                        <p className='backend_tekst'>Back-end er alt det bagvedliggende på en hjemmeside og dækker 
                        dermed webapplikationslogik. Back-end-udviklere bygger kode, der tillader en database 
                        og en applikation at kommunikere med hinanden. En backend består typisk af tre komponenter: en server, en applikation og en database.
                        De sprog, man ofte bruger, er Java, C#, Python og databasesprog.</p>
                        <img className="backendGif"src={backendGif} alt="backendGif" />
                    </div>
                    <Link to="/Backend" className="backend_knap">Læs mere her</Link>
               </div>
               <div id="database_OmProgrammering">
                   <div className='database'>
                        <h2>Om Databaser</h2>
                        <p className='databaser_tekst'>Når man taler om en database, taler man om et sted,
                         hvor man kan opbevare data på en struktureret måde. Mange databaser starter som et
                          regneark, men når omfanget af informationen bliver for stort er det en god idé at 
                          overføre sin data til en database. </p>
                          <img className="databaseGif"src={databaseGif} alt="databaseGif" />
                    </div>
                    <Link to="/Database" className="database_knap">Læs mere her</Link>
                    <Link to="/Database" className="database_knap">Læs mere her</Link>
               </div>
          </div>
      );
    }
}