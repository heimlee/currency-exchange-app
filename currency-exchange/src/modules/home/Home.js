import React from 'react';

import { FieldsCurrencyCalc } from './components/fieldsCurrencyCalc/fieldsCurrencyCalc';

import './home.scss';

export const Home = () => {
  return(
    <div className="home-container">
      <h1 className="home-title">Currency Exchange</h1>
      <FieldsCurrencyCalc />
    </div>
  );
};
