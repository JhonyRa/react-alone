import React from 'react';
import './index.css';

import { Redirect } from "react-router-dom";
import {authenticate} from '../../services/AuthenticationService';
import InputTextValidate from '../../components/InputTextValidate';

import {Container, Button, Form} from 'react-bootstrap';

class LoginPage extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            username : '',
            password : '',
            logged : false,
            isAppearUsername : false,
            isAppearPassword : false,
            textValidateUsername: '',
            textValidatePassword: ''
        }
    
        this.onChange = this.onChange.bind(this);
        this.doLogin = this.doLogin.bind(this);
    
      }

      onChange(e){
        e.persist()
        this.setState({ [e.target.name] :  e.target.value})
      }

      doLogin(){

        if(!this.state.username || !this.state.username === '' ){
          this.setState({textValidateUsername: "E necessario preencher o campo usuario",
             isAppearUsername: true});
          return;
        }
        if(!this.state.password || !this.state.password === '' ){
          this.setState({textValidatePassword: "E necessario preencher o campo senha",
             isAppearPassword: true});  
          return;
        }
    
        let result = authenticate(
          {
            username : this.state.username,
            password : this.state.password
          }
        )
    
        if(result){
          this.setState({logged:true});
        } else {
          this.setState({textValidatePassword: "Usuario ou senha incorreto",
             isAppearPassword: true});
        }
      }
    

      
    render() {
    return(
        <div>
          <Container>
            <Form>
              <h1>Login</h1> 
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Username ou E-mail</Form.Label>
                <Form.Control id="nome_login" name="username" onChange={this.onChange}  value={this.state.username} type="text" placeholder="example@example.com" />
                <Form.Text className="text-muted" isAppear = {this.state.isAppearUsername} text={this.state.textValidateUsername}></Form.Text>
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control id="email_login" name="password" value={this.state.password} onChange={this.onChange} type="password" placeholder="senha"  />
              </Form.Group>
              <Form.Text isAppear = {this.state.isAppearPassword} text={this.state.textValidatePassword}></Form.Text>
              <Button variant="primary" type="submit" onClick={this.doLogin}>
                Login
              </Button>

              {this.state.logged&&<Redirect to={{ pathname : '/', state:{ from: this.props.location } }} />}

            </Form>
          </Container>
        </div>
    );
    
}
}

export default LoginPage;