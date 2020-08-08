import React from 'react';
import ReactDOM from 'react-dom';
// import PrimeraApp from './PrimeraApp';
import CounterApp from './CounterApp';
import './index.css';

const divRoot = document.querySelector('#root');

// ReactDOM.render( <PrimeraApp saludo='Mi Primera App' />, divRoot );
ReactDOM.render( <CounterApp cuenta={12}/>, divRoot );