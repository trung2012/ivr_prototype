import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { WizardProvider } from './context/WizardContext';
import { initializeIcons } from '@uifabric/icons';
import './index.css';

import * as serviceWorker from './serviceWorker';

initializeIcons();

ReactDOM.render(
  <React.StrictMode>
    <WizardProvider>
      <App />
    </WizardProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
