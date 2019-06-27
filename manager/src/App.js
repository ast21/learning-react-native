import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import config from './config';
import reducers from './reducers';
import LoginForm from './components/LoginForm';
import { Header } from './components/common';

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