import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';
import reducers from './store/googlemaps/reducers';
import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import thunk from 'redux-thunk';


import configureStore from './store/configureStore';


const store = configureStore()

// const createStoreWithMiddleware = applyMiddleware()(createStore);
// let store = createStore(reducers, {}, applyMiddleware(thunk, promiseMiddleware()))

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>
    , document.getElementById('root'));
// registerServiceWorker();


//https://github.com/miguelsaddress/Contact-List-React-Redux