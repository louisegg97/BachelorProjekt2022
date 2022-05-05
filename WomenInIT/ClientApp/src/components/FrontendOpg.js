import React, { Component } from 'react';
import './Opgaver.css';
import './opgavesider/Opgaveside.js';
import {    
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


export class FrontendOpg extends Component {
    static displayName = FrontendOpg.name;
  
    componentDidMount() {
      window.scrollTo(0, 0);
    } 
    
    render() {
      return (
        <div>
          <Link to="/Opgaver" className="tilbage">Tilbage</Link>
            <div className="overskriftdiv" id="baggrund">
              <secText className="overskriftOpgaver" >Frontend Opgaver</secText>
            <p className="intro">
            Her har du mulighed for at prøve kræfter med at programmere Frontend selv. Vi mener at det er vigtigt at opleve programmering selv, for at forstå hvordan det virker, og hvad det kan. Vi har derfor lavet nogle opgaver, som du kan kaste dig ud i, uanset din erfaring med programmering. Hvis du ønsker at læse mere om frontend kan du gøre det i “Om programmering”.
            <br /> <br />
            De er opgaver til dig der er begynder, til dig der er let øvet og til dig der er øvet i programmering. Der er tre opgaver til dem alle, og du kan helt frit vælge hvilke du vil løse. Hvis du sidder fast, og ikke er sikker på hvordan du skal løse opgaven, er der tre hints du kan se, som kan hjælpe dig lidt på vej.
            <br />
            God fornøjelse!
            </p>
            
            </div>
                <div className="historieOrange">
             <h1 className="overskriftHøjre">For dig der er begynder</h1>
             <div class="grid-container">

                <button className="opgbtn" id="knap1" onClick={(e) => {
                  e.preventDefault();
                  window.location.href='./opgaveside/bf1';
                  }}>1</button>
              
        
                <button className="opgbtn" id="knap2" onClick={(e) => {
                  e.preventDefault();
                  window.location.href='./opgaveside/bf2';
                  }}>2</button>
               
         
                <button className="opgbtn" id="knap3" onClick={(e) => {
                  e.preventDefault();
                  window.location.href='./opgaveside/bf3';
                  }}>3</button>
            
              </div>
            </div>

          <div className="historieLys">
              <h1 className="overskriftHøjre">For dig der er let øvet</h1>
              
              <div class="grid-container">

                <button className="opgbtn" id="knap1" onClick={(e) => {
                  e.preventDefault();
                  window.location.href='./opgaveside/lf1';
                  }}>1</button>
                
                <button className="opgbtn" id="knap2" onClick={(e) => {
                  e.preventDefault();
                  window.location.href='./opgaveside/lf2';
                  }}>2</button>
          
                <button className="opgbtn" id="knap3" onClick={(e) => {
                  e.preventDefault();
                  window.location.href='./opgaveside/of2';
                  }}>3</button>
        
              </div>
              </div>
            <div className="historiePink">
              <h1 className="overskriftHøjre">For dig der er øvet</h1>
                 <div class="grid-container">

                <button className="opgbtn" id="knap1" onClick={(e) => {
                  e.preventDefault();
                  window.location.href='./opgaveside/of1';
                  }}>1</button>
            
                <button className="opgbtn" id="knap2" >2</button>
               
                <button className="opgbtn" id="knap3" >3</button>
               
              </div>
             

            </div>

       
          </div>


           
      );
    }
}