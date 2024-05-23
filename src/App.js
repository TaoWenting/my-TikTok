// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import User from './pages/User';
import UpperNavbar from './components/UpperNavbar';
import LowerNavbar from './components/LowerNavbar';
import './App.css'; // Import the CSS file

const App = () => {
  return (
    <Router>
      <div>
        <UpperNavbar />
        <div id="content" style={{ paddingTop: '64px' }}> {/* Add padding to avoid content being hidden by the upper navbar */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/user" element={<User />} />
          </Routes>
        </div>
        <LowerNavbar />
      </div>
    </Router>
  );
};

export default App;
