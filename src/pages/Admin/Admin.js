import React from 'react'
import { Paper, Button, Box, Typography, Divider } from '@mui/material'
import { useNavigate } from 'react-router-dom'

import AdminTabs from './AdminTabs'

const Admin = () => {
  const navigate = useNavigate()
  const logout = () => {
    localStorage.removeItem('profile')
    navigate('/login')
  }
  return (
    <Paper elevation={5} sx={{ background: "red", display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingBlock: 2, margin: { lg: 2, xs: 1 } }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', paddingInline: 3, paddingBlock: 1 }}>
        <Typography variant='h3'>Admin Dashboard</Typography>
        <Button variant="outlined" sx={{ border: 2, borderColor: '#fff' }} onClick={logout} >
          <Typography variant='h3'>Logout</Typography>
        </Button>
      </Box>
      <Divider />
      <AdminTabs />
    </Paper>
  )
}

export default Admin