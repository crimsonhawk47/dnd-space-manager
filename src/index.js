import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import {composeWithDevTools} from 'redux-devtools-extension'
import logger from 'redux-logger';

import rootReducer from './redux/reducers'; // imports ./redux/reducers/index.js
import rootSaga from './redux/sagas'; // imports ./redux/sagas/index.js

import App from './components/App/App';

const enableReduxLogger = false;

const sagaMiddleware = createSagaMiddleware();

// this line creates an array of all of redux middleware you want to use
// we don't want a whole ton of console logs in our production code
// logger will only be added to your project if your in development mode
let middlewareList = process.env.NODE_ENV === 'development' ?
  [sagaMiddleware, ] : 
  [sagaMiddleware];

if (enableReduxLogger){middlewareList = [...middlewareList, logger]} // Normally we'd just put logger in the middleWare List above, in development mode, but we want to test reduxdevtools for now. 



const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewareList)) 
  //ComposeWithDevtools is similar to the compose function. It's an enhancer that bundles up other enhancers. We can wrap it around our middlware. 
);

// tells the saga middleware to use the rootSaga
// rootSaga contains all of our other sagas
sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('react-root'),
);
