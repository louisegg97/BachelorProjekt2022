import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import "./Footer.css"
import FooterNyhedBrev from "./images/Footer/footerImage.png"


export class Footer extends Component {
    static displayName = Footer.name;
  
      render()
      {
        return (
            <div className="outerDiv">
              <div className="venstreDiv"> 
                <p className="footerOverskrift">Tilmed dig vores nyhedbrev</p>
                <img className="footerNyhedsBrev" src={FooterNyhedBrev}/>
            </div>

            <div className="højreDiv">
            <p className="footerOverskrift">Genveje</p>
            <p>
            <Link to="/OmProgrammering" className="footerGenveje">Om Programmering</Link>
            </p>
            <p>
            <Link to="/JobMuligheder" className="footerGenveje">Jobmuligheder</Link>
            </p>
            <p>
            <Link to="/SuccesHistorier" className="footerGenveje">Succeshistorier</Link>
            </p>
            <p>
            <Link to="/OmOs" className="footerGenveje">Hvem er vi</Link>
            </p>
            </div>
          </div>

        )
    }
}
export default Footer;