import React from 'react';

import { CurrencyCalculate } from './components/currencyCalculate/currencyCalculate';

import './home.scss';

export const Home = () => {
  return(
    <div className="home-container">
      <h1 className="home-title">Currency Exchange</h1>
      <CurrencyCalculate />
    </div>
  );
};
