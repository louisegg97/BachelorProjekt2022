import React, { Component } from 'react';
import './Opgaver.css';
import './opgavesider/Opgaveside.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


export class DatabaseOpg extends Component {
    static displayName = DatabaseOpg.name;
  
    componentDidMount() {
      window.scrollTo(0, 0);
    } 
    
    render() {
      return (
        <div>
            <div className="overskriftdiv" id="baggrund">
            <Link to="/Opgaver" className="tilbage">Tilbage</Link>
              <secText className="overskriftOpgaver" >Database-opgaver</secText>
              <p className="intro">
            Her har du mulighed for at prøve kræfter med at programmere database selv. Opgaverne er teoretiske, hvilket betyder, at du ikke skal kode, men forstå teorien principperne bag, hvordan en database er opbygget. 
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
                  window.location.href='./opgaveside/bd1';
                  }}>1</button>
               
                <button className="opgbtn" id="knap2" onClick={(e) => {
                  e.preventDefault();
                  window.location.href='./opgaveside/bd2';
                  }}>2</button>
        
                <button className="opgbtn" id="knap3" onClick={(e) => {
                  e.preventDefault();
                  window.location.href='./opgaveside/bd3';
                  }}>3</button>
         
              </div>
            </div>

          <div className="historieLys">
              <h1 className="overskriftHøjre">For dig der er let øvet</h1>
              
              <div class="grid-container">


              <button className="opgbtn" id="knap1" onClick={(e) => {
                  e.preventDefault();
                  window.location.href='./opgaveside/ld1';
                  }}>1</button>
                
                <button className="opgbtn" id="knap2" onClick={(e) => {
                  e.preventDefault();
                  window.location.href='./opgaveside/ld2';
                  }}>2</button>
          
                <button className="opgbtn" id="knap3" onClick={(e) => {
                  e.preventDefault();
                  window.location.href='./opgaveside/od2';
                  }}>3</button>
        
        </div>
              </div>

            <div className="historiePink">
              <h1 className="overskriftHøjre">For dig der er øvet</h1>
                 <div class="grid-container">
   
        
                <button className="opgbtn" id="knap1" onClick={(e) => {
                  e.preventDefault();
                  window.location.href='./opgaveside/od1';
                  }}>1</button>
              
                <button className="opgbtn" id="knap2" onClick={(e) => {
                  e.preventDefault();
                  window.location.href='./opgaveside/od2';
                  }}>2</button>
       
                <button className="opgbtn" id="knap3" onClick={(e) => {
                  e.preventDefault();
                  window.location.href='./opgaveside/od3';
                  }}>3</button>
        
              </div>
             

            </div>

        
          </div>


           
      );
    }
}