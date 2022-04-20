import React, { Component } from 'react';
import './Opgaver.css';
import './opgavesider/Opgaveside.js';
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
            <secText className="overskriftOpgaver">Programmeringssprog</secText>
            </div>
                <div className="historieOrange">
             <h1 className="overskriftHøjre">For dig der er begynder</h1>
             <div class="grid-container">
                <div>Frontend</div>
                <div>Backend</div>
                <div>Database</div> 
                <button className="opgbtn" id="knap1" onClick={(e) => {
                  e.preventDefault();
                  window.location.href='./opgaveside/bf1';
                  }}>1</button>
                <button className="opgbtn" id="knap1" onClick={(e) => {
                  e.preventDefault();
                  window.location.href='./opgaveside/bb1';
                  }}>1</button>
                <button className="opgbtn" id="knap1" >1</button>
                <button className="opgbtn" id="knap2" >2</button>
                <button className="opgbtn" id="knap2" >2</button>
                <button className="opgbtn" id="knap2" >2</button>
                <button className="opgbtn" id="knap3" >3</button>
                <button className="opgbtn" id="knap3" >3</button>
                <button className="opgbtn" id="knap3" >3</button>
              </div>
            </div>

          <div className="historieLys">
              <h1 className="overskriftHøjre">For dig der er let øvet</h1>
              
              <div class="grid-container">
                <div>Frontend</div>
                <div>Backend</div>
                <div>Database</div> 
                <button className="opgbtn" id="knap1" onClick={(e) => {
                  e.preventDefault();
                  window.location.href='./opgaveside/lf1';
                  }}>1</button>
                <button className="opgbtn" id="knap1" onClick={(e) => {
                  e.preventDefault();
                  window.location.href='./opgaveside/lb1';
                  }}>1</button>
                <button className="opgbtn" id="knap1" >1</button>
                <button className="opgbtn" id="knap2" >2</button>
                <button className="opgbtn" id="knap2" >2</button>
                <button className="opgbtn" id="knap2" >2</button>
                <button className="opgbtn" id="knap3" >3</button>
                <button className="opgbtn" id="knap3" >3</button>
                <button className="opgbtn" id="knap3" >3</button>
              </div>

            <div className="historiePink">
              <h1 className="overskriftHøjre">For dig der er let øvet</h1>
                 <div class="grid-container">
                <div>Frontend</div>
                <div>Backend</div>
                <div>Database</div> 
                <button className="opgbtn" id="knap1" onClick={(e) => {
                  e.preventDefault();
                  window.location.href='./opgaveside/of1';
                  }}>1</button>
                <button className="opgbtn" id="knap1" onClick={(e) => {
                  e.preventDefault();
                  window.location.href='./opgaveside/ob1';
                  }}>1</button>
                <button className="opgbtn" id="knap1" >1</button>
                <button className="opgbtn" id="knap2" >2</button>
                <button className="opgbtn" id="knap2" >2</button>
                <button className="opgbtn" id="knap2" >2</button>
                <button className="opgbtn" id="knap3" >3</button>
                <button className="opgbtn" id="knap3" >3</button>
                <button className="opgbtn" id="knap3" >3</button>
              </div>
             

            </div>

          </div>
          </div>


           
      );
    }
}