import React from 'react';
import Editable from './Editable';

export default class MoText extends React.Component {
  render() {
    return (
      <Editable moId={this.props.moId}>
        <span className="moText">
          {this.props.text}
        </span>
      </Editable>
    )
  }
}