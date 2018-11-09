import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import './reset.css';
import './index.css';

import Game from './components/game';
import store from './store';
import {makeGuess, restartGame, generateAuralUpdate} from './actions';

ReactDOM.render(
  <Provider store={store}>
   <Game />
  </Provider>,
  document.getElementById('root')
);

console.log(store.getState());

store.dispatch(makeGuess(50));

console.log(store.getState());

store.dispatch(restartGame(50));

console.log(store.getState());

store.dispatch(makeGuess(50));

console.log(store.getState())
