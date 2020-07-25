import React from 'react';
import {Link} from "react-router-dom";
import LogoutButton from './LogoutButton';
import {getLoggedUser} from '../../services/AuthenticationService';
import Navbar from 'react-bootstrap/Navbar'
import {logout} from '../../services/AuthenticationService';
import {Nav, Form, Button, FormControl, DropdownButton, Dropdown} from 'react-bootstrap';

import Logo from "../../img/home.png";
import UrlPerfil from "../../img/jhonyra.png";
import {Header} from './css';
import {Bottons} from './css';
import {Img} from './css';
import {ImgPerfil} from './css';


class NavBar extends React.Component {

  constructor(props){
    super(props);
    this.state = { 
      logged : true,
      redirect : false
    }

    this.onChange = this.onChange.bind(this);
    this.doLogout = this.doLogout.bind(this);

  }
  onChange(){
    localStorage.clear();
    this.setState({logged:false});
  }

  doLogout(){
    logout();
    this.setState({redirect : true});
  
  }  

  render() {
    return (
      <Header >
        <Navbar bg="mediumpurple" variant="dark">
            <Navbar.Brand href="/" ><Img src={Logo}/></Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="/calculator">Calculadora</Nav.Link>
              <Nav.Link href="/star-wars">StarWars</Nav.Link>
            </Nav>
            
            <div className="mr-sm-2">
              <Nav >
                <Nav.Link href="/"><ImgPerfil src={UrlPerfil} /></Nav.Link>
              
              <DropdownButton id="dropdown-basic-button" title={getLoggedUser().name}>
                
                <Dropdown.Item href="/login" onClick={this.doLogout}>Sair</Dropdown.Item>
                
              </DropdownButton>
              </Nav>
            </div>
        </Navbar>
      </Header>
    );
  }
}

export default NavBar;