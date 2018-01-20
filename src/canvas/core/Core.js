import React from 'react';
import ReactDOM from 'react-dom';
import CanvasApp from '../CanvasApp';
import MoSpan from '../components/MoSpan';
import MoButton from '../components/MoButton';

export default class Core {
  constructor(rootElement) {
    this.rootElement = rootElement;
    this.data = [
      {
        type: 'button',
        properties: {
          text: 'Hello World!'
        }
      },
      {
        type: 'span',
        properties: {
          text: 'Hello World!'
        }
      }
    ];
  }

  buildComponentTree() {
    return this.data.map(itemMapper);
  }

  init() {
    const canvas = (
      <CanvasApp>
        {this.buildComponentTree()}
      </CanvasApp>
    );
    
    ReactDOM.render(canvas, this.rootElement);
  }
}

function itemMapper(item, index) {
  switch(item.type) {
    case 'button':
      return (<MoButton key={index} properties={item.properties}/>);
    case 'span':
      return (<MoSpan key={index} properties={item.properties}/>);
    default:
      console.error("Unknown item in itemMapper", item);
      return null;
  }
}