import React, { Component } from 'react';
import SplitPane from 'react-split-pane';

import SolidityComponent from './SolidityComponent';
import CompiledComponent from './CompiledComponent';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SplitPane split="vertical" defaultSize="50%">
          <SolidityComponent/>
          <CompiledComponent/>
        </SplitPane>
      </div>
    );
  }
}

export default App;
