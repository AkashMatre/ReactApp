import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import './index.css';
//import './css/testing.css';
import './css/bootstrap.min.css';

//import App from './App';
//import LoginApp from './LoginApp.jsx';
import LoadComp from './LoadComponent.jsx'
import * as serviceWorker from './serviceWorker';
//import Test from './testing';

//import 'https://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css';
//import './css/bootstrap.min.css';
import './css/animate.min.css';
import './css/paper-dashboard.css';
import './css/demo.css';
import './css/themify-icons.css';




ReactDOM.render( <BrowserRouter><LoadComp /></BrowserRouter>,document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
