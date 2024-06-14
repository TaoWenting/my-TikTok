import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import UserPage from './pages/UserPage';
import UploadVideo from './pages/UploadVideo'; // Import the UploadVideo component
import UpperNavbar from './components/UpperNavbar';
import LowerNavbar from './components/LowerNavbar';
import Register from './components/Register';
import Login from './components/Login';
import './App.css';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userId, setUserId] = useState(null);

  const handleLogin = (userId) => {
    setIsAuthenticated(true);
    setUserId(userId);
    console.log("User ID:", userId);
  };

  return (
    <Router>
      <div>
        <UpperNavbar />
        <div id="content" style={{ paddingTop: '64px' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login onLogin={handleLogin} />} />
            <Route path="/user" element={isAuthenticated ? <UserPage userId={userId} /> : <Navigate to="/login" />} />
            <Route path="/upload-video" element={isAuthenticated ? <UploadVideo /> : <Navigate to="/login" />} />
          </Routes>
        </div>
        <LowerNavbar />
      </div>
    </Router>
  );
};

export default App;
