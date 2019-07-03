import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import config from './config';
import reducers from './reducers';
import Router from './Router';
import { Header } from './components/common';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp(config)
  }

  render() {
    console.log(config);
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;