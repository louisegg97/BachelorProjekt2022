import React, { Component } from 'react';
import './Opgaver.css';
import './opgavesider/Opgaveside.js';



export class DatabaseOpg extends Component {
    static displayName = DatabaseOpg.name;
  
    componentDidMount() {
      window.scrollTo(0, 0);
    } 
    
    render() {
      return (
        <div>
            <div className="overskriftdiv" id="baggrund">
              <secText className="overskriftOpgaver" >Database Opgaver</secText>
            <p className="intro">
            Her har du mulighed for at prøve kræfter med at programmere Database selv. Vi mener at det er vigtigt at opleve programmering selv, for at forstå hvordan det virker, og hvad det kan. Vi har derfor lavet nogle opgaver, som du kan kaste dig ud i, uanset din erfaring med programmering. Hvis du ønsker at læse mere om Database programmering kan du gøre det i “Om programmering”.
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