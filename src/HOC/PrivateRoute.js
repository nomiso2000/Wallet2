import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import authSelectors from '../redux/auth/selectors';
import routes from '../routes';

const PrivateRoute = ({ component: Component }) => {
  const isAuthenticated = useSelector(authSelectors.isAuthenticated);

  return (
    <Route
      render={() =>
        isAuthenticated ? <Component /> : <Redirect to={routes.LOGIN.path} />
      }
    />
  );
};

export default PrivateRoute;
