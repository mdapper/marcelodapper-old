import React from 'react';
import {render} from 'react-dom';

// AppContainer is a necessary wrapper component for HMR
import {AppContainer} from 'react-hot-loader';

import App from './components/App/App';

const renderApp = Component => {
  render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('app'),
  );
};

renderApp(App);

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./components/App/App', () => {
    renderApp(App);
  });
}
