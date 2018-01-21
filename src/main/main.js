import React from 'react';
import ReactDOM from 'react-dom';
import MainApp from './MainApp';
import MainCore from './MainCore';
import './main.css';

const core = window.MainCore = new MainCore();
ReactDOM.render(<MainApp />, document.getElementById('root'));

window.addEventListener("message", function({data}) {
  if (!data) return;

  switch(data.type) {
    case 'EDIT_COMPONENT':
      core.editComponent(data.payload);
    default:
      null;
  }
})