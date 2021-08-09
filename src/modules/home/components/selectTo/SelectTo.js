import React, { useEffect } from 'react';
import { Field, ErrorMessage, useFormikContext } from 'formik';
import { useDispatch, useSelector } from 'react-redux';

import { fetchSelectToCcy, fetchSelectToBaseCcy } from '../../actions/currencyCalculateAction';
import { TextError } from '../textError/TextError';


export const SelectTo = (props) => {
  const { label, name, options, ...rest } = props;
  const isSwapStore = useSelector(state => state.home.isSwap);
  const dispatch = useDispatch();

  const {
    values: { fromCurrency },
  } = useFormikContext();

  useEffect(() => {
    dispatch(!isSwapStore ? fetchSelectToCcy(fromCurrency) : fetchSelectToBaseCcy(fromCurrency));
  }, [dispatch, fromCurrency, isSwapStore]);

  return (
    <div className="field-container">
      <label htmlFor={name}>{label}</label>
      <Field 
        as="select"
        name={name}
        id={name}
        className="field-item"
        {...rest}
      >
        {options.map(option => {
            return(
              <option key={!isSwapStore ? option.base_ccy : option.ccy} value={!isSwapStore ? option.base_ccy : option.ccy}>
                {!isSwapStore ? option.base_ccy : option.ccy}
              </option>
            );
          })}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};
