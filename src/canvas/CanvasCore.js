import React from 'react';
import ReactDOM from 'react-dom';
import CanvasApp from './CanvasApp';
import MoText from './components/MoText';
import MoButton from './components/MoButton';

export default class CanvasCore {
  constructor(rootElement) {
    this.rootElement = rootElement;
    this.definition = [];
  }

  init() {
    this.draw();
  }

  updateApp(definition) {
    this.definition = definition;
    this.draw();
  }

  componentClicked(moId) {
    window.top.postMessage({
      type: 'COMPONENT_CLICKED',
      payload: { moId }
    }, '*');
  }

  draw() {
    ReactDOM.render(buildComponentTree(this.definition), this.rootElement);
  }

  getDefinition() {
    return this.definition;
  }
}

function itemMapper(item, index) {
  switch(item.type) {
    case 'button':
      return (<MoButton key={item.moId} moId={item.moId} text={item.properties.text}/>);
    case 'text':
      return (<MoText key={item.moId} moId={item.moId} text={item.properties.text}/>);
    default:
      console.error("Unknown item in itemMapper", item);
      return null;
  }
}

function buildComponentTree(definition) {
  const componentTree = definition.map(itemMapper);
  return (<CanvasApp>
    {componentTree}
  </CanvasApp>);
}