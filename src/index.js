import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';
import reducers from './store/googlemaps/reducers';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

// const createStoreWithMiddleware = applyMiddleware()(createStore);
let store = createStore(reducers, {}, applyMiddleware(thunk))

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>
    , document.getElementById('root'));
// registerServiceWorker();


//https://github.com/miguelsaddress/Contact-List-React-Redux