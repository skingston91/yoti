import React from 'react';
import { Switch, Route } from 'react-router-dom';
import TransitionComponent from '../components/TransitionComponent/index';
import Header from '../components/Header';
import Test from '../components/Test';

import '../../style/style.scss';

const App = () =>
  <div className="app">
    <Switch>
      <Route
        exact
        path="/"
        component={ props =>
          <TransitionComponent transitionsName={ 'fade' }>
            <Header { ...props } />
          </TransitionComponent> }
      />
      <Route
        path="/"
        component={ props =>
          <TransitionComponent transitionsName={ 'fade' }>
            <Test { ...props } />
          </TransitionComponent> }
      />
    </Switch>
  </div>;

export default App;
