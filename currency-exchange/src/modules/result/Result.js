import React from 'react';
import { useHistory } from 'react-router-dom';

import './result.scss';

export const Result = () => {
  const history = useHistory();
  const handleClick = () => {
    history.push("/history");
  };

  return(
    <div className="result-container">
      <h1>Result</h1>
      <div className="result-row">
        <div className="result-item">1000</div>
        <div className="result-item">UAH</div>
        <div className="result-item">=</div>
        <div className="result-item">27000</div>
        <div className="result-item">USD</div>
      </div>
      <button type="button" onClick={handleClick} className="next-button">
        Next
      </button>
    </div>
  );
};
