import React, { lazy, Suspense } from 'react';
import Header from './components/Header';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import {
  StylesProvider,
  createGenerateClassName
} from '@material-ui/core/styles';
import Progress from './components/Progress';
import { useState } from 'react';

const Auth = lazy(() => import('./RemoteComponents/Auth'));
const Marketing = lazy(() => import('./RemoteComponents/Marketing'));
const Dashboard = lazy(() => import('./RemoteComponents/Dashboard'));

const generateClassName = createGenerateClassName({
  productionPrefix: 'container'
});

export default () => {
  const [signedIn, setsignedIn] = useState(false);

  const onSignIn = () => {
    setsignedIn(true);
  };

  const onSignOut = () => {
    setsignedIn(false);
  };

  return (
    <StylesProvider generateClassName={generateClassName}>
      <BrowserRouter>
        <Header signedIn={signedIn} onSignOut={onSignOut} />
        <Suspense fallback={<Progress />}>
          <Switch>
            <Route path="/auth">
              <Auth onSignIn={onSignIn} />
            </Route>
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/" component={Marketing} />
          </Switch>
        </Suspense>
      </BrowserRouter>
    </StylesProvider>
  );
};
