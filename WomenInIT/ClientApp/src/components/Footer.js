import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import "./Footer.css"
import { FaInstagramSquare } from 'react-icons/fa';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaYoutubeSquare } from 'react-icons/fa';



export class Footer extends Component {
    static displayName = Footer.name;
  
      render()
      {
        return (
            <div className="outerDiv">
              <div className="venstreDiv"> 
                <p className="footerOverskrift">Tilmed dig vores nyhedbrev</p>
                <div className='form'>
                    <form>
                      <label className='formLabel'>email:</label>
                        <input
                          type="text"
                          id="email"
                          name="email"
                          required
                        />
                    </form>
                </div>
                <Link to="/Frontend" className="Tilmeld_knap">Tilmeld</Link>
                <div className='ikoner'>
                  <FaInstagramSquare size="2em" className='ikon'/>
                  <FaFacebookSquare size="2em" className='ikon'/>
                  <FaLinkedin size="2em" className='ikon'/>
                  <FaYoutubeSquare size="2em" className='ikon'/>
                </div>
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
            <Link to="/Opgaver" className="footerGenveje">Opgaver</Link>
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