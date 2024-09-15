import React from 'react';
import Marketing from './RemoteComponents/Marketing';
import Header from './components/Header';
import { BrowserRouter } from 'react-router-dom';
import {
  StylesProvider,
  createGenerateClassName
} from '@material-ui/core/styles';

const generateClassName = createGenerateClassName({
  productionPrefix: 'container'
});

export default () => {
  return (
    <StylesProvider generateClassName={generateClassName}>
      <BrowserRouter>
        <Header />
        <Marketing />
      </BrowserRouter>
    </StylesProvider>
  );
};
