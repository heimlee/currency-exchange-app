export const SET_DEFAULT_FROM_CURRENCY = 'SET_DEFAULT_FROM_CURRENCY';
export const SET_DEFAULT_TO_CURRENCY = 'SET_DEFAULT_TO_CURRENCY';  

export const setDefaultFromCurrency = (value) => ({
  type: SET_DEFAULT_FROM_CURRENCY,
  payload: value,
});

export const setDefaultToCurrency = (value) => ({
  type: SET_DEFAULT_TO_CURRENCY,
  payload: value,
});
