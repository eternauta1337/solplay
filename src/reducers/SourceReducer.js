import * as ActionTypes from '../actions/ActionTypes';

const defaultSource = 
`pragma solidity ^0.4.21;

contract Sample {
  
  address public owner;

  constructor() public {
    owner = msg.sender;
  }
}`

const initialState = { 
  name: 'SourceReducer',
  source: defaultSource
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
