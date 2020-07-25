import React from 'react';
import NavBar from '../../components/NavBar'
import Calculator from '../../components/Calculator'

import {CalculatorPageTitle} from './css'

function CalculatorPage(){
    return(
        <div>
            <NavBar></NavBar>
            <CalculatorPageTitle>Bem vindo a Calculadora</CalculatorPageTitle>
            <Calculator></Calculator>
        </div>
    );
}

export default CalculatorPage;