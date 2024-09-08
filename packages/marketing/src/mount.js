import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const mount = (element) => {
  ReactDOM.render(<App />, element);
};

const container = document.querySelector('#_marketing-container');

if (container) {
  mount(container);
}

export { mount };
