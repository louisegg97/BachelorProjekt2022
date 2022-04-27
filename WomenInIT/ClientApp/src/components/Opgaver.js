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
            <div className="overskriftdiv" id="baggrund">
              <secText className="overskriftOpgaver" >Opgaver</secText>
            <p className="intro">
            Her har du mulighed for at prøve at programmer selv. 
            Der er opgaver for dig der er begynder, let øvet og for dig der er øvet. 
            Uanset niveau kan du prøve kræfter med programmering i frontend, backend og databaser 
            - hvis du vil vide mere om disse kan du læse om dem her
            </p>
            <div className="gifdiv" >
            <img className="gif" src={gif} alt=""/>
            </div>
            <div className="grid-container">
            <Link to="/FrontendOpg" className="opgaveknapper">Frontend</Link>
            <Link to="/BackendOpg" className="opgaveknapper">Backend</Link>
            <Link to="/DatabaseOpg" className="opgaveknapper">Database</Link>
            </div>
            </div>
               
             
          </div>


           
      );
    }
}