import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export default ({ component: Component, signedIn, ...restProps }) => {
  return (
    <Route
      {...restProps}
      render={(props) =>
        signedIn ? <Component {...props} /> : <Redirect to="/auth/signin" />
      }
    />
  );
};
