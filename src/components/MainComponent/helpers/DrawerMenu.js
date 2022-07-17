import React from 'react';
import { useNavigate } from 'react-router-dom'
import { Drawer, Box, Typography, IconButton, Divider, List, ListItem, ListItemText, ListItemButton } from '@mui/material';
import { IconX } from '@tabler/icons'
import jwt_decode from 'jwt-decode'
const DrawerMenu = ({ mobileOpen, handleDrawerToggle }) => {
  const navigate = useNavigate()
  const token = localStorage.getItem('profile')
  let decoded;
  if (token) {
    decoded = jwt_decode(token);
  }
  const goTo = decoded?.role === 'Admin' ? 'admin' : 'profile';
  const drawerWidth = 320;

  const container = window !== undefined ? () => window.document.body : undefined;
  const drawer = (
    <Box sx={{ textAlign: 'center' }}>
      <Typography variant="h3" sx={{ my: 2 }}>
        MUI
      </Typography>
      <IconButton onClick={handleDrawerToggle} sx={{ position: 'absolute', top: 0, right: 0 }}>
        <IconX />
      </IconButton>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton onClick={() => {
            handleDrawerToggle()
            navigate("/home")
          }}>
            <ListItemText primary="- HOME" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={() => {
            handleDrawerToggle()
            navigate("/request_form")
          }}>
            <ListItemText primary="REQUEST FORM" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={() => {
            handleDrawerToggle()
            navigate("/congratulation")
          }}>
            <ListItemText primary=" CONGRATULATION" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={() => {
            handleDrawerToggle()
            navigate("/nug_recommendation")
          }}>
            <ListItemText primary="NUG'S RECOMMENDATION" />
          </ListItemButton>
        </ListItem>
        {
          decoded ? (
            <ListItem disablePadding >
              <ListItemButton onClick={() => navigate(`/${goTo}/${decoded._id}`)}>
                <ListItemText primary="PROFILE" />
              </ListItemButton>
            </ListItem>
          ) : (
            <ListItem disablePadding>
              <ListItemButton onClick={() => {
                handleDrawerToggle()
                navigate("/certificate_honor")
              }}>
                <ListItemText primary="ဂုဏ်ပြုလွှာရယူရန်" />
              </ListItemButton>
            </ListItem>
          )
        }
      </List>
    </Box>
  )
  return (
    <Drawer
      container={container}
      variant="temporary"
      open={mobileOpen}
      onClose={handleDrawerToggle}
      ModalProps={{
        keepMounted: true, // Better open performance on mobile.
      }}
      sx={{
        display: { xs: 'block', md: 'none' },
        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
      }}
    >
      {drawer}
    </Drawer>
  )
}

export default DrawerMenu