import React, { Component } from 'react';
import SplitPane from 'react-split-pane';

import SourceComponent from './SourceComponent';
// import OutputComponent from './OutputComponent';
import OutputContainer from './OutputContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SplitPane split="vertical" defaultSize="50%">
          <SourceComponent/>
          <OutputContainer/>
        </SplitPane>
      </div>
    );
  }
}

export default App;
