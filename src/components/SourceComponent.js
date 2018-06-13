import React, {Component} from 'react';
import {connect} from 'react-redux';
import Store from '../store'
import SourceActions from '../actions/SourceActions';

const defaultSource = 
`pragma solidity ^0.4.21;

contract Sample {
  
  address public owner;

  constructor() public {
    owner = msg.sender;
  }
}`

class SourceComponent extends Component {

  constructor(props) {
    super(props);

    this.state = {
      source: defaultSource
    }
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

export default connect(mapStateToProps)(SourceComponent);
