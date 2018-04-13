import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from './reducers/character';
import CharManagerApp from './layouts/CharManagerApp';

const store = createStore(character);

render(
  <Provider store = { store }>
    <CharManagerApp />
  </Provider>,
  document.getElementById('charManagerAppRoot')
);
