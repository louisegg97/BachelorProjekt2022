import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Opgaveside.css'
import Collapsible from '../Collapsible.js';
import useOpgavesider from './Opgavesider.js';


export class Opgaveside extends Component {
    static displayName = Opgaveside.name;
    
    render() {
      const opgavesider = useOpgavesider();
      const opgaveside_id = this.props.match.params.id;

      return (
          <div>
              
              <div className="overskriftdiv" >
                <p className="overskriftopg">{opgavesider[opgaveside_id].title}</p>
                <p className="opgTekst">{opgavesider[opgaveside_id].desc}</p>

              <div className="hints">
              <Collapsible  label="Hint 1">
                <p>{opgavesider[opgaveside_id].hint1}</p>
                <img className="hintBillede" src={opgavesider[opgaveside_id].img1}></img>
               </Collapsible>
               <Collapsible  label="Hint 2">
                <p>{opgavesider[opgaveside_id].hint2}</p>
                <img className="hintBillede" src={opgavesider[opgaveside_id].img2}></img>
               </Collapsible>
               <Collapsible  label="Hint 3">
                <p>{opgavesider[opgaveside_id].hint3}</p>
                <img className="hintBillede" src={opgavesider[opgaveside_id].img3}></img>
               </Collapsible>
               </div>
               </div>
              <iframe id="replitlink" src={opgavesider[opgaveside_id].src}></iframe>
              
            </div>
      );
    }
}