import React from 'react';
import { useTheme, useMediaQuery, Box, Paper } from '@mui/material'

import useWindowDimensions from '../../../hooks/useWindowDimensions';
import YoutubeList from './YoutubeList';

const Youtube = () => {
  const theme = useTheme()
  const { width, height } = useWindowDimensions()
  const matchDownMd = useMediaQuery(theme.breakpoints.down('md'));


  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBlock: 1 }}>
      <Paper elevation={3} sx={{ width: matchDownMd ? width / 1.1 : width / 1.5, height: matchDownMd ? height / 2 : height / 1.06 }}>
        <YoutubeList />
      </Paper>
    </Box>

  )
}

export default Youtube