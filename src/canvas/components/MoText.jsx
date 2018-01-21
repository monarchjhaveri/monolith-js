import React from 'react';

export default class MoText extends React.Component {
  render() {
    console.log(this.props);
    return (
      <span>{this.props.text}</span>
    )
  }
}