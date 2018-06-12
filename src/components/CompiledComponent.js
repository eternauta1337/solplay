import React, { Component} from 'react';
import { connect } from 'react-redux';

const child_process = require('child_process');

class CompiledComponent extends Component {

  constructor(props) {
    super(props);

    this.state = {
      output: ''
    }
  }

  componentWillReceiveProps(nextProps) {

    const source = nextProps.SolidityReducer.source;
    const output = child_process.spawn('ls', ['-la', '/usr']);
    output.stdout.on('data', data => console.log(`stdout: ${data}`));
    output.stderr.on('data', data => console.log(`stderr: ${data}`));
    output.on('close', code => console.log(`process closed with code: ${code}`));

    this.setState({
      output
    });
  }

  render() {
    return (
      <div>
        {this.state.output}
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
