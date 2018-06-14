import React, { Component} from 'react';
import SplitPane from 'react-split-pane';
import OutputComponent from './OutputComponent';

class OutputPanelComponent extends Component {

  render() {
    return(
      <div>
        <SplitPane split="horizontal" defaultSize="50%">
          <OutputComponent target='A' defaultCompilationOptions='--ast'/>
          <OutputComponent target='B' defaultCompilationOptions='--bin'/>
        </SplitPane>
      </div>
    );
  }
}

export default OutputPanelComponent;
