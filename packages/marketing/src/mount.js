import React from 'react';
import ReactDOM from 'react-dom';

const mount = (element) => {
  ReactDOM.render(<h1>Hello from Marketing</h1>, element);
};

const container = document.querySelector('#_marketing-container');

if (container) {
  mount(container);
}

export { mount };
