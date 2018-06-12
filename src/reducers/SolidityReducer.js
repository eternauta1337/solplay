import * as ActionTypes from '../actions/ActionTypes';
import ReducerUtil from '../utils/ReducerUtil';

const initialState = { 
  name: 'SolidityReducer',
  source: '' 
};

const SolidityReducer = (state = initialState, action) => {
  let newState = state;

  if(action.type === ActionTypes.MODIFY_SOURCE) {
    ReducerUtil.logAction(action)
    ReducerUtil.logState(`before`, state);
    newState = {
      ...state,
      source: action.source
    }
    ReducerUtil.logState(`after`, newState);
  }

  return newState;
};

export default SolidityReducer;
