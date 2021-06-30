import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import './result.scss';

export const Result = () => {
  const history = useHistory();
  const exchange = useSelector(state => state.home.exchange);
  const isSwap = useSelector(state => state.home.isSwap);
  const home = useSelector(state => state.home);

  console.log(isSwap);

  const calculate = () => {
    for (let i = 0; i < exchange.length; i++ ) {
      let obj = exchange[i];
      if (obj.ccy === home.fromCurrency && obj.base_ccy === home.toCurrency) {
        return <>{!isSwap ? home.amount * obj.buy : home.amount / obj.sale }</>;
      }
    }
  };

  const handleClick = () => {
    history.push('/history');
  };

  return(
    <div className="result-container">
      <h1>Result</h1>
      <div className="result-row">
        <div className="result-item">{home.amount}</div>
        <div className="result-item">{home.fromCurrency}</div>
        <div className="result-item">=</div>
        <div className="result-item">{calculate()}</div>
        <div className="result-item">{home.toCurrency}</div>
      </div>
      <button type="button" onClick={handleClick} className="next-button">
        Next
      </button>
    </div>
  );
};
