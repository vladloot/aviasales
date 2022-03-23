import React, { FC } from 'react';

import logo from './assets/logo/img.png';

import './App.css';
import { NavigateFilter } from 'components/NavigateFilter/NavigateFilter';
import { TransfersFilter } from 'components/TransfersFilter/TransfersFilter';

const App: FC = () => (
  <div className="App">
    <div className="Logo">
      <img src={logo} alt="logo" />
    </div>
    <div className="app-wrapper">
      <TransfersFilter />
      <div>
        <NavigateFilter />
      </div>
    </div>
  </div>
);

export default App;
