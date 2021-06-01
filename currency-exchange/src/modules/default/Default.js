import React from 'react';
import { Link } from "react-router-dom";

import './default.scss';

export const Default = () => {

  return(
    <div className="default-container">
      <h1>Default Selection</h1>
      <Link to="/">
        <button>Back</button>
      </Link>
    </div>
  );
};
