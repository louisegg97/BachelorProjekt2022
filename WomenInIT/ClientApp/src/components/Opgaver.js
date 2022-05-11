import React, { Component } from 'react';
import './Opgaver.css';
import './opgavesider/Opgaveside.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import gif from './images/Opgaveknapper/giphy.gif'


export class Opgaver extends Component {
    static displayName = Opgaver.name;
  
    componentDidMount() {
      window.scrollTo(0, 0);
    } 
    
    render() {
      return (
        <div>
            <div className="overskriftdivOpagerStartside" id="baggrund">
              <secText className="overskriftOpgaver" >Opgaver</secText>
            <p className="intro">
            Her har du mulighed for at prøve kræfter med at programmere selv. 
            Vi mener, at det er vigtigt at opleve programmering selv for at forstå, hvordan det virker, og hvad det kan. 
            Vi har derfor lavet nogle opgaver, som du kan kaste dig ud i, uanset hvor meget erfaring du har med programmering. 
            <br /><br />
            Du har mulighed for at vælge opgaver indenfor front-end, back-end og database, alt efter hvad du har mest lyst til at prøve. 
            Hvis du er i tvivl om, hvad det er, eller ønsker at vide mere, kan du læse om det i “Om programmering”. 
            <br /><br />
            For hver kategori er der opgaver til dig, der er begynder, til dig der er let øvet, og til dig der er øvet i programmering. 
            Der er tre opgaver til dem alle, og du kan helt frit vælge, hvilke du vil løse. Hvis du sidder fast, og ikke er sikker på, hvordan du skal løse opgaven, er der tre hints, du kan se, som kan hjælpe dig lidt på vej.
            <br />
            God fornøjelse!
            </p>
            <div className="gifdiv" >
            <img className="gif" src={gif} alt=""/>
            </div>
            <div className="grid-container">
            <Link to="/FrontendOpg" className="opgaveknapper">Front-end</Link>
            <Link to="/BackendOpg" className="opgaveknapper">Back-end</Link>
            <Link to="/DatabaseOpg" className="opgaveknapper">Database</Link>
            </div>
            </div>
               
             
          </div>


           
      );
    }
}