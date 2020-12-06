import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const PublicRoute = ({
  component: Component,
  isAuthentificated,
  restricted,
  ...routeProps
}) => (
  <Route
    {...routeProps}
    render={props => {
      return isAuthentificated && restricted ? (
        <Redirect to="/contacts" />
      ) : (
        <Component {...props} />
      );
    }}
  />
);

const mapStateToProps = state => ({
  isAuthentificated: state.auth.token,
});

export default connect(mapStateToProps)(PublicRoute);
