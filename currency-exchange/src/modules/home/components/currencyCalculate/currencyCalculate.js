import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form } from 'formik';
import { useHistory } from 'react-router-dom';
import * as Yup from 'yup';

import { Input } from '../input/Input';
import { Select } from '../select/Select';
import { currencyCalculate, fromCurrency, toCurrency, isSwap, fetchCurrencyCalculate } from '../../actions/currencyCalculateAction';

import './currencyCalculate.scss';

export const CurrencyCalculate = () => {
  const fromCurrencyValues = [
    { key: 'USD', value: 'USD' },
    { key: 'EUR', value: 'EUR' },
    { key: 'RUR', value: 'RUR' },
    { key: 'BTC', value: 'BTC' },
  ];

  const toCurrencyValues = [
    { key: 'UAH', value: 'UAH' },
    { key: 'USD', value: 'USD' },
  ];

  const isSwapStore = useSelector(state => state.home.isSwap);
  const defaultSelectionStore = useSelector(state => state.defaultSelection);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(fetchCurrencyCalculate());
  }, [dispatch]);

  const fromCurrencyDefault = () => {
    if (localStorage.getItem('state') === null || JSON.parse(localStorage.getItem('state')).defaultSelection.fromCurrencyDefault.length === 0) {
      return String('USD');
    } else if (JSON.parse(localStorage.getItem('state')).defaultSelection.fromCurrencyDefault.length === 0) {
      return defaultSelectionStore.fromCurrencyDefault;
    }
    return defaultSelectionStore.fromCurrencyDefault;
  };

  const toCurrencyDefault = () => {
    if (localStorage.getItem('state') === null || JSON.parse(localStorage.getItem('state')).defaultSelection.toCurrencyDefault.length === 0) {
      return String('UAH');
    } else if (JSON.parse(localStorage.getItem('state')).defaultSelection.toCurrencyDefault.length === 0) {
      return defaultSelectionStore.toCurrencyDefault;
    }
    return defaultSelectionStore.toCurrencyDefault;
  };

  const initialValues = {
    amount: '',
    fromCurrency: `${fromCurrencyDefault()}`,
    toCurrency: `${toCurrencyDefault()}`,
  };

  const onSubmit = (values) => {
    dispatch(currencyCalculate(values.amount));
    dispatch(fromCurrency(values.fromCurrency));
    dispatch(toCurrency(values.toCurrency));
    console.log(JSON.stringify(values, null, 2));
    history.push('/result');
  };

  const validationSchema = Yup.object({
    amount: Yup.string().required('Required!'),
  });

  const onSwap = () => {
    dispatch(isSwap());
  };

  const onClickToDefault = () => {
    history.push('/default-selection');
  };

  return(
    <Formik 
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      <Form className="form-container">
        <div className="fields-wrapper">
          <Input label='Amount' name='amount' />
          {!isSwapStore ? <Select label='From' name='fromCurrency' options={fromCurrencyValues} /> : <Select label='From' name='fromCurrency' options={toCurrencyValues} />}
          <button type="button" className="swap-button" onClick={onSwap}>swap</button>
          {!isSwapStore ? <Select label='To' name='toCurrency' options={toCurrencyValues} /> : <Select label='To' name='toCurrency' options={fromCurrencyValues} />}
        </div>
        <button type="button" className="convert-button" onClick={onClickToDefault}>Set Default Selection</button>
        <button type="submit" className="convert-button">Next</button>
      </Form>
    </Formik>
  );
};
