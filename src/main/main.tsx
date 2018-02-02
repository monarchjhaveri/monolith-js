import * as React from 'react';
import * as ReactDOM from 'react-dom';
import MainApp from './MainApp';
import MainCore from './MainCore';
import { Store } from './store/Store';
import './main.css';
import { Provider } from 'react-redux';

declare global {
  interface Window { MainCore: MainCore}
}

// const core = window.MainCore = new MainCore();

ReactDOM.render(
  <Provider store={Store} >
    <MainApp />
  </Provider>,
  document.getElementById('root')
);

// window.addEventListener("message", function({data}) {
//   if (!data) return;

//   switch(data.type) {
//     case 'COMPONENT_CLICKED':
//       core.componentClicked(data.payload);
//     default:
//       null;
//   }
// });