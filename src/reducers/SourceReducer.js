import * as ActionTypes from '../actions/ActionTypes';

const initialState = { 
  name: 'SourceReducer',
  source: '' 
};

const SourceReducer = (state = initialState, action) => {
  let newState = state;

  if(action.type === ActionTypes.SOURCE_UPDATED) {
    newState = {
      ...state,
      source: action.source
    }
  }

  return newState;
};

export default SourceReducer;
