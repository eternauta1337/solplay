import React, { Component} from 'react';
import { connect } from 'react-redux';
import Store from '../../store';
import SourceActions from '../../actions/SourceActions';

const OutputWrapper = (WrappedComponent, compilationOptions) => {
  class OutputComponent extends Component {

    constructor(props) {
      super();

      this.state = {
        lastKnownSource: ''
      };
    }

    requestCompilation() {
      Store.dispatch(
        SourceActions.compileSource(
          compilationOptions
        )
      );
    }

    componentDidMount() {
      this.requestCompilation();
    }

    evaluateCompilation(newSource) {
      if(newSource !== this.state.lastKnownSource) {
        this.setState({
          lastKnownSource: newSource
        });
        this.requestCompilation(); 
      }
    }

    componentWillReceiveProps(nextProps) {
      this.evaluateCompilation(nextProps);
    }

    render() {
      return(
        <div>
          <WrappedComponent {...this.props}/>
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

  return connect(mapStateToProps)(OutputComponent);
};

export default OutputWrapper;
