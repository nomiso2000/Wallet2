import React, { StrictMode, Suspense, useEffect } from 'react';
import { Redirect, Switch, Route, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import authSelectors from '../../redux/auth/selectors';
import ErrorNotification from '../../components/Notifications/Error';
// import Loader from '../Loader';
import routes from '../../routes/index';
import PrivateRoute from '../../HOC/PrivateRoute';

import styles from './Navigation.module.css';
import Header from '../../components/Header';
import NavMenu from '../../components/NavMenu';

const Navigation = () => {
  const dispatch = useDispatch();
  const authLoading = useSelector(authSelectors.getLoading);
  const loading = authLoading;

  return (
    <>
      <Header />

      <div className={styles.background}>
        <div className={styles.navMenu}>
          <NavMenu />
        </div>
        <div className={styles.Other}>
          <StrictMode>
            <Suspense fallback={styles.loading}>
              <Switch>
                <PrivateRoute
                  path={routes.HOME.path}
                  component={routes.HOME.component}
                />
                <PrivateRoute
                  path={routes.STATISTIC.path}
                  component={routes.STATISTIC.component}
                />
                {window.screen.width < 768 && (
                  <PrivateRoute
                    path={routes.CURRENCY.path}
                    component={routes.CURRENCY.component}
                  />
                )}

                <Redirect to={routes.HOME.path} />
              </Switch>
              {/* {loading && 'loading'} */}
              <ErrorNotification />
            </Suspense>
          </StrictMode>
        </div>
      </div>
    </>
  );
};
export default Navigation;
