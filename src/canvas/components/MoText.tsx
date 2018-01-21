import * as React from 'react';
import { Editable, EditableProps } from './Editable';

interface MoTextProps extends EditableProps {
  text: string
}

export default class MoText extends React.Component<MoTextProps> {
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