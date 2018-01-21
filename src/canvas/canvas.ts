import * as React from 'react';
import * as ReactDOM from 'react-dom';
import CanvasCore from './CanvasCore';
import './canvas.css';
import './components/components.css';

declare global {
  interface Window { CanvasCore: CanvasCore}
}

const core = window.CanvasCore = new CanvasCore(document.getElementById('root'));
core.init();

window.addEventListener("message", function({data}) {
  if (!data) return;

  switch(data.type) {
    case 'UPDATE_APP':
      core.updateApp(data.payload);
    default:
      null;
  }
})