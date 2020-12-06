import { createReducer } from '@reduxjs/toolkit';
import { filterALL, filterExpences, filterIncomes } from '../action';

const initialState = 'allTransactions';

const transactionFilterReducer = createReducer(initialState, {
  [filterALL]: (state, action) => {
    return action.payload;
  },

  [filterExpences]: (state, action) => {
    return action.payload;
  },
  [filterIncomes]: (state, action) => {
    return action.payload;
  },
});

export default transactionFilterReducer;
