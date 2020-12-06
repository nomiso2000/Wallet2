import { combineReducers } from 'redux';

import transactionReducer from './transactionsReducer';
import transactionErrorReducer from './transactionsErrorReducer';
import transactionsLoaderReducer from './transactionsLoaderReducer';
import transactionFilterReducer from './transactionsFilterReducer';
import transactionCategories from './transactionCategories';

const transactionsRootReducer = combineReducers({
  items: transactionReducer,
  loader: transactionsLoaderReducer,
  error: transactionErrorReducer,
  filter: transactionFilterReducer,
  categoris: transactionCategories,
});

export default transactionsRootReducer;
