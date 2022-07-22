import React from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom'
import { IconMenu2, IconUser } from '@tabler/icons'
import { authAccess } from '../../../auth'
import LogoSection from '../helpers/LogoSection';

const Header = ({ handleDrawerToggle }) => {
  const navigate = useNavigate()

  const goTo = authAccess()?.role === 'Admin' ? 'admin' : 'profile';
  const linkMenu = {
    color: '#bbb',
    "&:hover": {
      color: '#fff !important',
    },

    textDecoration: 'none',
    paddingRight: { lg: 5, md: 2 },
    fontSize: { lg: 16, md: 14 },
    cursor: 'pointer',
  }

  return (
    <Box style={{ width: '100%', height: '100%', display: 'flex', alignItems: "center" }}>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="start"
        onClick={handleDrawerToggle}
        sx={{ mr: 2, color: '#fff', display: { md: 'none' } }}
      >
        <IconMenu2 />
      </IconButton>

      <Box sx={{ flexGrow: 1 }}>
        <LogoSection />
      </Box>
      <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, mt: 1 }}>
        <Typography onClick={() => navigate("/home")} to="/home" sx={linkMenu}>
          - HOME
        </Typography>
        <Typography onClick={() => navigate("/request_form")} sx={linkMenu}>
          REQUEST FORM
        </Typography>
        <Typography onClick={() => navigate("/congratulation")} sx={linkMenu}>
          CONGRATULATION
        </Typography>
        <Typography onClick={() => navigate("/nug_recommendation")} sx={linkMenu}>
          NUG'S RECOMMENDATION
        </Typography>
        {
          authAccess()._id ? (
            <Typography sx={linkMenu} onClick={() => navigate(`/${goTo}/${authAccess()._id}`)}>
              <IconUser />
            </Typography>
          ) : (
            <Typography onClick={() => navigate("/certificate_honor")} sx={linkMenu}>
              ဂုဏ်ပြုလွှာရယူရန်
            </Typography>
          )
        }
      </Box>
    </Box>
  );
};


export default Header;
