import React, { Component } from 'react';
import './Opgaver.css';
import './opgavesider/Opgaveside.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


export class BackendOpg extends Component {
    static displayName = BackendOpg.name;
  
    componentDidMount() {
      window.scrollTo(0, 0);
    } 
    
    render() {
      return (
        <div>
            <Link to="/Opgaver" className="tilbage">Tilbage</Link>
            <div className="overskriftdiv" id="baggrund">
              <secText className="overskriftOpgaver" >Backend Opgaver</secText>
              <p className="intro">
            Her har du mulighed for at prøve kræfter med at programmere back-end selv. Opgaverne er alle i det samme sprog, hvilket er Java, da vi mener, at java er et godt sprog at starte med. Vi startede alle selv med at lære Java og syntes det var en god indgangsvinket til back-end programmering. 
            <br /> <br />
            Der er opgaver til dig, der er begynder, til dig der er let øvet, og til dig der er øvet i programmering. Der er tre opgaver til dem alle, og du kan helt frit vælge, hvilke du vil løse. Hvis du sidder fast og ikke er sikker på, hvordan du skal løse opgaven, er der tre hints, du kan se, som kan hjælpe dig lidt på vej.
            <br />
            God fornøjelse!
            </p>
            </div>
                <div className="historieOrange">
             <h1 className="overskriftHøjre">For dig der er begynder</h1>
             <div class="grid-container">

          
                <button className="opgbtn" id="knap1" onClick={(e) => {
                  e.preventDefault();
                  window.location.href='./opgaveside/bb1';
                  }}>1</button>
               
                <button className="opgbtn" id="knap2" onClick={(e) => {
                  e.preventDefault();
                  window.location.href='./opgaveside/bb2';
                  }}>2</button>
        
                <button className="opgbtn" id="knap3" onClick={(e) => {
                  e.preventDefault();
                  window.location.href='./opgaveside/bb3';
                  }}>3</button>
         
              </div>
            </div>

          <div className="historieLys">
              <h1 className="overskriftHøjre">For dig der er let øvet</h1>
              
              <div class="grid-container">


              <button className="opgbtn" id="knap1" onClick={(e) => {
                  e.preventDefault();
                  window.location.href='./opgaveside/lb1';
                  }}>1</button>
                
                <button className="opgbtn" id="knap2" onClick={(e) => {
                  e.preventDefault();
                  window.location.href='./opgaveside/lb2';
                  }}>2</button>
          
                <button className="opgbtn" id="knap3" onClick={(e) => {
                  e.preventDefault();
                  window.location.href='./opgaveside/ob2';
                  }}>3</button>
            </div>
              
              </div>

            <div className="historiePink">
              <h1 className="overskriftHøjre">For dig der er øvet</h1>
                 <div class="grid-container">
   
        
                <button className="opgbtn" id="knap1" onClick={(e) => {
                  e.preventDefault();
                  window.location.href='./opgaveside/ob1';
                  }}>1</button>
              
                <button className="opgbtn" id="knap2" onClick={(e) => {
                  e.preventDefault();
                  window.location.href='./opgaveside/ob2';
                  }}>2</button>
       
                <button className="opgbtn" id="knap3" onClick={(e) => {
                  e.preventDefault();
                  window.location.href='./opgaveside/ob3';
                  }}>3</button>
        
              </div>
             

            </div>

      
          </div>


           
      );
    }
}