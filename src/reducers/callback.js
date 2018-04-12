import { combineReducers } from 'redux';
import callback, { ACTIONS } from '../actions/callback';

export function success(state = null, action) {
  switch (action.type) {
    case ACTIONS.SUCCESS:
      return action.data;
    default:
      return state;
  };
};

export function failure(state = null, action) {
  switch (action.type) {
    case ACTIONS.FAILURE:
      return action.error;
    default:
      return state;
  };
};

export default combineReducers({
  success,
  failure,
});

