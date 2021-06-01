import { combineReducers } from 'redux';

import { homeReducer } from '../modules/home/reducers/homeReducer';

export const rootReducer = combineReducers({
  home: homeReducer,
});
