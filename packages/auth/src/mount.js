import React from 'react';
import ReactDOM from 'react-dom';
import { createMemoryHistory, createBrowserHistory } from 'history';
import App from './App';

const mount = (
  element,
  { onAuthNavigate, isMemoryHistory = true, initialPath = '/', onSignIn }
) => {
  const history = isMemoryHistory
    ? createMemoryHistory({
        initialEntries: [initialPath]
      })
    : createBrowserHistory();

  if (onAuthNavigate) {
    history.listen(onAuthNavigate);
  }

  console.log('auth element', element);
  ReactDOM.render(<App history={history} onSignIn={onSignIn} />, element);

  const onParentNavigate = (location) => {
    const { pathname: authPathName } = history.location;
    const parentPathname = location.pathname;

    console.log('auth parentPathname', parentPathname);
    console.log('auth authPathName', authPathName);

    if (parentPathname !== authPathName) {
      history.push(parentPathname);
    }
  };

  return {
    onParentNavigate
  };
};

const container = document.querySelector('#_auth-container');

if (container) {
  mount(container, { isMemoryHistory: false });
}

export { mount };
