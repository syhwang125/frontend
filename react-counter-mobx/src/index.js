import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

import CounterStore from './store/CounterStore';
import { Provider } from 'mobx-react'; 

ReactDOM.render(
  <Provider counterStore = { CounterStore}>
    <App />
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
