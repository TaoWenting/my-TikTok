// src/components/UpperNavbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, InputBase, Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const UpperNavbar = () => {
  return (
    <AppBar position="fixed" className="upper-navbar">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          TikTok Clone
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
        <Button color="inherit" component={Link} to="/register" style={{ marginRight: '16px' }}>
          Register
        </Button>
        <Button color="inherit" component={Link} to="/login">
          Login
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default UpperNavbar;
