import React, { Component } from 'react';

class CanvasContainer extends Component {

  render() {
    return (
      <div className="canvasContainer">
        <iframe ref="iFrame" className="canvasIFrame" src="canvas.html" />
      </div>
    );
  }

  componentDidMount() {
    this.retargetCore();
  }

  componentDidUpdate() {
    this.retargetCore();
  }

  retargetCore() {
    window.MainCore.retarget(this.refs.iFrame);
  }
}

export default CanvasContainer;
