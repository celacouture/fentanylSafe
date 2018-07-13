import React, {Component} from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, Container, Row, Col, Popover, PopoverBody } from 'reactstrap';
import './LoginView.css';
import {Link} from 'react-router-dom'


class LogInView extends Component{


  render(){
  return (
  <div>
    <Container>
    <Form onSubmit={(event) => this.authWithEmailPassword(event)}
          ref={(form) => { this.loginForm = form }}>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="enter email" ref={(input) => {this.emailInput = input}}/>
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input type="password" name="password" id="examplePassword" placeholder="password" ref={(input) => {this.passwordInput = input}}/>
        </FormGroup>
        <Button><Link to="/AdminForm" className='adminbtn'>Go to Admin Home Page</Link></Button>
    </Form>

    <Row>
      <Col size="md-2">
        <Link to="/UserHome">← Back</Link>
      </Col>
    </Row>
  </Container>
  </div>
  )
  }
}

export default LogInView;
