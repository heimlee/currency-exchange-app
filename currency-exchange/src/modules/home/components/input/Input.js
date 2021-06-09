import React from 'react';
import { Field, ErrorMessage } from 'formik';

import { TextError } from '../textError/TextError';

export const Input = ({ label, name, ...rest }) => {
  return(
    <div className="field-container">
      <label htmlFor={name}>{label}</label>
      <Field 
        type="text"
        id={name}
        name={name}
        className="field-item"
        onKeyPress={(event) => {
          if (!/[0-9]/.test(event.key)) {
            event.preventDefault();
          }
        }}
        {...rest}
      />
      <ErrorMessage name='amount' component={TextError} />
    </div>
  );
};
