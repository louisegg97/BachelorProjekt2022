import React, { Component } from 'react';
import './Opgaver.css';
import './opgavesider/Opgaveside.js';



export class FrontendOpg extends Component {
    static displayName = FrontendOpg.name;
  
    componentDidMount() {
      window.scrollTo(0, 0);
    } 
    
    render() {
      return (
        <div>
            <div className="overskriftdiv" id="baggrund">
              <secText className="overskriftOpgaver" >Frontend Opgaver</secText>
            <p className="intro">
            Her har du mulighed for at prøve at programmer selv. 
            Der er opgaver for dig der er begynder, let øvet og for dig der er øvet. 
            Uanset niveau kan du prøve kræfter med programmering i frontend, backend og databaser 
            - hvis du vil vide mere om disse kan du læse om dem her
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