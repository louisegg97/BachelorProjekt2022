import React, { Component } from 'react';
import { Link } from 'react-router-dom';



export class Begynder1 extends Component {
    static displayName = Begynder1.name;
  
    
    render() {
      return (
          <div>
              <div className="baggrundDiv">
              <div className="overskriftdiv" >
                <secText className="overskrift">Begynder, Opgave 1: Hello world!</secText>
            </div>
              <div className="opgaveBeskrivelse">
                <secText >Den første opgave alle spirende programmøre møde er Hello World!. En opgave der helt simpelt går ud på at få din computer til at udskrive, Hello World. Da dette er er den første opgave så har vi allerede startet klassen op for dig, men hvis du har brug for lidt mere hjælp end det så tryk på et hint nedenfor:</secText>
              </div>
   
            </div>
            <iframe frameborder="0" width="100%" height="500px" src="https://replit.com/@AlberteWaerens/HelloWorld?lite=true"></iframe>
            </div>
      );
    }
}