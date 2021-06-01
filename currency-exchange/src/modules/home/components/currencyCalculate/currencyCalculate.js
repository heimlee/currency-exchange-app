import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form, Field } from 'formik';

import { currencyCalculate, fromCurrency, toCurrency } from '../../actions/currencyCalculateAction';
import { Redirect } from 'react-router-dom';

import './currencyCalculate.scss';

export const CurrencyCalculate = () => {
  const [toNext, setToNext] = useState(false);
  const dispatch = useDispatch();

  const initialValues = {
    amount: '',
    fromCurrency: '',
    toCurrency: '',
  };

  const onSubmit = (values) => {
    dispatch(currencyCalculate(values.amount));
    dispatch(fromCurrency(values.fromCurrency));
    dispatch(toCurrency(values.toCurrency));
    console.log(JSON.stringify(values, null, 2));
    setToNext(true);
  };

  return(
    <Formik 
      initialValues={initialValues}
      onSubmit={onSubmit}
    >
      <Form className="form-container">
        <div className="fields-wrapper">
          <div className="field-container">
            <div>Amount</div>
            <Field type="text" id="amount" name="amount" className="field-item" />
          </div>
          <div className="field-container">
            <div>From</div>
            <Field as="select" name="fromCurrency" className="field-item">
              <option value=""></option>
              <option value="USD">USD - US Dollar</option>
              <option value="EUR">EUR - Euro</option>
              <option value="RUB">RUB - Russian Ruble</option>
              <option value="BTC">BTC - Bitcoin</option>
            </Field>
          </div>
          <div className="field-container">
            <div>To</div>
            <Field as="select" name="toCurrency" className="field-item">
              <option value=""></option>
              <option value="UAH">UAH - Ukraininan Hryvnia</option>
              <option value="USD">USD - US Dollar</option>
            </Field>
          </div>
        </div>
        {toNext ? <Redirect to="/default-selection" /> : null}
        <button type="submit" className="convert-button">Add Amount</button>
      </Form>
    </Formik>
  );
};
