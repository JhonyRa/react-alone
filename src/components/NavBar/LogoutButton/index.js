import React from 'react';
import { Redirect } from "react-router-dom";
import {logout} from '../../../services/AuthenticationService';

import {OutButton} from './css'

class LogoutButton extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
        redirect : false
    }

    this.doLogout = this.doLogout.bind(this);
  }

  doLogout(){
    logout();
    this.setState({redirect : true});
  
  }  

  render() {
    return (     
        <OutButton type="button" onClick={this.doLogout} >
          Sair
          {this.state.redirect&&<Redirect to={{ pathname : '/login', state:{ from: this.props.location } }} />}
        </OutButton>
    );
  }
}

export default LogoutButton;
