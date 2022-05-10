import React, { Component } from 'react';
import './OmProgrammering_Undersider.css';
import { FaLanguage } from 'react-icons/fa';
import { FaUserGraduate } from 'react-icons/fa';
import { FaRegSun } from 'react-icons/fa';
import Animation_3 from './Animation/Animation_3';
import Animation_4 from './Animation/Animation_4';
import python from './images/Backend/python.png'
import php from './images/Backend/php.png'
import java from './images/Backend/java.png'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

export class Backend extends Component {
    static displayName = Backend.name;
  
    componentDidMount() {
      window.scrollTo(0, 0);
    } 
    
    render() {
      return (
          <div className='body'>
              <div className="billedeBaggrund">
              <Link to="/OmProgrammering" className="tilbage">Tilbage</Link>
                    <h1 className="overskrift_P">Back-end</h1>
                    
                    <div className="icons_">
                        <article>
                            <section><a href ="Backend/#section1_underside"><FaLanguage size="4em" className="one"/></a></section>
                            <section><a href ="Backend/#section2_underside"><FaRegSun size="4em" className="two"/></a></section>
                            <section><a href ="Backend/#section3_underside"><FaUserGraduate size="4em" className="three"/></a></section>
                            <section><a href ="Backend/#section1_underside"><p className="four">Back-end-end sprog</p></a></section>
                            <section><a href ="Backend/#section2_underside"><p className="five">Back-end-principper</p></a></section>
                            <section><a href ="Backend/#section3_underside"><p className="six">Lær back-end</p></a></section>
                        </article>
                        </div>
                 </div>

               <div id="section1_underside_backend">
                   <div className='section_1'>
                        <h2 className='section1_h2'>Back-end-sprog</h2>
                        <p className='section1_tekst'>Mange backend-udviklere kender front-end-sprog som 
                        HTML og CSS, men skal bruge sprog som Java, PHP, Ruby on Rails, Python og .Net for 
                        at få back-end-jobbet gjort. Back-end-udviklere er mest fokuserede på et websteds 
                        reaktionsevne og hastighed. Back-end-sprogene bruges til at skabe dynamiske websteder, 
                        der adskiller sig fra statiske websteder, idet disse typer websteder gemmer 
                        databaseoplysninger. Indholdet på siden ændres og opdateres konstant. Eksempler på
                         dynamiske websteder omfatter Facebook, Twitter og Google Maps.
                        Nedenfor har vi listet tre kendte sprog, men der findes mange andre.</p>
                    </div>
                    <Animation_3/>

               </div>
               <div id="section2_underside">
                    <div className='section_2'>
                        <h2>Back-end-principper</h2>
                        <p className='section2_tekst'>Back-end-programmering kan enten være objektorienteret (OOP)
                         eller funktionel.</p>
                    </div>
                  <Animation_4/>
               </div>
               <div id="section3_underside">
                   <div className='section_3'>
                        <h2>Lær back-end</h2>
                        <p className='section3_tekst'>Hvis back-end-udvikling siger dig noget, så prøv kræfter af
                        med vores opgaver, der giver dig en introduktion til principperne bag back-end-udvikling, og
                        husk at begynde i det små! Rom blev ikke bygget på en dag, og det gælder også her. Man lærer 
                        ikke at programmere fra den ene dag til den anden, så vær tålmodig! Du skal nok lære det :D God programmerings lyst!! </p>
                        <Link to="/BackendOpg" className="Opg_knap">Gå til back-end opgaver</Link>
                    </div>
               </div>
          </div>
      );
    }
}