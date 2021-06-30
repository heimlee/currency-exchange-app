import React from 'react';
import { useSelector } from 'react-redux';
import { Field, ErrorMessage } from 'formik';

import { TextError } from '../textError/TextError';

export const Select = ({ label, name, options, ...rest }) => {
  const isSwapStore = useSelector(state => state.home.isSwap);
  return (
    <div className="field-container">
      <label htmlFor={name}>{label}</label>
      <Field 
        as="select"
        name={name}
        id={name}
        className="field-item"
        {...rest}>
          {options.map(option => {
            return(
              <option key={!isSwapStore ? option.ccy : option.base_ccy} value={!isSwapStore ? option.ccy : option.base_ccy}>
                {!isSwapStore ? option.ccy : option.base_ccy}
              </option>
            );
          })}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};
