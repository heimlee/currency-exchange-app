import { combineReducers } from 'redux';

import { homeReducer } from '../modules/home/reducers/homeReducer';
import { defaultReducer } from '../modules/default/reducers/defaultReducer';

export const rootReducer = combineReducers({
  home: homeReducer,
  defaultSelection: defaultReducer,
});
