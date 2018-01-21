import * as React from 'react';
import { Editable, EditableProps } from './Editable';

interface MoButtonProps extends EditableProps {
  text: string
}


export default class MoButton extends React.Component<MoButtonProps> {
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