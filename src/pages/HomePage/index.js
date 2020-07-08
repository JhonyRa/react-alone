import React from 'react';
import {Link} from "react-router-dom";
import NavBar from '../../components/NavBar'
import './index.css';

function HomePage(){
    return(
        <div>
            <NavBar></NavBar>
            <h2 className="home-page-title">Bem vindo a JhonyRa Site</h2>

        </div>

        

        
    );
}

export default HomePage;