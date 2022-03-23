import React, { Component } from 'react';
import Baggrund_figur from './images/Baggrund_figur.png';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './Home.css';
import EmilieChristensen from './images/SuccesHistorier/emilieChristensen.webp';



export class Home extends Component {
  static displayName = Home.name;
  
  componentDidMount() {
    window.scrollTo(0, 0);
}

  render () {
    return (
      <div>
        <secText className="overskrift">LadyBugs</secText>
        <div className="topDiv">
        <img className="kvindeligProgrammør" src={EmilieChristensen} alt=""/>
         <div className="textAndButton">
          <secText className="introTextHome">Styrk din selvtillid indenfor programmering sammen med Ladybugs</secText>
          <button className="komIgangKnap">Kom igang her</button>
          </div>
        </div>

        <div className="historieOrange">
        <div className="indhold">
          <h1 className="overskriftHøjre" id={'section1'}>Hvad er programmering egentlig?</h1>
            <p className="beskrivelseLys"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis convallis gravida nisl, sit amet rutrum turpis elementum tempus. Sed sodales diam vel molestie consequat. Phasellus vitae sollicitudin eros. Sed ut interdum urna. In tincidunt velit vel ornare venenatis. Etiam nec neque non orci consectetur posuere. Nam non suscipit nibh. Donec venenatis nunc sit amet nunc laoreet mattis. Integer commodo orci dolor, eu faucibus diam sagittis et.
            Vivamus congue lorem dui, sit amet tincidunt leo scelerisque sed. Nullam ac semper lorem. Integer vestibulum auctor dui, quis vestibulum nulla vehicula et. Cras ac lectus est. Fusce aliquam accumsan orci, et cursus dui accumsan quis. Donec aliquam quam sit amet arcu semper, quis luctus massa tincidunt. Curabitur sagittis dui quis arcu imperdiet efficitur. Etiam consequat quam a viverra sollicitudin. Cras sit amet elit tellus. Cras quam lacus, porttitor vitae bibendum id, congue nec magna. Fusce in ligula pellentesque, tempor augue ac, bibendum neque. Sed ut leo in libero pulvinar volutpat. Nulla nibh sem, auctor et condimentum non, ultrices id nibh.
            Aenean ultrices, urna nec dapibus cursus, nisl justo rutrum diam, non aliquet risus nisl rhoncus diam. Nunc sagittis efficitur luctus. Aliquam mi dui, egestas non vestibulum id, sollicitudin non magna. Duis nec dui vel arcu scelerisque posuere at euismod sem. Mauris nisl nunc, lacinia ac nulla at, facilisis pellentesque dolor. Aliquam erat volutpat. Proin a sem nunc.</p>
          </div>
          <Link to="/OmProgrammering" className="læsMereHer">Læs mere her</Link>
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
        </div>

        <div id="id-of-div" className="historiePink">
        <div className="indhold">
          <div className ="tekstInhold">
          <h1 className="overskriftHøjre">"Jeg programmerer fordi jeg kan udfolde min kreativitet""</h1>
          <p className="beskrivelseLys"> Emilie Christensen -20 år.</p>
          </div>
          <img className="billedeSucceshitorie" src={EmilieChristensen} alt=""/>
          </div>
          <Link to="/SuccesHistorier" className="læsMereHer">Læs mere her</Link>
        </div>

       
      </div>
    );
  }
}
