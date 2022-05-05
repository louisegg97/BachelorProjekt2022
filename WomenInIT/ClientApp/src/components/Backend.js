import React, { Component } from 'react';
import './OmProgrammering_Undersider.css';
import { FaLanguage } from 'react-icons/fa';
import { FaUserGraduate } from 'react-icons/fa';
import { FaRegSun } from 'react-icons/fa';
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
                    <h1 className="overskrift_P">Backend</h1>
                    
                    <div className="icons_">
                        <article>
                            <section><a href ="Backend/#section1_underside"><FaLanguage size="4em" className="one"/></a></section>
                            <section><a href ="Backend/#section2_underside"><FaRegSun size="4em" className="two"/></a></section>
                            <section><a href ="Backend/#section3_underside"><FaUserGraduate size="4em" className="three"/></a></section>
                            <section><a href ="Backend/#section1_underside"><p className="four">Backend-end sprog</p></a></section>
                            <section><a href ="Backend/#section2_underside"><p className="five">Backend principper</p></a></section>
                            <section><a href ="Backend/#section3_underside"><p className="six">Lær backend</p></a></section>
                        </article>
                        </div>
                 </div>


               <div id="section1_underside_backend">
                   <div className='section_1'>
                        <h2 className='section1_h2'>Backend sprog</h2>
                        <p className='section1_tekst'>Mange backend-udviklere kender frontend-sprog som 
                        HTML og CSS, men skal bruge sprog som Java, PHP, Ruby on Rails, Python og .Net for 
                        at få backend-jobbet gjort. Backend-udviklere er mest fokuserede på et websteds 
                        reaktionsevne og hastighed. Disse sprog bruges til at skabe dynamiske websteder, 
                        der adskiller sig fra statiske websteder, idet disse typer websteder gemmer 
                        databaseoplysninger. Indholdet på siden ændres og opdateres konstant. Eksempler på
                         dynamiske websteder omfatter Facebook, Twitter og Google Maps.
                        Nedenfor har vi listet tre kendte sprog, men der findes mange andre</p>
                    </div>
                    <div className="backend-end_sprog_ikoner">
                        <article className='article_b_sprog'>
                            <section><img className="python"src={python} alt="frontend_1" /></section>
                            <section><img className="php"src={php} alt="frontend_1" /></section>
                            <section><img className="java"src={java} alt="frontend_1" /></section>
                            <section><p className='python_h'>Python</p></section>
                            <section><p className='php_h'>PHP</p></section>
                            <section><p className='java_h'>Java</p></section>
                            <section><p className='python_p'>HyperText Markup Language - HTML bruges til at strukturere indholdet på en hjemmeside ved hjælp af en række HTML-elementer. HTML-elementer består af tags.</p></section>
                            <section><p className='php_p'>Cascading Style Sheets - CSS bruges til at definere layoutet på dine HTML-sider. CSS visualiserer HTML-siderne.</p></section>
                            <section><p className='java_p'>JavaScript er et scripting-sprog, som du kan bruge til at gøre din hjemmeside interaktiv/dynamisk (dit indhold kan ændres afhængig af input fra brugeren)</p></section>
                        </article>
                        </div>
               </div>
               <div id="section2_underside">
                    <div className='section_2'>
                        <h2>Backend principper</h2>
                        <p className='section2_tekst'>Backend-programmering kan enten være objektorienteret (OOP)
                         eller funktionel.</p>
                    </div>
                    <div className="backend_princip">
                      <div className="oop_funktionel">
                            <div className="oop_boks">
                                <h4>Objekorienteret programmering</h4>
                                  <p className="oop_tekst">OOP er teknikken, der fokuserer på skabelsen af objekter. 
                                  Med objektorienteret programmering skal sætninger udføres i en bestemt rækkefølge. 
                                  Populære OOP-sprog er Java, .NET og Python,</p>
                              </div>
                              <div className='funktionel_boks'>
                                <h4>Funktionel programmering</h4>
                                  <p className="funktionel">Funktionel backend-programmering er en teknik, der er mere 
                                  "action"-baseret. Funktionel programmering bruger deklarativt sprog, hvilket betyder, at 
                                  sætninger kan udføres i enhver rækkefølge. Det bruges almindeligvis til datavidenskab, og 
                                  populære sprog er SQL, F# og R.</p>
                              </div>
                        </div>
                      </div>
               </div>
               <div id="section3_underside">
                   <div className='section_3'>
                        <h2>Lær backend</h2>
                        <p className='section3_tekst'>Hvis backend udvikling siger dig noget. Så prøv kræfter af
                        med vores opgaver, der giver dig en introduktion til principperne bag backend udvikling, og
                        husk at begynd i det små! Rom blev ikke bygget på en dag, og det gælder også her. Man lærer 
                        ikke at programmere fra den ene dag til den anden, så vær tålmodig! Du skal nok lære det :D God programmerings lyst!! </p>
                        <Link to="/BackendOpg" className="Opg_knap">Gå til backend opgaver</Link>
                    </div>
               </div>
          </div>
      );
    }
}