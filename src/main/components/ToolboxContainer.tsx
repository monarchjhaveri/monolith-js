import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { State } from '../model/State';
import { MoComponentDefinition } from "../model/MoComponentDefinition";
import { addComponent } from "../dispatchers/componentDefinition";
import { MoButtonDef } from "../model/MoButtonDef";
import { MoTextDef } from "../model/MoTextDef";
import { Action } from '../model/Action';

interface DispatchProps {
  addComponent: (definition: MoComponentDefinition) => Action<MoComponentDefinition>
}

const mapDispatchToProps = (dispatch: Dispatch<State>) => ({
  addComponent: (definition:MoComponentDefinition) => dispatch(addComponent(definition))
});

class Toolbox extends React.Component<DispatchProps, null> {
  render() {
    return (
      <div className="toolbox">
        <h2>Toolbox</h2>
        <div className="toolboxBody">
          <div className="tool" onClick={() => {
            const text = window.prompt("Enter Text", "A new button");
            const def = { type: 'button', properties: {text} }
            this.props.addComponent(def);
          }}>
            <h3>Button</h3>
          </div>

          <div className="tool" onClick={() => {
            const text = window.prompt("Enter Text", "Text goes here");
            const def = { type: 'text', properties: {text} };
            this.props.addComponent(def);
          }}>
            <h3>Text</h3>
          </div>
        </div>
      </div>
    );
  }
}

export const ToolboxContainer = connect(null, mapDispatchToProps)(Toolbox);
