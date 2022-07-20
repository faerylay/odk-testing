import React, { useState } from 'react'
import { Paper, Button, Box, Typography, Divider, FormControlLabel, Switch } from '@mui/material'
import { useNavigate } from 'react-router-dom'

import { ANOUNCEMENT } from '../../graphql'
import AdminTabs from './AdminTabs'
import { useMutation } from '@apollo/client'
import { userId } from '../../auth'

const Admin = () => {
  const navigate = useNavigate()
  const [now, setNow] = useState(false);

  const [anouncement] = useMutation(ANOUNCEMENT, {
    variables: {
      anouncementNow: !now,
      adminId: userId()
    }
  })
  const anouncementNow = async () => {
    setNow(checked => !checked)
    await anouncement()
  }
  const logout = () => {
    localStorage.removeItem('profile')
    navigate('/login')
  }

  return (
    <Paper elevation={5} sx={{ background: "#fff", display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingBlock: 2, margin: { lg: 2, xs: 1 } }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', paddingInline: 3, paddingBlock: 1 }}>
        <Typography variant='h3'>Admin Dashboard</Typography>
        <Box>
          <FormControlLabel label={now ? 'Anouncement open' : 'Anouncement closed'} control={
            <Switch checked={now} onChange={anouncementNow} />
          } />
          <Button variant="contained" onClick={logout} >
            <Typography >Logout</Typography>
          </Button>
        </Box>
      </Box>
      <Divider />
      <AdminTabs />
    </Paper>
  )
}

export default Admin