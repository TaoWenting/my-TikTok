import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, InputBase, Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { logout } from '../../redux/actions/authActions';

const UpperNavbar = () => {
  const dispatch = useDispatch();
  const { isAuthenticated, user } = useSelector(state => state.auth);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <AppBar position="fixed" className="upper-navbar">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          My TikTok
        </Typography>
        <div style={{ position: 'relative', borderRadius: '4px', backgroundColor: '#ffffff33', marginRight: '16px' }}>
          <div style={{ padding: '0 16px', height: '100%', position: 'absolute', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <SearchIcon />
          </div>
          <InputBase
            placeholder="Search…"
            inputProps={{ 'aria-label': 'search' }}
            style={{ color: 'inherit', paddingLeft: '48px' }}
          />
        </div>
        {isAuthenticated ? (
          <div className="navbar-user" style={{ display: 'flex', alignItems: 'center' }}>
            {user && user.username && ( // Add conditional check for user.username
              <Typography variant="body1" style={{ marginRight: '16px' }}>
                {user.username}
              </Typography>
            )}
            <Button color="inherit" component={Link} to="/change-password">Forgot Password</Button>
            <Button color="inherit" onClick={handleLogout}>Logout</Button>
          </div>
        ) : (
          <div className="navbar-auth" style={{ display: 'flex', alignItems: 'center' }}>
            <Button color="inherit" component={Link} to="/login">Login</Button>
            <Button color="inherit" component={Link} to="/register">Register</Button>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default UpperNavbar;
