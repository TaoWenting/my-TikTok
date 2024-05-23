// src/components/LowerNavbar.js
import React from 'react';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link, useLocation } from 'react-router-dom';

const LowerNavbar = () => {
  const location = useLocation();
  
  return (
    <BottomNavigation value={location.pathname} showLabels className="lower-navbar" >
      <BottomNavigationAction
        component={Link}
        to="/"
        label="Home"
        value="/"
        icon={<HomeIcon />}
      />
      <BottomNavigationAction
        component={Link}
        to="/user"
        label="User"
        value="/user"
        icon={<AccountCircleIcon />}
      />
    </BottomNavigation>
  );
};

export default LowerNavbar;
