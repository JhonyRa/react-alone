import React from 'react';

function InputTextValidate(props) {
  return (
    <div className = "required">
        {props.isAppear != "" && <span style={{color:'pink'}}>{props.text}</span>}
    </div>
  );
}

export default InputTextValidate;

