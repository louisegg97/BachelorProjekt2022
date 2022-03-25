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
          <div>
               <h1 className="overskrift_P">Om programmering</h1>
               <img className="billede_baggrund" src={Baggrund_figur} alt=""/>
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
               <div className="icons">
                    <div className="grid-container">
                        <FaColumns size="4em" className="one"/>
                        <p className="two">Front-end</p>
                        <FaLaptopCode size="4em" className="three"/>
                        <p className="four">Back-end</p>
                        <FaDatabase size="4em" className="five"/>
                        <p className="six">Databaser</p>
                    </div>
                </div>
               <section className='section1'>
                   <h2>Om Frontend</h2>
                   <p>Begrebet front-end dækker over grænsefladen på websteder, 
                       dvs alle de synlige elementer på webstedet eller applikationen. 
                       Der er således fokus på webudvikllingen af klientsiden, da der er 
                       fokus på, hvad brugerne ser visuelt. Front-end udviklere koder i HTML, 
                       CSS og Javascript, hvilket er de letteste programmeringssprog at lære. 
                       Disse tre sprog danner fundamentet for webstedet front-end.</p>
               </section>
          </div>
      );
    }
}