import React, {Component} from 'react';
import {connect} from 'react-redux';
import Store from '../store'
import SolidityActions from '../actions/SolidityActions';

const defaultSource = 
`pragma solidity ^0.4.21;

contract Sample {
  
  address public owner;

  constructor() public {
    owner = msg.sender;
  }
}`

class Solidity extends Component {

  constructor(props) {
    super(props);
    this.state = {
      source: defaultSource
    }
  }

  updateSource(evt) {

    this.setState({
      source: evt.target.value
    });

    Store.dispatch(
      SolidityActions.updateSoliditySource(this.state.source)
    );
  }

  render() {
    return (
      <div>

        {/* TEXTAREA */}
        <div className="form-group">
          <textarea 
            className="form-control rounded-0" 
            onChange={evt => this.updateSource(evt)}
            value={this.state.source}
            rows="100"/>
        </div>

      </div>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps)(Solidity);
