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
            </div>
            <iframe src="https://trinket.io/embed/java/9a5a4b3e53?showInstructions=true" width="100%" height="356" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>
            </div>
      );
    }
}