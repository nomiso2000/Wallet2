import React, { StrictMode, Suspense, useEffect } from 'react';
import { Redirect, Switch, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import * as authOperations from '../../redux/auth/operations';
import authSelectors from '../../redux/auth/selectors';
import ErrorNotification from '../Notifications/Error';
import Loader from '../Loader';
import routes from '../../routes';
import PrivateRoute from '../../HOC/PrivateRoute';

const App = () => {
  const dispatch = useDispatch();
  const authLoading = useSelector(authSelectors.getLoading);
  useEffect(() => {
    dispatch(authOperations.getCurrentUser());
  }, []);
  const loading = authLoading;

  return (
    <>
      {/* <StrictMode> */}
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route
            exact
            path={routes.LOGIN.path}
            component={routes.LOGIN.component}
          />
          <Route
            exact
            path={routes.REGISTER.path}
            component={routes.REGISTER.component}
          />
          <PrivateRoute
            path={routes.NAVIGATION.path}
            component={routes.NAVIGATION.component}
          />
          <Redirect to={routes.HOME.path} />
        </Switch>
        {loading && <Loader />}
        <ErrorNotification />
      </Suspense>
      {/* </StrictMode> */}
    </>
  );
};

export default App;
// {' '}
// {routes.map(route => {
//   return route.private ? (
//     <PrivateRoute key={route.path} {...route} />
//   ) : (
//     <PublicRoutes
//       key={route.path}
//       {...route}
//       restricted={route.restricted}
//     />
//   );
// })}
