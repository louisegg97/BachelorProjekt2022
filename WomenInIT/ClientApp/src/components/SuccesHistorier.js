import React, { Component } from 'react';
import './SuccesHistorier.css';
import GraceHopperImage from './images/SuccesHistorier/graceHopper.jpg';
import EmilieChristensen from './images/SuccesHistorier/emilieChristensen.webp';
import AlberteWærens from './images/SuccesHistorier/alberteWærens.png';
import test1 from './images/SuccesHistorier/1.jpg';
import test2 from './images/SuccesHistorier/2.jpg';
import test3 from './images/SuccesHistorier/3.jpg';
import test4 from './images/SuccesHistorier/4.jpg';
import test6 from './images/SuccesHistorier/g.jpg';

export class SuccesHistorier extends Component {
  static displayName = SuccesHistorier.name;

  
  render() {
    return (
      <div>
        <secText className="overskrift">Succes Historier</secText>
        <div className="topDiv">
          <secText className="introText">Der er mange seje kvinder i IT-branchen! Her kan du blive klogere på nogle af dem, og høre deres historier</secText>
          <img className="billede1" src={test1} alt=""/>
          <img className="billede2" src={test2} alt=""/>
          <img className="billede3" src={test3} alt=""/>
          <img className="billede4" src={test4} alt=""/>
          <img className="billede6" src={test6} alt=""/>
          <div className="billede7Div">
          <img className="billede7" src={GraceHopperImage} alt=""/>
           
            <div  className="skjultTextDiv">
              <div class="skjultTextOverskrift" >Grace Hopper</div>
              <div class="skjultText">Grace Hopper was born in 1906 and died in 1992, she was born in New York and attended Yale University in 1930 and eventually received a PH. D in mathematics.</div>
              </div>
           
          </div>

        </div>
        <div className="historieOrange">
          <h1 className="overskriftHøjre" id={'section1'}>Grace Hopper</h1>
          <div className="indhold">
            <p className="beskrivelseLys"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis convallis gravida nisl, sit amet rutrum turpis elementum tempus. Sed sodales diam vel molestie consequat. Phasellus vitae sollicitudin eros. Sed ut interdum urna. In tincidunt velit vel ornare venenatis. Etiam nec neque non orci consectetur posuere. Nam non suscipit nibh. Donec venenatis nunc sit amet nunc laoreet mattis. Integer commodo orci dolor, eu faucibus diam sagittis et.
            Vivamus congue lorem dui, sit amet tincidunt leo scelerisque sed. Nullam ac semper lorem. Integer vestibulum auctor dui, quis vestibulum nulla vehicula et. Cras ac lectus est. Fusce aliquam accumsan orci, et cursus dui accumsan quis. Donec aliquam quam sit amet arcu semper, quis luctus massa tincidunt. Curabitur sagittis dui quis arcu imperdiet efficitur. Etiam consequat quam a viverra sollicitudin. Cras sit amet elit tellus. Cras quam lacus, porttitor vitae bibendum id, congue nec magna. Fusce in ligula pellentesque, tempor augue ac, bibendum neque. Sed ut leo in libero pulvinar volutpat. Nulla nibh sem, auctor et condimentum non, ultrices id nibh.
            Aenean ultrices, urna nec dapibus cursus, nisl justo rutrum diam, non aliquet risus nisl rhoncus diam. Nunc sagittis efficitur luctus. Aliquam mi dui, egestas non vestibulum id, sollicitudin non magna. Duis nec dui vel arcu scelerisque posuere at euismod sem. Mauris nisl nunc, lacinia ac nulla at, facilisis pellentesque dolor. Aliquam erat volutpat. Proin a sem nunc.</p>
            <img className="billede" src={GraceHopperImage} alt=""/>
          </div>
        </div>
      
        <div className="historieLys">
          <h1 className="overskriftVenstre">Emilie Christensen</h1>
          <div className="indhold">
            <img className="billede" src={EmilieChristensen} alt=""/>
            <p className="beskrivelseMørk"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis convallis gravida nisl, sit amet rutrum turpis elementum tempus. Sed sodales diam vel molestie consequat. Phasellus vitae sollicitudin eros. Sed ut interdum urna. In tincidunt velit vel ornare venenatis. Etiam nec neque non orci consectetur posuere. Nam non suscipit nibh. Donec venenatis nunc sit amet nunc laoreet mattis. Integer commodo orci dolor, eu faucibus diam sagittis et.
            Vivamus congue lorem dui, sit amet tincidunt leo scelerisque sed. Nullam ac semper lorem. Integer vestibulum auctor dui, quis vestibulum nulla vehicula et. Cras ac lectus est. Fusce aliquam accumsan orci, et cursus dui accumsan quis. Donec aliquam quam sit amet arcu semper, quis luctus massa tincidunt. Curabitur sagittis dui quis arcu imperdiet efficitur. Etiam consequat quam a viverra sollicitudin. Cras sit amet elit tellus. Cras quam lacus, porttitor vitae bibendum id, congue nec magna. Fusce in ligula pellentesque, tempor augue ac, bibendum neque. Sed ut leo in libero pulvinar volutpat. Nulla nibh sem, auctor et condimentum non, ultrices id nibh.
            Aenean ultrices, urna nec dapibus cursus, nisl justo rutrum diam, non aliquet risus nisl rhoncus diam. Nunc sagittis efficitur luctus. Aliquam mi dui, egestas non vestibulum id, sollicitudin non magna. Duis nec dui vel arcu scelerisque posuere at euismod sem. Mauris nisl nunc, lacinia ac nulla at, facilisis pellentesque dolor. Aliquam erat volutpat. Proin a sem nunc.</p>
          </div>
        </div>

        <div className="historiePink">
          <h1 className="overskriftHøjre">Alberte Wærens</h1>
          <div className="indhold">
            <p className="beskrivelseLys"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis convallis gravida nisl, sit amet rutrum turpis elementum tempus. Sed sodales diam vel molestie consequat. Phasellus vitae sollicitudin eros. Sed ut interdum urna. In tincidunt velit vel ornare venenatis. Etiam nec neque non orci consectetur posuere. Nam non suscipit nibh. Donec venenatis nunc sit amet nunc laoreet mattis. Integer commodo orci dolor, eu faucibus diam sagittis et.
            Vivamus congue lorem dui, sit amet tincidunt leo scelerisque sed. Nullam ac semper lorem. Integer vestibulum auctor dui, quis vestibulum nulla vehicula et. Cras ac lectus est. Fusce aliquam accumsan orci, et cursus dui accumsan quis. Donec aliquam quam sit amet arcu semper, quis luctus massa tincidunt. Curabitur sagittis dui quis arcu imperdiet efficitur. Etiam consequat quam a viverra sollicitudin. Cras sit amet elit tellus. Cras quam lacus, porttitor vitae bibendum id, congue nec magna. Fusce in ligula pellentesque, tempor augue ac, bibendum neque. Sed ut leo in libero pulvinar volutpat. Nulla nibh sem, auctor et condimentum non, ultrices id nibh.
            Aenean ultrices, urna nec dapibus cursus, nisl justo rutrum diam, non aliquet risus nisl rhoncus diam. Nunc sagittis efficitur luctus. Aliquam mi dui, egestas non vestibulum id, sollicitudin non magna. Duis nec dui vel arcu scelerisque posuere at euismod sem. Mauris nisl nunc, lacinia ac nulla at, facilisis pellentesque dolor. Aliquam erat volutpat. Proin a sem nunc.</p>
            <img className="billede" src={AlberteWærens} alt=""/>
          </div>
        </div>

       
      </div>
    );
  }
}
