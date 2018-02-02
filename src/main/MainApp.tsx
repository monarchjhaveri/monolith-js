import * as React from 'react';
import { ToolboxContainer } from './components/ToolboxContainer';
import { CanvasContainer } from './components/CanvasContainer';
import { connect } from 'react-redux';
import { State, StateUtils } from './model/State';

class MainAppComponent extends React.Component {
  render() {
    return (
      <div className="MainApp">
        <div className="leftPanel">
          <div className="leftPanelItem">
            <h1>Monolith</h1>
          </div>
          <div className="leftPanelItem">
            <ToolboxContainer />
          </div>
        </div>
        <div className="stage">
            <CanvasContainer />
        </div>
      </div>
    );
  }
}

const MainApp = connect(null, null)(MainAppComponent);

export default MainApp;
