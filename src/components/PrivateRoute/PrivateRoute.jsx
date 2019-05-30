import React from 'react';
import { Route, Redirect } from 'react-router';
import { connect } from 'react-redux';

const _PrivateRoute = ({ component: Component, loggedIn, redirectUrl, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      loggedIn ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: '/login',
            state: { from: props.location },
          }}
        />
      )
    }
  />
);

const mapStateToProps = (state) => {
  return {
    loggedIn: state.loggedIn,
  };
};

const PrivateRoute = connect(mapStateToProps)(_PrivateRoute);

export default PrivateRoute;
