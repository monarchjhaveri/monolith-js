import * as React from 'react';
import { connect } from 'react-redux';
import { State } from '../model/State';
import { MoComponentDefinition } from '../model/MoComponentDefinition' 

interface StateProps {
  definition: MoComponentDefinition[]
}

const mapStateToProps = ({definition}: State): StateProps => {
  return {
    definition
  };
};

class Canvas extends React.Component<null, StateProps> {
  render() {
    return (
      <div className="canvasContainer">
        <iframe ref="iFrame" className="canvasIFrame" src="canvas.html" />
      </div>
    );
  }

  componentWillReceiveProps(nextProps) {
    console.log("PROPS!", nextProps);
    const iFrame = this.refs.iFrame as any;
   
    iFrame.contentWindow.postMessage({
      type: 'UPDATE_APP',
      payload: nextProps.definition
    }, '*');
  }
}

export const CanvasContainer = connect(mapStateToProps, null)(Canvas); 