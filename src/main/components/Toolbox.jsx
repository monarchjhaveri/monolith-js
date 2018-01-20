import React, { Component } from 'react';

class Toolbox extends Component {
  render() {
    return (
      <div className="toolbox">
        <h2>Toolbox</h2>
        <div className="toolboxBody">
          <div className="tool">
            <h3>Button</h3>
          </div>
          <div className="tool">
            <h3>Text</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default Toolbox;
