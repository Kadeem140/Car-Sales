import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux'
import { Provider } from 'react-redux';              //import Provider (HOC) to hook up the store to our APP
import { carReducer } from './reducers/carReducer' ; //import my reducer
 
import 'bulma/css/bulma.css';
import './styles.scss';

const reduxStore = createStore(carReducer); //throw my reducer into the store for access

const rootElement = document.getElementById('root');
ReactDOM.render(
    <Provider store={ reduxStore } >
        <App />
    </Provider>, rootElement);
    