import React from 'react'
import { Grid, Paper, Typography, Toolbar } from '@mui/material';

import SearchUsers from '../Search/SearchUsers';
import { UserCreateModal } from '../Modal';
import { UserTable } from '../Table';

const UserList = () => {
  return (
    <Grid container spacing={2} sx={{ display: 'flex', flexDirection: 'row' }}>
      <Grid item xs={12} sm={12} md={6}>
        <Paper elevation={2} sx={{ background: '#f1f1f1' }}>
          <Toolbar sx={{ pl: { sm: 2 }, pr: { xs: 1, sm: 1 } }} >
            <Typography variant="h4" component="div"  >User Search</Typography>
          </Toolbar>
          <SearchUsers />
        </Paper>
      </Grid>
      <Grid item xs={12} sm={12} md={6}>
        <Paper elevation={2} >
          <Toolbar sx={{ pl: { sm: 2 }, pr: { xs: 1, sm: 1 }, }} >
            <Typography
              sx={{ flex: '1 1 100%' }}
              variant="h4"
              component="div"
            >
              Users List
            </Typography>
            <UserCreateModal />
          </Toolbar>
          <UserTable />
        </Paper>
      </Grid>

    </Grid>
  )
}

export default UserList