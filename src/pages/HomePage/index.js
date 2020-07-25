import React from 'react';
import NavBar from '../../components/NavBar'

import {HomePageTitle} from './css'

function HomePage(){
    return(
        <div>
            <NavBar></NavBar>
            <HomePageTitle>Bem vindo a JhonyRa Site</HomePageTitle>

        </div>
    );
}

export default HomePage;