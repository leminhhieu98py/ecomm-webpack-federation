import React from 'react';
import ReactDOM from 'react-dom';
import { createMemoryHistory, createBrowserHistory } from 'history';
import App from './App';

const mount = (
  element,
  { onMarketingNavigate, isMemoryHistory = true, initialPath = '/' }
) => {
  const history = isMemoryHistory
    ? createMemoryHistory({
        initialEntries: [initialPath]
      })
    : createBrowserHistory();

  if (onMarketingNavigate) {
    history.listen(onMarketingNavigate);
  }

  ReactDOM.render(<App history={history} />, element);

  const onParentNavigate = (location) => {
    const { pathname: marketingPathName } = history.location;
    const parentPathname = location.pathname;

    console.log('marketing parentPathname', parentPathname);
    console.log('marketing marketingPathName', marketingPathName);

    if (parentPathname !== marketingPathName) {
      history.push(parentPathname);
    }
  };

  return {
    onParentNavigate
  };
};

const container = document.querySelector('#_marketing-container');

if (container) {
  mount(container, { isMemoryHistory: false });
}

export { mount };
