import React, { Component } from 'react';
import './OmProgrammering_Undersider.css';
import { FaLanguage } from 'react-icons/fa';
import { FaUserGraduate } from 'react-icons/fa';
import { FaChalkboardTeacher } from 'react-icons/fa';
import gui from './images/Frontend/gui.png'
import ui from './images/Frontend/ui.png'
import ux from './images/Frontend/ux.png'
import responsive from './images/Frontend/responsive.png'
import Animation_1 from './Animation/Animation_1';
import Animation_2 from './Animation/Animation_2';
import html from './images/Frontend/html.png'
import css from './images/Frontend/css.png'
import js from './images/Frontend/js.png'
import {    
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";






export class Frontend extends Component {
    static displayName = Frontend.name;
    constructor(props) {
        super(props);
        this.scrollToFESprog = React.createRef();
        this.scrollToFEAnsvar= React.createRef();
        this.scrollToFELær = React.createRef();
      }
  
    componentDidMount() {
      window.scrollTo(0, 0);
    } 
    
    render() {
      return (
          <div className='body'>
              <div className="billedeBaggrund">
              <Link to="/OmProgrammering" className="tilbage">Tilbage</Link>
                    <h1 className="overskrift_P">Front-end</h1>
                    
                    <div className="icons_">
                        <article>
                            <section><a onClick={()=> this.scrollToFESprog.current.scrollIntoView()}><FaLanguage size="4em" className="one"/></a></section>
                            <section><a onClick={()=> this.scrollToFEAnsvar.current.scrollIntoView()}><FaChalkboardTeacher size="4em" className="two"/></a></section>
                            <section><a onClick={()=> this.scrollToFELær.current.scrollIntoView()}><FaUserGraduate size="4em" className="three"/></a></section>
                            <section><a onClick={()=> this.scrollToFESprog.current.scrollIntoView()}><p className="four">Front-end-sprog</p></a></section>
                            <section><a onClick={()=> this.scrollToFEAnsvar.current.scrollIntoView()}><p className="five">Ansvarsområder</p></a></section>
                            <section><a onClick={()=> this.scrollToFELær.current.scrollIntoView()}><p className="six">Lær front-end</p></a></section>
                        </article>
                        </div>
                 </div>

                
               <div id="section1_underside_frontend" ref={this.scrollToFESprog}>
                   <div className='section_1'>
                        <h2 className='section1_h2'>Front-end-sprog</h2>
                        <p className='section1_tekst'>Begrebet front-end dækker over grænsefladen på websteder, 
                            dvs. alle de synlige elementer på webstedet eller applikationen. 
                            Der er således fokus på webudvikllingen af klientsiden, da der er 
                            fokus på, hvad brugerne oplever visuelt. Front-end-udviklere koder i HTML, 
                            CSS og Javascript, som er de letteste programmeringssprog at lære. 
                            Disse tre sprog danner fundamentet for webstedets front-end.</p>
                    </div>
                    {/*<div className="front-end_sprog_ikoner">
                        <article className='article_f_sprog'> */}
                            <Animation_1/>
                            {/*<section><img className="html"src={html} alt="frontend_1" /></section>
                            <section><img className="css"src={css} alt="frontend_1" /></section>
                            <section><img className="js"src={js} alt="frontend_1" /></section> */}

                        {/*</article>
                        </div> */}
               </div>
               <div id="section2_underside" ref={this.scrollToFEAnsvar}>
                    <div className='section_2'>
                        <h2>Ansvarsområder</h2>
                        <p className='section2_tekst'>Alt, hvad der har en visuel tilstedeværelse, som folk interagerer 
                        med, er i bund og grund skabt af front-end-udvikleren. Der er nogle ansvarsområder, som altid er 
                        forbundet med front-enden: </p>
                    </div>
                    <div className="front-end_ansvar_ikoner">
                        <article className='article_f_ansvar'>
                        <Animation_2/>
                           {/* <section><img className="gui"src={gui} alt="frontend_1" /></section>
                            <section><img className="ui"src={ui} alt="frontend_1" /></section>
                            <section><img className="ux"src={ux} alt="frontend_1" /></section>
                        <section><img className="responsive"src={responsive} alt="frontend_1" /></section> 
                            <section><p className='gui_h'>Gui</p></section>
                            <section><p className='ui_h'>Ui</p></section>
                            <section><p className='ux_h'>Ux</p></section>
                            <section><p className='responsive_h'>Responsiv</p></section>
                            <section><p className='gui_p'>Graphic user interface - er en visuel forside, som giver mulighed for at interagere med softwaren</p></section>
                            <section><p className='ui_p'>User interface - skaber det rum, hvor interaktioner mellem menneske og maskine finder sted.</p></section>
                            <section><p className='ux_p'>User-experience - er den samlede oplevelse kunden opnår ved brug af jeres produkt, hjemmeside.</p></section>
                            <section><p className='responsive_p'>Responsivt design handler om at tilpasse designet af grænsefladen til at passe til alle skærme.</p></section> */}
                        </article>
                    </div>
               </div>
               <div id="section3_underside" ref={this.scrollToFELær}>
                   <div className='section_3'>
                        <h2>Lær frontend</h2>
                        <p className='section3_tekst'>Hvis front-end-udvikling siger dig noget, så prøv kræfter af
                        med vores opgaver, der giver dig en introduktion til principperne bag front-end-udvikling, og
                        husk at begynde i det små! Start derfor med at forstå HTML og CSS, før du bevæger dig videre til JavaScript. God programmerings lyst!! </p>
                        <Link to="/FrontendOpg" className="Opg_knap">Gå til front-end opgaver</Link>
                    </div>

               </div>
          </div>
      );
    }
}