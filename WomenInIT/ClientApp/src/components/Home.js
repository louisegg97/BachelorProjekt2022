import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './Home.css';
import forsideBillede from './images/Forside/forside-billede.jpg';
import alberteWærens from './images/Forside/alberteWærens.png';



export class Home extends Component {
  static displayName = Home.name;
  
  componentDidMount() {
    window.scrollTo(0, 0);
}

  render () {
    return (
      <div>
        <div className="topDiv">
        <img className="kvindeligProgrammør" src={forsideBillede} alt=""/>
         <div className="textAndButton">
          <secText className="introTextHome">Styrk din selvtillid indenfor programmering sammen med Ladybugs</secText>
          <Link to="/OmProgrammering" className="komIgangKnap">Kom igang her</Link>
          </div>
        </div>

        <div id="programmeringDiv" className="historieOrange">
        <div className="indhold">
          <h1 className="overskriftHøjre" id={'section1'}>Hvad er programmering egentlig?</h1>
            <div className="beskrivelseLys"> 
            <p>Programmering har eksisteret i mange år, men er stadig en del af nyere tids udvikling. 
            Det kaldes også for kodning eller udvikling, og handler om udviklingen at software og applikationer. 
            Når man som udvikler skal lave en app eller et program, skal det kunne nogle specielle ting, 
            det kan f.eks. være at modtage noget data og bearbejde det, eller man skal kunne sende beskeder og billeder via programmet. 
            Programmering og kodning er en måde hvorpå en programmør fortæller softwaren præcis hvordan den skal opføre sig, og hvad der skal ske, 
            når en bruger f.eks. trykker på en specifik knap. </p>

            <p>Der findes forskellige programmerings sprog, hvor hver har deres egenskaber og kvaliteter 
            - nogle er derfor bedre at bruge når der skal udvikle specielle former for applikationer eller programmer. </p>
            
            <p>Programmering er en super spænende verden, og det er kun fantasien der sætter grænser for hvad du kan gøre med det 
            - så vi er glade for at inviterer dig med på rejsen, og give dig en introduktion til det.</p>
            </div>
          </div>
          <Link to="/OmProgrammering" className="omProgrammeringlæsMereHer">Læs mere her</Link>
        </div>

        <div className="mellemdiv">
          <div className="indhold1">
            <p className="tal1">1</p>
            <p className ="stepTekst">Vælg hvilke niveau du ønsker at lave opgaver på</p>
          </div>
          <div className="indhold2">
            <p className ="stepTekst2">Nu kan du vælger hvilken type programmering du vil afprøve </p>
            <p className="tal2">2</p>
          </div>
          <div className="indhold3">
            <p className="tal3">3</p>
            <p className ="stepTekst">Til sidst er det bare at gå igang med at programmere. Du kan altid hente hjælp, hvis du går i stå eller bliver i tvivl.</p>
          </div>
          <Link to="/Opgaver" className="prøvProgrammeringlæsMereHer">Kom igang her</Link>

        </div>

        <div id="id-of-div" className="historiePink">
        <div className="indhold">
          <div className ="tekstInhold">
          <h1 className="overskriftSuccesForside">"Jeg programmerer fordi jeg kan udfolde min kreativitet"</h1>
          <p className="quoteNavn"> Alberte Kjær Wærens -23 år.</p>
          </div>
          <img className="billedeSucceshitorie" src={alberteWærens} alt=""/>
          </div>
          <Link to="/SuccesHistorier" className="omSuccesHistorierlæsMereHer">Læs mere her</Link>
        </div>

       
      </div>
    );
  }
}
