import React from 'react';
import './index.css';
import {Link} from "react-router-dom";
import Logo from "../../img/home.png"


function NavBar () {
  return (
    <header className="nav-bar" >
      
        <Link to="/"><img src={Logo}/></Link>
        <Link to="/calculator"><span className="botton">Calculadora</span></Link>
        <Link to="/star-wars"><span className="botton">StarWars</span></Link>
    
    </header>
  );
}

export default NavBar;