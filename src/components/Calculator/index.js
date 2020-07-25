import React, {Component} from 'react';
import MyInputText from '../MyInputText';

import {ButtonCalculator} from './css'

class Calculator extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      valueOne: 0,
      valueTwo: 0,
      result: ""
    }

    this.onChange = this.onChange.bind(this);
    this.sum = this.sum.bind(this);


  }

  onChange(e){
    e.persist()
    this.setState({[e.target.name] : e.target.value})
    console.log(e.target.value)
  }

  sum(){
    let value1 = this.state.valueOne;
    let value2 = this.state.valueTwo;

    this.setState({result: parseFloat(value1) + parseFloat(value2)});
  }

  render(){
    return(
      <form> 
        <h3>{this.props.title}</h3>
        <MyInputText label="Valor 1" name="valueOne"
                      value={this.valueOne} onChange={this.onChange}/>
        <MyInputText label="Valor 2" name="valueTwo"
                      value={this.valueTwo} onChange={this.onChange}/>
       
        <ButtonCalculator type="button" onClick={this.sum}> Calcular </ButtonCalculator>
        <br/>
        { this.state.result !="" && <span> O resultado eh: {this.state.result}</span>}
      </form>
     
    );

  }
}

export default Calculator;

