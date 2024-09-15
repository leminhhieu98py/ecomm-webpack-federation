import React from 'react';
import Marketing from './RemoteComponents/Marketing';
import Header from './components/Header';
import { BrowserRouter } from 'react-router-dom';

export default () => {
  return (
    <BrowserRouter>
      <Header />
      <Marketing />
    </BrowserRouter>
  );
};
