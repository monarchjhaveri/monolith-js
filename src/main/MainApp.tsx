import * as React from 'react';
import Toolbox from './components/Toolbox';
import CanvasContainer from './components/CanvasContainer';

class MainApp extends React.Component {
  render() {
    return (
      <div className="MainApp">
        <div className="leftPanel">
          <div className="leftPanelItem">
            <h1>Monolith</h1>
          </div>
          <div className="leftPanelItem">
            <Toolbox />
          </div>
        </div>
        <div className="stage">
            <CanvasContainer />
        </div>
      </div>
    );
  }
}

export default MainApp;
