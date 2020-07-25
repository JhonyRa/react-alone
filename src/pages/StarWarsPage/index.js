import React from 'react';
import NavBar from '../../components/NavBar'

import StarWarsPeople from '../../components/star-wars/StarWarsPeople'

import {StarWarsPageTitle} from './css'

function StarWarsPage(){
    return(
        <div>
            <NavBar></NavBar>
            <StarWarsPageTitle>Bem vindo ao lado negão da força</StarWarsPageTitle>

            <StarWarsPeople/>
            
        </div>
    );
}

export default StarWarsPage;