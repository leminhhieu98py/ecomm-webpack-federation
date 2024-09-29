import React, { lazy, Suspense } from 'react';
import Header from './components/Header';
import { Switch, Route, Router } from 'react-router-dom';
import {
  StylesProvider,
  createGenerateClassName
} from '@material-ui/core/styles';
import Progress from './components/Progress';
import { useState } from 'react';
import PrivateRoute from './components/PrivateRoute';
import { createBrowserHistory } from 'history';

const Auth = lazy(() => import('./RemoteComponents/Auth'));
const Marketing = lazy(() => import('./RemoteComponents/Marketing'));
const Dashboard = lazy(() => import('./RemoteComponents/Dashboard'));

const generateClassName = createGenerateClassName({
  productionPrefix: 'container'
});

const history = createBrowserHistory();

export default () => {
  const [signedIn, setsignedIn] = useState(false);

  const onSignIn = () => {
    setsignedIn(true);
    history.push('/dashboard');
  };

  const onSignOut = () => {
    setsignedIn(false);
    history.push('/');
  };

  return (
    <StylesProvider generateClassName={generateClassName}>
      <Router history={history}>
        <Header signedIn={signedIn} onSignOut={onSignOut} />
        <Suspense fallback={<Progress />}>
          <Switch>
            <Route path="/auth">
              <Auth onSignIn={onSignIn} />
            </Route>
            <PrivateRoute
              path="/dashboard"
              component={Dashboard}
              signedIn={signedIn}
            />
            <Route path="/" component={Marketing} />
          </Switch>
        </Suspense>
      </Router>
    </StylesProvider>
  );
};
