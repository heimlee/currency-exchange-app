import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form } from 'formik';
import { useHistory } from 'react-router-dom';
import * as Yup from 'yup';

import { Input } from '../input/Input';
import { Select } from '../select/Select';
import { SelectTo } from '../selectTo/SelectTo';
import { currencyCalculate, fromCurrency, toCurrency, isSwap, fetchCurrencyCalculate } from '../../actions/currencyCalculateAction';

import './currencyCalculate.scss';

export const CurrencyCalculate = () => {
  const isSwapStore = useSelector(state => state.home.isSwap);
  const defaultSelectionStore = useSelector(state => state.defaultSelection);
  const exchange = useSelector(state => state.home.exchange);
  const selectTo = useSelector(state => state.home.selectTo);
  const dispatch = useDispatch();
  const history = useHistory();

  function uniqObjsInArray(a, key) {
    let seen = new Set();
    return a.filter(item => {
        let k = key(item);
        return seen.has(k) ? false : seen.add(k);
    });
  }

  const exchangeSorted = uniqObjsInArray(exchange, it => it.base_ccy)

  useEffect(() => {
    dispatch(fetchCurrencyCalculate());
  }, [dispatch]);

  const fromCurrencyDefault = () => {
    if (localStorage.getItem('state') === null || JSON.parse(localStorage.getItem('state')).defaultSelection.fromCurrencyDefault.length === 0) {
      return 'USD';
    } else if (JSON.parse(localStorage.getItem('state')).defaultSelection.fromCurrencyDefault.length !== 0) {
      return defaultSelectionStore.fromCurrencyDefault;
    }
    return defaultSelectionStore.fromCurrencyDefault;
  };

  const toCurrencyDefault = () => {
    if (localStorage.getItem('state') === null || JSON.parse(localStorage.getItem('state')).defaultSelection.toCurrencyDefault.length === 0) {
      return 'UAH';
    } else if (JSON.parse(localStorage.getItem('state')).defaultSelection.toCurrencyDefault.length !== 0) {
      return defaultSelectionStore.toCurrencyDefault;
    }
    return defaultSelectionStore.toCurrencyDefault;
  };

  // console.log(selectTo[0].base_ccy)

  const initialValues = {
    amount: '1',
    fromCurrency: `${fromCurrencyDefault()}`,
    toCurrency: `${toCurrencyDefault()}`,
    // fromCurrency: '',
    // toCurrency: '',
  };

  const onSubmit = (values) => {
    dispatch(currencyCalculate(values.amount));
    dispatch(fromCurrency(values.fromCurrency));
    dispatch(toCurrency(values.toCurrency));
    console.log(JSON.stringify(values, null, 2));
    // history.push('/result');
  };

  const onHandleChange = (values) => {
    dispatch(currencyCalculate(values.amount));
    dispatch(fromCurrency(values.fromCurrency));
    dispatch(toCurrency(values.toCurrency));
    console.log(values);
  };

  const validationSchema = Yup.object({
    amount: Yup.string().required('Required!'),
  });

  const onSwap = () => {
    dispatch(isSwap());
    // dispatch(fromCurrency(selectTo));
    // dispatch(toCurrency(selectTo[0].base_ccy));
    // console.log(initialValues);
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
          {!isSwapStore ? <Select label='From' name='fromCurrency' options={exchange} /> : <Select label='From' name='fromCurrency' options={exchangeSorted} />}
          <button type="button" className="swap-button" onClick={onSwap}>swap</button>
          {!isSwapStore ? <SelectTo label='To' name='toCurrency' options={selectTo} /> : <SelectTo label='To' name='toCurrency' options={selectTo} />}
        </div>
        <button type="button" className="convert-button" onClick={onClickToDefault}>Set Default Selection</button>
        <button type="submit" className="convert-button">Next</button>
      </Form>
    </Formik>
  );
};
