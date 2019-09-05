import * as constants from '../actions/constants';

export default (state = {}, action) => {
  switch (action.type) {
    case constants.FETCH_BITCOIN:
      return action.bitcoin;
      
    default:
      return state;
  }
}