import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import statisticsActions from './statisticsActions';

const transactionsSummary = createReducer(
  {},
  {
    [statisticsActions.transactionsSummarySuccess]: (_, action) =>
      action.payload,
  },
);

const allTransactions = createReducer([], {
  [statisticsActions.allTransactionsSuccess]: (_, action) => action.payload,
});

const loading = createReducer(false, {
  [statisticsActions.transactionsSummaryRequest]: () => true,
  [statisticsActions.transactionsSummarySuccess]: () => false,
  [statisticsActions.transactionsSummaryError]: () => false,

  [statisticsActions.allTransactionsRequest]: () => true,
  [statisticsActions.allTransactionsSuccess]: () => false,
  [statisticsActions.allTransactionsError]: () => false,
});

export default combineReducers({
  transactionsSummary,
  allTransactions,
  loading,
});
