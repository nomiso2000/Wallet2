import { createReducer } from '@reduxjs/toolkit';
import { loaderOFF, loaderON } from '../action';

const initialState = false;
const transactionsLoaderReducer = createReducer(initialState, {
  [loaderON]: (state, action) => {
    return true;
  },

  [loaderOFF]: (state, action) => {
    return false;
  },
});
export default transactionsLoaderReducer;
