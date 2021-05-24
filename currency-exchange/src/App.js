import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import { Home } from './modules/home/Home';
import { Default } from './modules/default/Default';
import { Result } from './modules/result/Result';
import { History } from './modules/history/History';

import './App.scss';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/default-selection' component={Default}/>
        <Route exact path='/result' component={Result} />
        <Route exact path='/history' component={History} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
