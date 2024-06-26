import React, { Component } from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import './NavMenu.css';
import Logo from './images/Logo.png';



export class NavMenu extends Component {
  static displayName = NavMenu.name;

  constructor (props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar () {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render () {
    return (
      <header>
        <Navbar className="navbar-expand-sm navbar-toggleable-sm color-nav">
          <Container>
            <NavbarBrand tag={Link} to="/">
            <img src={Logo} alt="logo"/>
            </NavbarBrand>
            <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
            <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!this.state.collapsed} navbar>
              <ul className="navbar-nav flex-grow">
              <NavItem>
                  <NavLink tag={Link} activeStyle={{color: '#CF914C' }} className="nav-link" to="/omProgrammering">Om programmering</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} activeStyle={{color: '#CF914C' }} className="nav-link" to="/jobMuligheder">Jobmuligheder</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} activeStyle={{color: '#CF914C' }} className="nav-link" to="/succesHistorier">Succeshistorier</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} activeStyle={{color: '#CF914C' }} className="nav-link" to="/opgaver">Opgaver</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} activeStyle={{color: '#CF914C' }} className="nav-link" to="/omOs">Om os</NavLink>
                </NavItem>
              </ul>
            </Collapse>
          </Container>
        </Navbar>
      </header>
    );
  }
}
