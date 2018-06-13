import React, { Component} from 'react';
import { connect } from 'react-redux';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

class OutputComponent extends Component {
  render() {
    return(
      <div>
        <Tabs>

          {/* TAB HEADERS */}
          <TabList>
            <Tab>AST</Tab>
            <Tab>ASM</Tab>
            <Tab>OPCODES</Tab>
            <Tab>BIN</Tab>
            <Tab>BIN-RUNTIME</Tab>
            <Tab>ABI</Tab>
          </TabList>

          {/* TAB CONTENTS */}
          <TabPanel>AST output</TabPanel>
          <TabPanel>ASM output</TabPanel>
          <TabPanel>OPCODES output</TabPanel>
          <TabPanel>BIN output</TabPanel>
          <TabPanel>BIN-RUNTIME output</TabPanel>
          <TabPanel>ABI output</TabPanel>

        </Tabs>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
  };
}

export default connect(mapStateToProps)(OutputComponent);
