import React from 'react';

export default class Editable extends React.Component {
  render() {
    return (
      <span className="editable" onClick={() => editComponent(this.props.moId)}>
        {this.props.children}
      </span>
    )
  }
}

function editComponent(moId) {
  window.CanvasCore.editComponent(moId);
}