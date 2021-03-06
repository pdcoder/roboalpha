import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const NonPrivateRoute = ({ component: Component, auth, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      auth === false ? (
        <Component {...props} />
      ) : (
        <Redirect to="/" />
      )
    }
  />
);



export default NonPrivateRoute;
