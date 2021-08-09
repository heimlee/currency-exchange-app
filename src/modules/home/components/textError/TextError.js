import React from 'react';

import './textError.scss';

export const TextError = ({children}) => {
  return(
    <div className="error">
      {children}
    </div>
  );
};
