export const CURRENCY_CALCULATE = 'CURRENCY_CALCULATE';
export const FROM_CURRENCY = 'FROM_CURRENCY';
export const TO_CURRENCY = 'TO_CURRENCY';

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
