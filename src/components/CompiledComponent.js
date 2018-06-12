import React, { Component} from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

class CompiledComponent extends Component {

  constructor(props) {
    super(props);

    this.state = {
      output: ''
    }
  }

  componentWillReceiveProps(nextProps) {

    const source = nextProps.SolidityReducer.source;
    
    // TODO: use a server to compile the code using solc
    axios.post(
      'http://localhost:1337',
      { source }
    )
      .then(response => {
        const output = response.data
        this.setState({ output });
      })
    const output = source

  }

  render() {
    return (
      <div>
        <textarea 
          className="form-control rounded-0" 
          value={this.state.output}
          rows="100"/>
      </div>
    );
  }
}

function mapStateToProps({SolidityReducer}) {
  return {
    SolidityReducer
  };
}

export default connect(mapStateToProps)(CompiledComponent);
