import React, {Component} from 'react';
import {connect} from 'react-redux';
import Store from '../store'
import SourceActions from '../actions/SourceActions';
import CodeComponent from './presentation/CodeComponent';

const defaultSource = 
`pragma solidity ^0.4.21;

contract Sample {
  
  address public owner;

  constructor() public {
    owner = msg.sender;
  }
}`

class SourcePanelComponent extends Component {

  constructor(props) {
    super(props);

    this.state = {
      source: defaultSource
    };

    this.updateSource = this.updateSource.bind(this);
  }

  componentDidMount() {
    Store.dispatch(SourceActions.sourceUpdated(this.state.source));
  }

  updateSource(evt) {

    const source = evt.target.value;
    this.setState({
      source
    });

    Store.dispatch(SourceActions.sourceUpdated(source));
  }

  render() {
    return (
      <div>
        <CodeComponent 
          updateSource={this.updateSource}
          content={this.state.source}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps)(SourcePanelComponent);
