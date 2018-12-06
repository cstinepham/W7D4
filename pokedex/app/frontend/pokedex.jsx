import React from 'react'
import ReactDOM from 'react-dom'
import { fetchAllPokemon } from './util/api_util';
import { receiveAllPokemon } from './actions/pokemon_actions';
import configureStore from './store/store';
import * as selectors from './reducers/selectors';
import Root from './components/root';

let store = null;

document.addEventListener('DOMContentLoaded', () => {
  store = configureStore();
  window.receiveAllPokemon = receiveAllPokemon;
  window.fetchAllPokemon = fetchAllPokemon;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  const rootEl = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, rootEl);
});



