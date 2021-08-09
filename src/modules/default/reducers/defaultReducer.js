import { SET_DEFAULT_FROM_CURRENCY, SET_DEFAULT_TO_CURRENCY} from '../actions/defaultAction';

const initialState = {
  fromCurrencyDefault: [],
  toCurrencyDefault: [],
}  

export const defaultReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DEFAULT_FROM_CURRENCY:
      return { ...state, fromCurrencyDefault: action.payload };
    case SET_DEFAULT_TO_CURRENCY:
      return { ...state, toCurrencyDefault: action.payload };
    default:
      return state;
  }
};
