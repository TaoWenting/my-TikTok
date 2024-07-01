import React from 'react';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link, useLocation } from 'react-router-dom';
import UploadIcon from '@mui/icons-material/CloudUpload'; // Import an icon for upload

const LowerNavbar = () => {
  const location = useLocation();

  return (
    <BottomNavigation value={location.pathname} showLabels className="lower-navbar">
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
      <BottomNavigationAction
        component={Link}
        to="/upload-video"
        label="Upload"
        value="/upload-video"
        icon={<UploadIcon />}
      />
    </BottomNavigation>
  );
};

export default LowerNavbar;
