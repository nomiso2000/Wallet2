import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authReducer from './auth/reducer';

import errorsReducer from './error/reducer';
import statististicsReducer from './staticstics/statisticsReducer';
import { encryptor } from './encryptor';
import transactionsRootReducer from './transactions/transactionsReducers/transactionsRootReducer';
const authConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
  // transforms: [encryptor],
};

const rootReducers = combineReducers({
  auth: persistReducer(authConfig, authReducer),
  transactions: transactionsRootReducer,
  errors: errorsReducer,
  statistics: statististicsReducer,
});

export default rootReducers;
