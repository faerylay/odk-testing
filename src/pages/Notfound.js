import React from 'react'
import { Box, Typography } from '@mui/material'

import useWindowDimensions from '../hooks/useWindowDimensions'

const Notfound = () => {
  const { height, width } = useWindowDimensions()
  return (
    <Box sx={{ width, height: height / 1.07, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Box sx={{
        width: 300,
        height: 200,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        border: 1,
        borderColor: '#ddd',
        borderRadius: 2
      }}>
        <Typography> Notfound</Typography>
      </Box>
    </Box>
  )
}

export default Notfound