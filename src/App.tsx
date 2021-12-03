import React, { ReactElement } from 'react';
import {
  BrowserRouter as Router,
  Routes, 
  Route, 
} from "react-router-dom"
import SearchPage from './pages/search/SearchPage'
import EmailPage from './pages/email/EmailPage'
import UsersPage from './pages/users/UsersPage'
import PhonePage from './pages/phones/PhonePage'
import IpPage from './pages/ip/IpPage';
import FullUsernamesPage from './pages/full-usernames/FullUsernamesPage';

import './App.css';

export const App: React.FC = (): ReactElement => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<SearchPage />} />
          <Route path="/emails" element={<EmailPage />} />
          <Route path="/usernames" element={<UsersPage />} />
          <Route path="/users" element={<FullUsernamesPage />} />
          <Route path="/phones" element={<PhonePage />} />
          <Route path="/ip" element={<IpPage />} />
        </Routes>
      </div>
    </Router>
  );
}
