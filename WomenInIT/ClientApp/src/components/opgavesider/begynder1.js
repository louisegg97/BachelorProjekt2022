import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './begynder1.css'
import Collapsible from '../Collapsible.js';


export class Begynder1 extends Component {
    static displayName = Begynder1.name;
  
    
    render() {
      return (
          <div>
              <div className="baggrundDiv">
              <div className="overskriftdiv" >
                <secText className="overskrift">Begynder, Opgave 1: Hello World!</secText>
            </div>
              <div className="opgBeskrivelse">
                <secText >Den første opgave alle spirende programmøre møde er Hello World!. 
                  En opgave der helt simpelt går ud på at få din computer til at udskrive, Hello World!. 
                  Da dette er er den første opgave så har vi allerede startet klassen op for dig, 
                  men hvis du har brug for lidt mere hjælp end det så tryk på et hint nedenfor: 
                  ...skal måske være noget forklaring eller link til om programmering siden</secText>
              </div>
              <div className="hints">
              <Collapsible  label="Hint 1">
                <p>I denne opgave skal du bruge en kommando der printer en linje ud, også kaldet en string.</p>
               </Collapsible>
               <Collapsible  label="Hint 2">
                <p>Når man printer Strings ud skal der "" rundt om dem </p>
               </Collapsible>
               <Collapsible  label="Hint 3">
                <p>Kommandoen til at printe hvilket som helst ud i terminalen hedder System.out.println()</p>
               </Collapsible>
               </div>
            </div>
              <iframe frameborder="0" width="100%" height="500px" src="https://replit.com/@AlberteWaerens/HelloWorld?lite=true"></iframe>
            </div>
      );
    }
}