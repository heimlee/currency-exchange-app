import { CURRENCY_CALCULATE, FROM_CURRENCY, TO_CURRENCY, GET_CURRENCY_EXCHENGE, GET_CURRENCY_EXCHENGE_SUCCESS, GET_CURRENCY_EXCHENGE_FAILURE, IS_SWAP } from '../actions/currencyCalculateAction';

const initialState  = {
  amount: [],
  fromCurrency: [],
  toCurrency: [],
  loading: false,
  hasError: false,
  isSwap: false,
  exchange: [],
};

export const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CURRENCY_EXCHENGE:
      return { ...state, loading: true };
    case GET_CURRENCY_EXCHENGE_SUCCESS:
      return { ...state, exchange: action.payload, loading: false, hasError: false };
    case GET_CURRENCY_EXCHENGE_FAILURE:
      return { ...state, loading: false, hasError: true };
    case CURRENCY_CALCULATE:
      return { ...state, amount: action.payload };
    case FROM_CURRENCY:
      return { ...state, fromCurrency: action.payload };
    case TO_CURRENCY:
      return { ...state, toCurrency: action.payload };
    case IS_SWAP:
      return { ...state, isSwap: !state.isSwap };
    default:
      return state;
  }
};
