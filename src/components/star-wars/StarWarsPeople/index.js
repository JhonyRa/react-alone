import React, { Component } from 'react';
import MyInputText from '../../../components/MyInputText';

import {Container, Row, Col, Button, FormControl, InputGroup, ListGroup} from 'react-bootstrap';

import {findById} from '../../../services/StarWarsService ' 

class StarWarsPeople extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            person: "",
            personId: ""
        }
    }

    submit = () => {

        findById(this.state.personId).then(res =>  res.json().then(
            res =>  this.setState({person : res})
        )).catch(err => {
          throw err;
        });

    }

    onChange = (e) => {
        e.persist()
        this.setState({ [e.target.name]: e.target.value })
    }

    render() {
        return (
        
        <Container fluid={true} > 
            <Row md={4}>
            <InputGroup className="mb-3">
                <InputGroup.Prepend>
                    <InputGroup.Text >Id do Personagem</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl label="Número do Personagem" name="personId" value={this.personId} onChange={this.onChange}/>

                <Button type="button" onClick={this.submit}> Buscar </Button>
            </InputGroup>
            </Row>
            <Row>
                <ListGroup>
                    <ListGroup.Item>Nome: {this.state.person.name}</ListGroup.Item>
                    <ListGroup.Item>Altura: {this.state.person.height}</ListGroup.Item>
                    <ListGroup.Item>Massa: {this.state.person.mass}</ListGroup.Item>
                    <ListGroup.Item>Genero: {this.state.person.gender}</ListGroup.Item>
                </ListGroup>                
            </Row>
                    
        </Container>

        );
    }
}

export default StarWarsPeople;
