import React from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form } from 'formik';
import { Link } from "react-router-dom";

import { Select } from '../home/components/select/Select';
import { setDefaultFromCurrency, setDefaultToCurrency } from './actions/defaultAction';

import './default.scss';

export const Default = () => {
  const fromCurrencyValuesDefault = [
    { key: 'USD', value: 'USD' },
    { key: 'EUR', value: 'EUR' },
    { key: 'RUR', value: 'RUR' },
    { key: 'BTC', value: 'BTC' },
  ];

  const toCurrencyValuesDefault = [
    { key: 'UAH', value: 'UAH' },
    { key: 'USD', value: 'USD' },
  ];

  const dispatch = useDispatch();

  const initialValues = {
    fromCurrencyDefault: 'USD',
    toCurrencyDefault: 'UAH',
  };

  const onSubmit = (values) => {
    dispatch(setDefaultFromCurrency(values.fromCurrencyDefault));
    dispatch(setDefaultToCurrency(values.toCurrencyDefault));
    console.log(JSON.stringify(values, null, 2));
  };

  return(
    <Formik 
      initialValues={initialValues}
      onSubmit={onSubmit}
    >
      <Form className="default-container">
        <h1>Default Selection</h1>
        <div className="fields-wrapper">
          <Select label='From' name='fromCurrencyDefault' options={fromCurrencyValuesDefault} />
          <Select label='To' name='toCurrencyDefault' options={toCurrencyValuesDefault} />
        </div>
        <button type="submit" className="convert-button">Set Default Selection</button>
        <Link to="/">
          <button>Back</button>
        </Link>
      </Form>
    </Formik>
  );
};
