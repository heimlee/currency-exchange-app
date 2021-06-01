import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import { Redirect, Link } from "react-router-dom";

import { currencyCalculate, fromCurrency, toCurrency } from '../home/actions/currencyCalculateAction';

import './default.scss';

export const Default = () => {
  const [toNext, setToNext] = useState(false);
  const dispatch = useDispatch();

  const initialValues = {
    amount: '',
    fromCurrency: 'USD',
    toCurrency: 'UAH',
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
      <Form className="default-container">
        <h1>Default Selection</h1>
        <div className="fields-wrapper">
          <div className="field-container">
            <div>Amount</div>
            <Field 
              type="text"
              id="amount"
              name="amount"
              className="field-item"
              onKeyPress={(event) => {
                if (!/[0-9]/.test(event.key)) {
                  event.preventDefault();
                }
              }}
            />
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
        {toNext ? <Redirect to="/result" /> : null}
        <button type="submit" className="convert-button">Add Amount</button>
        <Link to="/">
          <button>Back</button>
        </Link>
      </Form>
    </Formik>
  );
};
