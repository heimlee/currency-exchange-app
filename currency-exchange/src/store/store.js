import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import throttle from 'lodash/throttle';

import { rootReducer } from '../reducers/index';
import { loadState, saveState } from '../localStorage/localStorage';

const persistedState = loadState();

export const store = createStore(
  rootReducer,
  persistedState,
  composeWithDevTools(applyMiddleware(thunk))
);

// console.log(store.getState());

store.subscribe(throttle(() => {
  saveState(store.getState());
  // console.log(store.getState());
}, 1000));
