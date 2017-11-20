import React from 'react';
import { Switch, Route } from 'react-router-dom';
import TransitionComponent from '../components/TransitionComponent/index';
import Header from '../components/Header';
import SideBar from '../components/SideBar';
import ActivityPage from './Pages/Activity';
import { receipts } from '../../data/mock-data.json';

import './Pages/styles.scss';
import '../../assets/spritesheet/sprite.css';
import '../../sharedAssets/_main.scss';

const App = () =>
  <div className="app">
    <Header connectionStatus />
    <SideBar />
    <div className="pages" id="main-wrapper">
      <Switch>
        <Route
          path="/dashboard"
          component={ props =>
            <TransitionComponent transitionsName={ 'fade' }>
              <ActivityPage { ...props } receipts={ receipts } />
            </TransitionComponent> }
        />
      </Switch>
    </div>
  </div>;

export default App;
