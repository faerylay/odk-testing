import React, { useEffect, useState } from 'react';
import { useLocation, Outlet } from 'react-router-dom';
import { AppBar, Box, CssBaseline, Toolbar, useTheme } from '@mui/material';

import { Header } from './index';
import { Main } from './mainStyles';
import { DrawerMenu } from './helpers';
import useWindowDimensions from '../../hooks/useWindowDimensions'

const MainComponent = () => {
  const { height } = useWindowDimensions()
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  let location = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, [location]);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        component="nav"
        enableColorOnDark
        position="fixed"
        color="inherit"
        elevation={0}
        sx={{ height: height / 15, background: 'red' }}
      >
        <Toolbar variant='dense' sx={{ height: '100%', width: '100%', display: 'flex', justifyContent: 'space-around' }}>
          <Header handleDrawerToggle={handleDrawerToggle} />
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <DrawerMenu mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle} />
      </Box>

      <Main height={height} theme={theme} location={location}>
        <Outlet />
      </Main>
    </Box>
  );
};

export default MainComponent;
