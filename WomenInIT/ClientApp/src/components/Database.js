import React, { Component } from 'react';
import './OmProgrammering_Undersider.css';
import { FaLanguage } from 'react-icons/fa';
import { FaUserGraduate } from 'react-icons/fa';
import { FaChalkboardTeacher } from 'react-icons/fa';
import frontend_1 from './images/Frontend/Frontend_1.png'
import frontend_2 from './images/Frontend/Frontend_2.png'
import frontend_3 from './images/Frontend/Frontend_3.png'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


export class Database extends Component {
    static displayName = Database.name;
    constructor(props) {
      super(props);
      this.scrollToDBSprog = React.createRef();
      this.scrollToDBAnsvar= React.createRef();
      this.scrollToDBLær = React.createRef();
    }
  
    componentDidMount() {
      window.scrollTo(0, 0);
    } 
    
    render() {
      return (
          <div className='body'>
              <div className="billedeBaggrund">
              <Link to="/OmProgrammering" className="tilbage">Tilbage</Link>
                    <h1 className="overskrift_P">Database</h1>
                    
                    <div className="icons_">
                        <article>
                            <section><a onClick={()=> this.scrollToDBSprog.current.scrollIntoView()}><FaChalkboardTeacher size="4em" className="one"/></a></section>
                            <section><a onClick={()=> this.scrollToDBAnsvar.current.scrollIntoView()}><FaLanguage size="4em" className="two"/></a></section>
                            <section><a onClick={()=> this.scrollToDBLær.current.scrollIntoView()}><FaUserGraduate size="4em" className="three"/></a></section>
                            <section><a onClick={()=> this.scrollToDBSprog.current.scrollIntoView()}><p className="four">Introduktion</p></a></section>
                            <section><a onClick={()=> this.scrollToDBAnsvar.current.scrollIntoView()}><p className="five">Database-sprog</p></a></section>
                            <section><a onClick={()=> this.scrollToDBLær.current.scrollIntoView()}><p className="six">Lær om databaser</p></a></section>
                        </article>
                        </div>
                 </div>


               <div id="section1_underside" ref={this.scrollToDBSprog}>
                   <div className='section_1'>
                        <h2 className='section1_h2'>Hvad er en database?</h2>
                        <p className='section1_tekst'>Databasesprog, almindeligvis omtalt som query-sprog, er en 
                        type programmeringssprog, som programmører bruger til at definere og få adgang til data. 
                        Inden for databasestyringssystemet (DBMS) giver disse sprog brugere mulighed for at udføre 
                        opgaver som:
                          Begrænsning af dataadgang,
                          Definition og ændring af data,
                          Informationssøgning.</p>
                    </div>
               </div>
               <div id="section2_underside" ref={this.scrollToDBAnsvar}>
                    <div className='section_2'>
                        <h2>Database-sprog</h2>
                        <p className='section2_tekst'>Back-end er alt det bagvedliggende på en hjemmeside og dækker 
                        dermed webapplikationslogik. Back-end-udviklere bygger kode, der tillader en database 
                        og en applikation at kommunikere med hinanden. En back-end består typisk af tre komponenter: en server, en applikation og en database.
                        De sprog, man ofte bruger, er Java, C#, Python og databasesprog.</p>
                    </div>
               </div>
               <div id="section3_underside" ref={this.scrollToDBLær}>
                   <div className='section_3'>
                        <h2>Lær om databaser</h2>
                        <p className='section3_tekst'> Hvis database programmering siger dig noget, så prøv kræfter af
                        med vores opgaver, der giver dig en introduktion til principperne bag oprettelse af en databaseat, og
                        husk at begynde i det små! Det er smart først at forstå principperne bag en database, før man lærer at kode en. 
                        Derfor er vores opgaver omkring databaser teoretiske. God arbejdslyst!! </p>
                        <Link to="/DatabaseOpg" className="Opg_knap">Gå til database opgaver</Link>
                    </div>
               </div>
          </div>
      );
    }
}