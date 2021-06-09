import React from 'react';
import { Field, ErrorMessage } from 'formik';

import { TextError } from '../textError/TextError';

export const Select = ({ label, name, options, ...rest }) => {
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
              <option key={option.value} value={option.value}>
                {option.key}
              </option>
            );
          })}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};
