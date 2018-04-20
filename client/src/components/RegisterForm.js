import React, { Component } from 'react';
import Formsy from 'formsy-react';
import { RaisedButton, Paper } from 'material-ui';
import DefaultInput from './DefaultInput';

export class RegisterForm extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <Formsy.Form onSubmit = { this.props.onSubmit }>
        <Paper zDepth = { 1 } style = {{ padding: 32 }}>
          <h3>Registration Form</h3>
          <DefaultInput
            onChange = { (event) => {} }
            name = 'username'
            title = 'username'
            required
          />
          <DefaultInput
            onChange = { (event) => {} }
            name = 'firstName'
            title = 'First name'
            required
          />
          <DefaultInput
            onChange = { (event) => {} }
            name = 'lastName'
            title = 'Last name'
            required
          />
          <DefaultInput
            onChange = { (event) => {} }
            name = 'email'
            title = 'E-mail'
            required
          />
          <DefaultInput
            onChange = { (event) => {} }
            type = 'password'
            name = 'password'
            title = 'Password'
            required
          />
          <div style = {{ marginTop: 24 }}>
            <RaisedButton
              secondary = { true }
              type = "submit"
              style = {{ margin: '0 auto', display: 'block', width: 150 }}
              label = { 'Register' }
            />
          </div>
        </Paper>
      </Formsy.Form>
    );
  }
}
