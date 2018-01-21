import React from 'react';

export default class Editable extends React.Component {
  render() {
    return (
      <span className="editable" onClick={() => componentClicked(this.props.moId)}>
        {this.props.children}
      </span>
    )
  }
}

function componentClicked(moId) {
  window.CanvasCore.componentClicked(moId);
}