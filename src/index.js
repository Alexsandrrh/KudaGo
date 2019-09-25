import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { BrowserRouter } from 'react-router-dom';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import Store from './store';
import './assets/scss/main.scss';

let store = null;
if (NODE_ENV === 'development') {
  store = createStore(Store, composeWithDevTools(applyMiddleware(thunk)));
} else {
  store = createStore(Store, applyMiddleware(thunk));
}

// Init favorite
const dataFavorite = localStorage.getItem('favorite') || '{}';
store.dispatch({
  type: 'SET_DATA_FAVORITE',
  payload: JSON.parse(dataFavorite)
});

const container = document.getElementById('app');
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  container
);
