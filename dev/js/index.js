import 'babel-polyfill';
import React from 'react';
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import createLogger from 'redux-logger';
import allReducers from './reducers';
import App from './components/App';
import rootSaga from './sagas';

const logger = createLogger();
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    allReducers,
    // applyMiddleware(thunk, promise, logger)
    applyMiddleware(sagaMiddleware)
    // runSaga: sagaMiddleware.run(rootSaga)
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);


// https://github.com/scotch-io/react-redux-media-library/blob/master/package.json

// REST api - https://jsonplaceholder.typicode.com/users
