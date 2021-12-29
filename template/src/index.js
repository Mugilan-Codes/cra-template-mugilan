import React from 'react';
import { render } from 'react-dom';

import ContextProviders from 'Contexts';
import App from './App';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

render(
  <ContextProviders>
    <App />
  </ContextProviders>,
  document.getElementById('root')
);
