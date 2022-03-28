import React, { Component } from 'react';
import './OmProgrammering.css';
import Baggrund_figur from './images/Baggrund_figur.png';
import Collapsible from './Collapsible';
import { FaDatabase } from 'react-icons/fa';
import { FaLaptopCode } from 'react-icons/fa';
import { FaColumns } from 'react-icons/fa';
import ReactDOM from "react-dom";



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
                      <section><a href="#frontend"><FaColumns size="4em" className="one"/></a></section>
                      <section><a href="#frontend"><FaLaptopCode size="4em" className="two"/></a></section>
                      <section><a href="#backend"><FaDatabase size="4em" className="three"/></a></section>
                      <section><a href="#backend"><p className="four">Front-end</p></a></section>
                      <section><a href="#database"><p className="five">Back-end</p></a></section>
                      <section><a href="#database"><p className="six">Databaser</p></a></section>
                  </article>
                 </div>
                 </div>

               <div id="frontend">
                   <h2>Om Frontend</h2>
                   <p>Begrebet front-end dækker over grænsefladen på websteder, 
                       dvs alle de synlige elementer på webstedet eller applikationen. 
                       Der er således fokus på webudvikllingen af klientsiden, da der er 
                       fokus på, hvad brugerne ser visuelt. Front-end udviklere koder i HTML, 
                       CSS og Javascript, hvilket er de letteste programmeringssprog at lære. 
                       Disse tre sprog danner fundamentet for webstedet front-end.</p>
               </div>
               <div id='backend'>
                   <h2>Om backend</h2>
                   <p>Begrebet front-end dækker over grænsefladen på websteder, 
                       dvs alle de synlige elementer på webstedet eller applikationen. 
                       Der er således fokus på webudvikllingen af klientsiden, da der er 
                       fokus på, hvad brugerne ser visuelt. Front-end udviklere koder i HTML, 
                       CSS og Javascript, hvilket er de letteste programmeringssprog at lære. 
                       Disse tre sprog danner fundamentet for webstedet front-end.</p>
               </div>
               <div id="database">
                   <h2>Om databaser</h2>
                   <p>Begrebet front-end dækker over grænsefladen på websteder, 
                       dvs alle de synlige elementer på webstedet eller applikationen. 
                       Der er således fokus på webudvikllingen af klientsiden, da der er 
                       fokus på, hvad brugerne ser visuelt. Front-end udviklere koder i HTML, 
                       CSS og Javascript, hvilket er de letteste programmeringssprog at lære. 
                       Disse tre sprog danner fundamentet for webstedet front-end.</p>
               </div>
          </div>
      );
    }
}