import React, { Component } from 'react';

class Toolbox extends Component {
  render() {
    return (
      <div className="toolbox">
        <h2>Toolbox</h2>
        <div className="toolboxBody">
          <div className="tool" onClick={() => addComponent('button', 'A new button')}>
            <h3>Button</h3>
          </div>
          <div className="tool" onClick={() => addComponent('text', 'Some new text')}>
            <h3>Text</h3>
          </div>
        </div>
      </div>
    );
  }
}

function addComponent(type, defaultText) {
  window.MainCore.addComponent({type: type, properties: { text: window.prompt("Enter text", defaultText) }})
}

export default Toolbox;
