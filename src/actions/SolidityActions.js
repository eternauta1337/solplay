import * as ActionTypes from './ActionTypes';

const SolidityActions = {

  updateSoliditySource(source) {
    return { type: ActionTypes.MODIFY_SOURCE, source }
  }
}

export default SolidityActions;
