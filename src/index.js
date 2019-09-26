import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
// eslint-disable-next-line import/no-extraneous-dependencies
import { composeWithDevTools } from 'redux-devtools-extension';
import { BrowserRouter } from 'react-router-dom';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import App from './App';
import Store from './store';
import './assets/scss/main.scss';

let store = null;
// eslint-disable-next-line no-undef
if (NODE_ENV === 'development') {
  store = createStore(Store, composeWithDevTools(applyMiddleware(thunk)));
} else {
  store = createStore(Store, applyMiddleware(thunk));
}

const container = document.getElementById('app');
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  container
);
