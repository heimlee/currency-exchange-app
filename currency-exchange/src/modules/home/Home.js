import React from 'react';
import { useDispatch } from 'react-redux';

import { Formik, Form, Field } from 'formik';

import './home.scss';

export const Home = () => {
  const dispatch = useDispatch();

  const initialValues = {
    amount: '',
    fromCurrency: '',
    toCurrency: '',
  };

  const onSubmit = (value) => {
    if (value.amount && value.fromCurrency && value.toCurrency) {
      dispatch();
    }
  };

  return(
    <div className="home-container">
      <h1 className="home-title">Currency Exchange</h1>
      <Formik 
        initialValues={initialValues}
        onSubmit={onSubmit}
      >
        <Form>
          <div className="fields-wrapper">
            <div className="field-container">
              <div>Amount</div>
              <Field type="text" id="amount" name="amount" className="field-item"></Field>
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
        </Form>
      </Formik>
      <button type="submit" className="convert-button">Convert</button>
    </div>
  );
};
