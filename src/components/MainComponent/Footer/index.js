import React from 'react';
import { Box, Typography } from '@mui/material';
import useWindowDimensions from '../../../hooks/useWindowDimensions';

const Footer = () => {
  const { height } = useWindowDimensions()
  return (
    <Box sx={{
      color: '#fff',
      width: '100%',
      height: height / 5,
      background: '#333',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
    }}>
      <Typography sx={{ paddingBottom: 2, fontSize: { md: 16, xs: 12 } }}>COPYRIGHT © 2021 ODK - ALL RIGHTS RESERVED.</Typography>
      <Typography sx={{ fontSize: { md: 16, xs: 12 } }}>POWERED BY ONE DAY CHALLENGE</Typography>
    </Box>
  )
}

export default Footer