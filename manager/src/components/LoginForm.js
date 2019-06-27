import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardSection, Button, Input } from "./common";
import { emailChanged, passwordChanged } from '../actions';

class LoginForm extends Component {
  onEmailChange = text => {
    console.log(text);
    this.props.emailChanged(text);
  };

  onPasswordChange = text => {
    console.log(text);
    this.props.passwordChanged(text);
  };

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            placeholder="email@emample.com"
            onChangeText={text => this.onEmailChange(text)}
            value={this.props.email}
          />
        </CardSection>

        <CardSection>
          <Input
            secureTextEntry
            label="Password"
            placeholder="password"
            onChangeText={text => this.onPasswordChange(text)}
            value={this.props.password}
          />
        </CardSection>

        <CardSection>
          <Button>Log in</Button>
        </CardSection>
      </Card>
    )

  }
}

const mapStateToProps = state => {
  return {
    email: state.auth.email,
    password: state.auth.password
  }
};

export default connect(
  mapStateToProps,
  { emailChanged, passwordChanged }
)(LoginForm);