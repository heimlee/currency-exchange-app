import React from 'react';
import { useHistory } from 'react-router-dom';

import './history.scss';

export const History = () => {
  const history = useHistory();
  const handleClick = () => {
    history.push('/');
  };

  const historyTable = () => {
    // const defaultSelection = JSON.parse(localStorage.getItem("currency_exchange_app_defaultSelection"));
    // const defaultSelectionString = `${defaultSelection.fromCurrencyDefault} = ${defaultSelection.toCurrencyDefault}`;
    return(
      <>
        <section>
          <h3>Default Selection</h3>
          <div></div>
        </section>
        <section>
          <h3>History of Currency Exchange</h3>
          <div>
            <div></div>
            <div></div>
            <div>=</div>
            <div></div>
            <div></div>
          </div>
        </section>
      </>
    );
  };

  return(
    <div className="history-container">
      <h1>History</h1>
      <div className="history-wrapper">
        {historyTable()}
      </div>
      <button type="button" onClick={handleClick} className="next-button">
        Home
      </button>
    </div>
  );
};
