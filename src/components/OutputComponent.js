import React, { Component} from 'react';
import { connect } from 'react-redux';
import Store from '../store'
import SourceActions from '../actions/SourceActions';

class OutputComponent extends Component {

  constructor(props) {
    super(props);

    this.state = {
      source: '',
      output: ''
    }
  }

  componentWillReceiveProps(nextProps) {

    // Request compilation?
    const source = nextProps.source;
    const oldSource = this.state.source;
    if(source !== oldSource) {
      Store.dispatch(SourceActions.compileSource(source));
      this.setState({
        source
      });
    }

    // Display compilation output.
    const output = nextProps.output.split(' ').join('\n');
    this.setState({
      output
    });
  }

  render() {
    return(
      <div>
        <textarea 
          className="form-control rounded-0" 
          style={{fontSize: 13}}
          value={this.state.output}
          rows="100"/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    source: state.SourceReducer.source,
    output: state.OutputReducer.output
  };
}

export default connect(mapStateToProps)(OutputComponent);
