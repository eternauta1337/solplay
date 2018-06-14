import React, { Component } from 'react';
import SplitPane from 'react-split-pane';

import SourcePanelComponent from './SourcePanelComponent';
import OutputPanelComponent from './OutputPanelComponent';

class App extends Component {
  render() {
    return (
      <div>
        <SplitPane split="vertical" defaultSize="25%">
          <SourcePanelComponent/>
          <OutputPanelComponent/>
        </SplitPane>
      </div>
    );
  }
}

export default App;
