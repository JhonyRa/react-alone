import React from 'react';

function MyInputText(props) {
  return (
    <div>
      <label>{props.label}</label>
      <input type="text" name={props.name} value={props.value}
              onChange={props.onChange}
      />
    </div>
  );
}

export default MyInputText;

