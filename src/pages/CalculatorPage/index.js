import React from 'react';
import NavBar from '../../components/NavBar'
import './index.css';
import Calculator from '../../components/Calculator'

function CalculatorPage(){
    return(
        <div>
            <NavBar></NavBar>
            <h2 className="calculator-page-title">Bem vindo a Calculadora</h2>
            <Calculator></Calculator>
        </div>
    );
}

export default CalculatorPage;