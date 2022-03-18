import React, { Component } from 'react';
import './OmProgrammering.css';
import Baggrund_figur from './images/Baggrund_figur.png';
import Collapsible from './Collapsible';
import ReactDOM from "react-dom";


export class OmProgrammering extends Component {
    static displayName = OmProgrammering.name;
  
    
    render() {
      return (
          <div>
              <div className="baggrundDiv">
            <div className="overskriftdiv" >
                <secText className="overskrift">Om Programmering</secText>
            </div>
            </div>
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
      );
    }
}