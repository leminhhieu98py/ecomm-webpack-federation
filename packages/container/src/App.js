import React, { lazy, Suspense } from 'react';
import Header from './components/Header';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import {
  StylesProvider,
  createGenerateClassName
} from '@material-ui/core/styles';
import Progress from './components/Progress';

const Auth = lazy(() => import('./RemoteComponents/Auth'));
const Marketing = lazy(() => import('./RemoteComponents/Marketing'));

const generateClassName = createGenerateClassName({
  productionPrefix: 'container'
});

export default () => {
  return (
    <StylesProvider generateClassName={generateClassName}>
      <BrowserRouter>
        <Header />
        <Suspense fallback={<Progress />}>
          <Switch>
            <Route path="/auth" component={Auth} />
            <Route path="/" component={Marketing} />
          </Switch>
        </Suspense>
      </BrowserRouter>
    </StylesProvider>
  );
};
