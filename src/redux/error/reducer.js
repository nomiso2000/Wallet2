import { combineReducers } from 'redux';
import types from '../types';

const errorsInfo = (state = null, { type, payload }) => {
  switch (type) {
    case types.LOGIN_FAILURE:
      return payload;
    case types.SIGNUP_FAILURE:
      return payload;
    case types.LOGOUT_FAILURE:
      return payload;
    case types.GET_CURRENT_USER_FAILURE:
      return payload;
    default:
      return state;
  }
};

export default errorsInfo;
