import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Footer.css"


export class Footer extends Component {
    static displayName = Footer.name;
  
      render()
      {
        return (
            <div className="outerDiv">
              <div className="venstreDiv"> 
                <p className="footerOverskrift">Tilmed dig vores nyhedbrev</p>
            </div>

            <div className="højreDiv">
            <p className="footerOverskrift">Genveje</p>
            <p className="footerGenveje">Om Programmering</p>
            <p className="footerGenveje">Jobmuligheder</p>
            <p className="footerGenveje">Succeshistorier</p>
            <p className="footerGenveje">Hvem er vi</p>
            </div>
          </div>

        )
    }
}
export default Footer;