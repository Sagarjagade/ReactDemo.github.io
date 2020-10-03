import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
//import CommonForm from "./Form/CommonForm";
//import IncrementTodo from "./Increment/mainForm";
//import App from './App';
//import Website from './Website';
//import Smallgames from './Smallgame';
//import HookeampleTime from './HookexampleTime';
//import Hookexample from './Hookexample';
//import MainAPI from './ContextAPI/MainAPI';
//import App from './UseContext/FormContext';
//import APITest from './UseEffecctHook/MainForm';

import MainFile from './Ecommerce/MainFile';
import {BrowserRouter} from 'react-router-dom';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <>
  <BrowserRouter>
    <MainFile/>
  </BrowserRouter>
  </>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
