import * as React from 'react';

export interface EditableProps {
  moId: number
};

export class Editable extends React.Component<EditableProps> {
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