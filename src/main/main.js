import React from 'react';
import ReactDOM from 'react-dom';
import MainApp from './MainApp';
import MainCore from './MainCore';
import './main.css';


window.MainCore = new MainCore();
ReactDOM.render(<MainApp />, document.getElementById('root'));



