import React from 'react';

import {ValuesCalculator} from './css'

function MyInputText(props) {
  return (
    <ValuesCalculator>
      <label>{props.label}</label>
      <input type="text" name={props.name} value={props.value} onChange={props.onChange}  />
    </ValuesCalculator>

  );
}

export default MyInputText;
