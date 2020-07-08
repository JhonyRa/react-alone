import React from 'react';
import NavBar from '../../components/NavBar'
import './index.css';

function StarWarsPage(){
    return(
        <div>
            <NavBar></NavBar>
            <h2 className="star-wars-page-title">Bem vindo ao lado negão da força</h2>
        </div>
    );
}

export default StarWarsPage;