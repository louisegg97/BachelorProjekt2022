import React, { Component } from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import M3 from './images/Opgaveknapper/M3.png'
import MOW from './images/Opgaveknapper/MOW.png'
import MWP from './images/Opgaveknapper/MWP.png'

const Opgavenr = () => {

    return(
    <div class="grid-container">
        <div>Frontend</div>
        <div>Backend</div>
        <div>Database</div> 
        
        <NavLink tag={Link} className="nav-link" to="/opgavesider/begynder1">
        <img id="myimage" src={M3} alt="ladybug"/>
    </NavLink>
    <NavItem className="nav-link" tag={Link} to="/opgavesider/begynder1">
        <img id="myimage" src={M3} alt="ladybug"/>
    </NavItem>
    <NavItem tag={Link} to="/components/opgavesider/begynder1">
        <img id="myimage" src={M3} alt="ladybug"/>
    </NavItem>
    <NavLink tag={Link} className="nav-link" to="/opgavesider/begynder1">
        <img id="myimage" src={MOW} alt="ladybug"/>
    </NavLink>
    <NavItem className="nav-link" tag={Link} to="/opgavesider/begynder1">
        <img id="myimage" src={MOW} alt="ladybug"/>
    </NavItem>
    <NavItem tag={Link} to="/components/opgavesider/begynder1">
        <img id="myimage" src={MOW} alt="ladybug"/>
    </NavItem>
    <NavLink tag={Link} className="nav-link" to="/opgavesider/begynder1">
        <img id="myimage" src={MWP} alt="ladybug"/>
    </NavLink>
    <NavItem className="nav-link" tag={Link} to="/opgavesider/begynder1">
        <img id="myimage" src={MWP} alt="ladybug"/>
    </NavItem>
    <NavItem tag={Link} to="/components/opgavesider/begynder1">
        <img id="myimage" src={MWP} alt="ladybug"/>
    </NavItem>
      
    </div>
    );
}

export default Opgavenr;