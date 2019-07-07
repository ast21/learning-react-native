import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../actions';
import { Card, CardSection, Input, Button, Spinner } from './common';

class LoginForm extends Component {
  onEmailChange = text => {
    this.props.emailChanged(text);
  };

  onPasswordChange = text => {
    this.props.passwordChanged(text);
  };

  onButtonPress = () => {
    const { email, password } = this.props;
    console.log(email, password);
    this.props.loginUser(email, password);
  };

  renderError() {
    return (
      <Text style={{ fontSize: 18, color: 'red', textAlign: 'center' }}>
        {this.props.error}
      </Text>
    )
  }

  renderButton() {
    const { user, loading } = this.props;
    return loading ? <Spinner /> :
      <Button onPress={() => this.onButtonPress()}>
        {user ? "Welcome!" : "Log in"}
      </Button>
  }

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

        {this.renderError()}

        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    )

  }
}

const mapStateToProps = ({ auth }) => {
  const { email, password, error, loading, user } = auth;
  return { email, password, error, loading, user }
};

export default connect(
  mapStateToProps,
  { emailChanged, passwordChanged, loginUser }
)(LoginForm);