import React from 'react';
import Editable from './Editable';

export default class MoButton extends React.Component {
  render() {
    return (
      <Editable moId={this.props.moId}>
        <div className="moButton">
          {this.props.text}
        </div>
      </Editable>
    )
  }
}