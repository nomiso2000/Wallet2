import { createAction } from '@reduxjs/toolkit';

const transactionsSummaryRequest = createAction(
  'statistics/transactionsSummaryRequest',
);
const transactionsSummarySuccess = createAction(
  'statistics/transactionsSummarySuccess',
);
const transactionsSummaryError = createAction(
  'statistics/transactionsSummaryError',
);

const allTransactionsRequest = createAction(
  'statistics/allTransactionsRequest',
);
const allTransactionsSuccess = createAction(
  'statistics/allTransactionsSuccess',
);
const allTransactionsError = createAction('statistics/allTransactionsError');

export default {
  transactionsSummaryRequest,
  transactionsSummarySuccess,
  transactionsSummaryError,
  allTransactionsRequest,
  allTransactionsSuccess,
  allTransactionsError,
};
