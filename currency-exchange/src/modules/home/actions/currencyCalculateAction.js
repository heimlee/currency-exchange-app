import axios from "axios";

export const CURRENCY_CALCULATE = 'CURRENCY_CALCULATE';
export const FROM_CURRENCY = 'FROM_CURRENCY';
export const TO_CURRENCY = 'TO_CURRENCY';

export const GET_CURRENCY_EXCHENGE = 'GET_CURRENCY_EXCHENGE';
export const GET_CURRENCY_EXCHENGE_SUCCESS = 'GET_CURRENCY_EXCHENGE_SUCCESS';
export const GET_CURRENCY_EXCHENGE_FAILURE = 'GET_CURRENCY_EXCHENGE_FAILURE';

export const IS_SWAP = 'IS_SWAP';

export const currencyCalculate = (amount) => ({
  type: CURRENCY_CALCULATE,
  payload: amount,
});

export const fromCurrency = (value) => ({
  type: FROM_CURRENCY,
  payload: value,
});

export const toCurrency = (value) => ({
  type: TO_CURRENCY,
  payload: value,
});

const getCurrencyExchange = () => ({
  type: GET_CURRENCY_EXCHENGE,
});

const getCurrencyExchangeSuccess = (value) => ({
  type: GET_CURRENCY_EXCHENGE_SUCCESS,
  payload: value
});

const getCurrencyExchangeFailure = () => ({
  type: GET_CURRENCY_EXCHENGE_FAILURE,
});

export const isSwap = () => ({
  type: IS_SWAP,
});

export const fetchCurrencyCalculate = () => {
  return async (dispatch) => {
    dispatch(getCurrencyExchange());
    try {
      const response = await axios.get('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5');
      const data = response.data;
      dispatch(getCurrencyExchangeSuccess(data));
    } catch (err) {
      dispatch(getCurrencyExchangeFailure());
    }
  }
};
