// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import User from './pages/User';
import UpperNavbar from './components/UpperNavbar';
import LowerNavbar from './components/LowerNavbar';
import Register from './pages/Register';
import Login from './pages/Login';
import './App.css';

const App = () => {
  return (
    <Router>
      <div>
        <UpperNavbar />
        <div id="content" style={{ paddingTop: '64px' }}> {/* Add padding to avoid content being hidden by the upper navbar */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/user" element={<User />} />
            <Route path="/register" element={<Register />} /> {/* Add route for Register page */}
            <Route path="/login" element={<Login />} /> {/* Add route for Login page */}
          </Routes>
        </div>
        <LowerNavbar />
      </div>
    </Router>
  );
};

export default App;
