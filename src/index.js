import React from 'react';
import ReactDOM from 'react-dom';
import Acorns from './components/Acorns';

import { render }  from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import ButtonReducer from './reducers/index'

const store = createStore(
  ButtonReducer,
  window.devToolsExtension && window.devToolsExtension()
);

render(
  <Provider store = {store}>
  < Acorns />
  </Provider>,
  document.getElementById('root'),
);


