import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import reactMDL from 'react-mdl';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import {BrowserRouter as Router} from 'react-router-dom';


ReactDOM.render  (<App /> , document.getElementById('root'));
registerServiceWorker();

// ReactDOM.render(

//     <App />

// , document.querySelector('#container'));
// registerServiceWorker();
