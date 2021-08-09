import axios from "axios";

export const CURRENCY_CALCULATE = 'CURRENCY_CALCULATE';
export const FROM_CURRENCY = 'FROM_CURRENCY';
export const TO_CURRENCY = 'TO_CURRENCY';

export const GET_CURRENCY_EXCHENGE = 'GET_CURRENCY_EXCHENGE';
export const GET_CURRENCY_EXCHENGE_SUCCESS = 'GET_CURRENCY_EXCHENGE_SUCCESS';
export const GET_CURRENCY_EXCHENGE_FAILURE = 'GET_CURRENCY_EXCHENGE_FAILURE';

export const IS_SWAP = 'IS_SWAP';

export const GET_TO_CURRENCY = 'GET_TO_CURRENCY';

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

export const getToCurrency = (value) => ({
  type: GET_TO_CURRENCY,
  payload: value,
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

export const fetchSelectToCcy = (o) => {
  return async (dispatch) => {
    const response = await axios.get('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5');
    const data = response.data;
    const rowFilter = data.filter(e => e.ccy === o);
    // console.log(rowFilter[0].base_ccy);
    dispatch(getToCurrency(rowFilter));
    dispatch(toCurrency(rowFilter[0].base_ccy));
  }
};

export const fetchSelectToBaseCcy = (o) => {
  return async (dispatch) => {
    const response = await axios.get('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5');
    const data = response.data;
    const rowFilter = data.filter(e => e.base_ccy === o);
    // console.log(rowFilter[0].ccy);
    dispatch(getToCurrency(rowFilter));
    dispatch(toCurrency(rowFilter[0].ccy));
  }
};

// export async function fetchSelectTo(o) {
//   await new Promise((r) => setTimeout(r, 0));
//   const response = await axios.get('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5');
//   const data = response.data;
//   const rowFilter = data.filter(e => e.ccy === o);
//   console.log(rowFilter)
//   return async (dispatch) => {
//     dispatch(getToCurrency(rowFilter));
//   };
// }
