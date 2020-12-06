import { createReducer } from '@reduxjs/toolkit';
import { getCategories } from '../action';

const initialState = [];
const transactionCategories = createReducer(initialState, {
  [getCategories]: (state, action) => {
    return [...action.payload];
  },
});

export default transactionCategories;
