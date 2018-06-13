import React, { Component } from 'react';
import OutputWrapper from './OutputWrapper';
import CodeComponent from '../presentation/CodeComponent';

const compilationOptions = [
  '--ast'
];

class AstOutputComponent extends Component {
  render() {
    return(
      <div>
        <CodeComponent content={this.props.output}/>
      </div>
    );
  }
}

export default OutputWrapper(AstOutputComponent, compilationOptions);
