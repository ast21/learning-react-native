import React, { Component } from 'react';
import { Text } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';
import firebase from 'firebase';
import config from './config';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp(config)
  }

  render() {
    console.log(config);
    return (
      <Provider store={createStore(reducers)}>
        <Header headerText="Manager" />
        <LoginForm />
      </Provider>
    );
  }
}

export default App;