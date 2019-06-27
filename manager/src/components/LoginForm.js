import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardSection, Button, Input } from "./common";
import { OnChangeEmail } from '../actions';

class LoginForm extends Component {
  onEmailChange = (text) => {

  };

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            placeholder="email@emample.com"
            onChangeText={() => this.onEmailChange()}
          />
        </CardSection>

        <CardSection>
          <Input
            secureTextEntry
            label="Password"
            placeholder="password"
          />
        </CardSection>

        <CardSection>
          <Button>Log in</Button>
        </CardSection>
      </Card>
    )

  }
}

const mapStateToProps = () => {
  return {

  }
};

export default connect()(LoginForm);