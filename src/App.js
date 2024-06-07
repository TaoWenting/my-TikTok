import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import User from './pages/User';
import UpperNavbar from './components/UpperNavbar';
import LowerNavbar from './components/LowerNavbar';
import Register from './pages/Register';
import Login from './pages/Login';
import './App.css';

const App = () => {
  const isAuthenticated = false; // Replace this with your actual authentication logic

  return (
    <Router>
      <div>
        <UpperNavbar />
        <div id="content" style={{ paddingTop: '64px' }}> {/* Add padding to avoid content being hidden by the upper navbar */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/user"
              element={isAuthenticated ? <User /> : <Navigate to="/login" />}
            />
          </Routes>
        </div>
        <LowerNavbar />
      </div>
    </Router>
  );
};

export default App;
