import React, { Component } from 'react';

class CanvasContainer extends Component {
  render() {
    return (
      <div className="canvasContainer">
        <iframe className="canvasIFrame" src="canvas.html" />
      </div>
    );
  }
}

export default CanvasContainer;
