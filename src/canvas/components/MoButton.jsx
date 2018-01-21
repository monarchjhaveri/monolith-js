import React from 'react';

export default class MoButton extends React.Component {
  render() {
    return (
      <div className="moButton">{this.props.text}</div>
    )
  }
}