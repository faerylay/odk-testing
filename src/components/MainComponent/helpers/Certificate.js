import React from 'react'
import { Box, Paper, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import useWindowDimensions from '../../../hooks/useWindowDimensions';
import { Footer } from '../index';


const Certificate = ({ title, image }) => {
  const { height, width } = useWindowDimensions()
  const navigate = useNavigate()
  return (
    <Box sx={{ width: width, height: 'auto' }}>
      <Box sx={{ display: 'flex', justifyContent: 'center', height: image ? 'auto' : height / 1.4, paddingBlock: 4 }}>
        <Paper elevation={3} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', alignContent: 'center', paddingInline: 1, paddingBlock: 3, border: 3, borderColor: '#FFD700' }} >
          <Button variant="outlined" color="primary" sx={{ marginBlock: 3 }} onClick={() => navigate('/request_form')}>
            REQUEST FORM
          </Button>
          <Typography color="black" variant='p' component="div" sx={{ fontSize: { xs: 18, md: 25 }, paddingBlock: 3 }}>{title}</Typography>
          <img src={image} alt="..." width="100%" height="100%" />
        </Paper>
      </Box>
      <Footer />

    </Box>
  )
}

export default Certificate