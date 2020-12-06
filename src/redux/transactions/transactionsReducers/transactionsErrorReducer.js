// import { createReducer } from '@reduxjs/toolkit';
// import { setError, resetError } from '../action';
import types from '../../types';

// const initialState = '';
// const transactionErrorReducer = createReducer(initialState, {
//   [setError]: (state, {payload}) => {
//     console.log('payload', payload)
//     return  {state:payload}
//   },

//   [resetError]: (state, action) => {
//     return '';
//   },
// });

const transactionErrorReducer = (state = '', action) => {
  switch (action.type) {
    case types.SET_ERROR:
      return action.payload;
    case types.RESET_ERROR:
      return '';
    default:
      return state;
  }
};

export default transactionErrorReducer;
