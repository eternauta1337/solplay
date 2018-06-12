import thunkMiddleware from 'redux-thunk'
import { createStore, combineReducers, applyMiddleware } from 'redux'

import SolidityReducer from './reducers/SolidityReducer';

const mainReducer = combineReducers({
  SolidityReducer
});

const Store = createStore(
  mainReducer,
  applyMiddleware(thunkMiddleware)
);

export default Store;
