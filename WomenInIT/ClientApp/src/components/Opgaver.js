import React, { Component } from 'react';
import './Opgaver.css';
import './opgavesider/begynder1.js';
import Opgavenr from './OpgaveNr';
import gif from './images/Opgaveknapper/giphy.gif'


export class Opgaver extends Component {
    static displayName = Opgaver.name;
  
    componentDidMount() {
      window.scrollTo(0, 0);
    } 
    
    render() {
      return (
        <div>
            <div className="baggrundDiv">
            <div className="overskriftdiv" >
                <secText className="overskrift">Opgaver</secText>
            </div>
            <div className="intro">
            <secText  >
            Her har du mulighed for at prøve at programmer selv. 
            Der er opgaver for dig der er begynder, let øvet og for dig der er øvet. 
            Uanset niveau kan du prøve kræfter med programmering i frontend, backend og databaser 
            - hvis du vil vide mere om disse kan du læse om dem her
            </secText>
            </div>
            <div className="gifdiv" >
            <img className="gif" src={gif} alt=""/>
            </div>
            </div>
                <div className="historieOrange">
             <h1 className="overskriftHøjre">For dig der er begynder</h1>
              <Opgavenr/>
            </div>

            <div className="historieLys">
              <h1 className="overskriftHøjre">For dig der er let øvet</h1>
              <Opgavenr/>
            </div>

            <div className="historiePink">
              <h1 className="overskriftHøjre">For dig der er let øvet</h1>
              <Opgavenr/>
            </div>

            </div>

           
      );
    }
}