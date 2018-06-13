import React, { Component } from 'react';
import OutputWrapper from './OutputWrapper';
import CodeComponent from '../presentation/CodeComponent';

const compilationOptions = [
  '--asm'
];

class AsmOutputComponent extends Component {
  render() {
    return(
      <div>
        <CodeComponent content={this.props.output}/>
      </div>
    );
  }
}

export default OutputWrapper(AsmOutputComponent, compilationOptions);
