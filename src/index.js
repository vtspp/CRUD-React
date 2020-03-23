import React from 'react';
import ReactDOM from 'react-dom';
import './components/main/index.css';
import App from './components/main/App';
//import registerServiceWorker from './components/main/registerServiceWorker';
import * as serviceWorker from './components/main/serviceWorker';
import {BrowserRouter} from 'react-router-dom'


ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
//registerServiceWorker();



