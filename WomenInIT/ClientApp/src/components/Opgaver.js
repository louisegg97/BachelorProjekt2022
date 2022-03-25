import React, { Component } from 'react';
import './Opgaver.css';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import buttonImage from './images/lbbutton.png';
import './opgavesider/begynder1.js';


export class Opgaver extends Component {
    static displayName = Opgaver.name;
  
    componentDidMount() {
      window.scrollTo(0, 0);
    } 
    
    render() {
      return (
        <div>
            <div className="baggrundDiv">
            <div className="overskriftdiv" >
                <secText className="overskrift">Opgaver</secText>
            </div>
            <div className="intro">
            <secText  >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis convallis gravida nisl, sit amet rutrum turpis elementum tempus. Sed sodales diam vel molestie consequat. Phasellus vitae sollicitudin eros. Sed ut interdum urna. In tincidunt velit vel ornare venenatis. Etiam nec neque non orci consectetur posuere. Nam non suscipit nibh. Donec venenatis nunc sit amet nunc laoreet mattis. Integer commodo orci dolor, eu faucibus diam sagittis et.
            Vivamus congue lorem dui, sit amet tincidunt leo scelerisque sed. Nullam ac semper lorem. Integer vestibulum auctor dui, quis vestibulum nulla vehicula et. Cras ac lectus est. Fusce aliquam accumsan orci, et cursus dui accumsan quis. Donec aliquam quam sit amet arcu semper, quis luctus massa tincidunt. Curabitur sagittis dui quis arcu imperdiet efficitur. Etiam consequat quam a viverra sollicitudin. Cras sit amet elit tellus. Cras quam lacus, porttitor vitae bibendum id, congue nec magna. Fusce in ligula pellentesque, tempor augue ac, bibendum neque. Sed ut leo in libero pulvinar volutpat. Nulla nibh sem, auctor et condimentum non, ultrices id nibh.
            
            </secText>
            </div>
            </div>
                <div className="historieOrange">
          <h1 className="overskriftHøjre">For dig der er begynder</h1>
         
          <div class="grid-container">
                <div>Frontend</div>
                <div>Backend</div>
                <div>Database</div> 
                
            <NavLink tag={Link} className="nav-link" to="/opgavesider/begynder1">
                <img id="myimage" src={buttonImage} alt="ladybug"/>
            </NavLink>
            <NavItem className="nav-link" tag={Link} to="/opgavesider/begynder1">
                <img id="myimage" src={buttonImage} alt="ladybug"/>
            </NavItem>
            <NavItem tag={Link} to="/components/opgavesider/begynder1">
                <img id="myimage" src={buttonImage} alt="ladybug"/>
            </NavItem>
             
                
            </div>
         </div>

        <div className="historieLys">
          <h1 className="overskriftHøjre">For dig der er let øvet</h1>
          <div className="indhold">
          </div>
        </div>

        <div className="historiePink">
          <h1 className="overskriftHøjre">For dig der er let øvet</h1>
          <div className="indhold">
          </div>
        </div>

        </div>

           
      );
    }
}