import React, { Component } from 'react';
import './OmProgrammering.css';
import Baggrund_figur from './images/Baggrund_figur.png';
import backend_ikon from './images/OmProgrammering/backend1.png';
import frontend_ikon from './images/OmProgrammering/user-experience.png';
import database_ikon from './images/OmProgrammering/database-storage.png';
import Collapsible from './Collapsible';
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
               <div className='ikoner'>
                    <div class="grid-container">
                                <img className="grid-item" src={frontend_ikon} alt=""/>
                                <p className="grid-item">Front-end</p>
                                <img className="grid-item" src={backend_ikon} alt=""/>
                                <p className="grid-item">Back-end</p>
                                <img className="grid-item" src={database_ikon} alt=""/>
                                <p className="grid-item">Databaser</p>
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