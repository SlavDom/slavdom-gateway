import React from 'react';
import ReactDOM from 'react-dom';

import AppComponent from './app';

const rootEl = document.getElementById('root');

const render = Component =>
  ReactDOM.render(
    <div>
      <p>Loaded...</p>
      <Component />
    </div>,
    rootEl
  );

render(AppComponent);
