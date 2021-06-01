import { CURRENCY_CALCULATE, FROM_CURRENCY, TO_CURRENCY } from '../actions/currencyCalculateAction';

const initialState = {
  amount: [],
  fromCurrency: [],
  toCurrency: [],
};

export const homeReducer = (state = initialState, action) => {
  switch(action.type) {
    case CURRENCY_CALCULATE:
      return { ...state, amount: action.payload };
    case FROM_CURRENCY:
      return { ...state, fromCurrency: action.payload };
    case TO_CURRENCY:
      return { ...state, toCurrency: action.payload };
    default:
      return state;
  }
};
