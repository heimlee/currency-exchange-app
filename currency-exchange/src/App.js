import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import { Home } from './modules/home/Home';
import { Default } from './modules/default/Default';

import './App.scss';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/default-selection' component={Default}/>
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
