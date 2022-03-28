import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './begynder1.css'
import Collapsible from '../Collapsible.js';
import useOpgavesider from './Opgavesider.js';


export class Opgaveside extends Component {
    static displayName = Opgaveside.name;
    
    render() {
      const opgavesider = useOpgavesider();
      const opgaveside_id = this.props.match.params.id;

      return (
          <div>
              <div className="baggrundDiv">
              <div className="overskriftdiv" >
                <secText className="overskrift">{opgavesider[opgaveside_id].title}</secText>
            </div>
              <div className="opgBeskrivelse">
                <secText >{opgavesider[opgaveside_id].desc}</secText>
              </div>
              <div className="hints">
              <Collapsible  label="Hint 1">
                <p>{opgavesider[opgaveside_id].hint1}</p>
               </Collapsible>
               <Collapsible  label="Hint 2">
                <p>{opgavesider[opgaveside_id].hint2}</p>
               </Collapsible>
               <Collapsible  label="Hint 3">
                <p>{opgavesider[opgaveside_id].hint3}</p>
               </Collapsible>
               </div>
            </div>
              <iframe frameborder="0" width="100%" height="500px" src={opgavesider[opgaveside_id].src}></iframe>
            </div>
      );
    }
}