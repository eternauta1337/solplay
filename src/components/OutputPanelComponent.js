import React, { Component} from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import AstOutputComponent from './output/AstOutputComponent';
import AsmOutputComponent from './output/AsmOutputComponent';
import BinOutputComponent from './output/BinOutputComponent';
import AbiOutputComponent from './output/AbiOutputComponent';
import OpcodesOutputComponent from './output/OpcodesOutputComponent';

class OutputPanelComponent extends Component {
  render() {
    return(
      <div>
        <Tabs>

          {/* TAB HEADERS */}
          <TabList>
            <Tab>AST</Tab>
            <Tab>Assembly</Tab>
            <Tab>Binaries</Tab>
            <Tab>ABI</Tab>
            <Tab>Opcodes</Tab>
          </TabList>

          {/* TAB CONTENTS */}
          <TabPanel><AstOutputComponent/></TabPanel>
          <TabPanel><AsmOutputComponent/></TabPanel>
          <TabPanel><BinOutputComponent/></TabPanel>
          <TabPanel><AbiOutputComponent/></TabPanel>
          <TabPanel><OpcodesOutputComponent/></TabPanel>

        </Tabs>
      </div>
    );
  }
}

export default OutputPanelComponent;
