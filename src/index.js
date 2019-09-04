import React from 'react';
import ReactDom from 'react-dom';
import { createStore } from 'redux';
import rootReducer from './reducers/balance';
import { Provider } from 'react-redux';

import App from './components/App';

const store = createStore(rootReducer);

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root')
);