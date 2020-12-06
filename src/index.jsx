import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, useHistory } from 'react-router-dom';
import { Provider, useDispatch } from 'react-redux';
import { NotificationContainer } from 'react-notifications';
import { PersistGate } from 'redux-persist/integration/react';
import App from './components/App';
import './styles/index.css';
import { store, persistor } from './redux/store';

import Loader from './components/Loader';

export const Index = () => {
  return (
    <>
      <App />
      <NotificationContainer />
    </>
  );
};

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={<Loader />} persistor={persistor}>
      <BrowserRouter>
        <Index />
      </BrowserRouter>
    </PersistGate>
  </Provider>,
  document.getElementById('root'),
);
