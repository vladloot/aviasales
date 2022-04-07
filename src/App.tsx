import React, { FC } from 'react';

import logo from './assets/logo/img.png';

import './App.css';
import { NavigateFilter } from 'components/NavigateFilter/NavigateFilter';
import { TicketList } from 'components/TicketList/TicketList';
import { TransfersFilter } from 'components/TransfersFilter/TransfersFilter';

const App: FC = () => {
  console.log('lox');
  return (
    <div className="App">
      <div className="Logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="app-wrapper">
        <TransfersFilter />
        <div>
          <NavigateFilter />
          <TicketList />
        </div>
      </div>
    </div>
  );
};

export default App;
