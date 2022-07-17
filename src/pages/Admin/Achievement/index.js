import React from 'react'
import { Paper, Toolbar, Typography, Grid } from '@mui/material'
import AchievementTable from '../Table/AchievementTable'

const Achievement = () => {
  return (
    <Grid container spacing={2} sx={{ display: 'flex', flexDirection: { xs: 'column-reverse', md: 'row' } }}>
      <Grid item xs={12} sm={12} md={8}>
        <Paper elevation={2} sx={{ paddingBlock: 1 }}>
          <Toolbar sx={{ pl: { sm: 2 }, pr: { xs: 1, sm: 1 } }} >
            <Typography
              sx={{ flex: '1 1 100%' }}
              variant="h4"
              component="div"
            >
              Achievements List
            </Typography>
          </Toolbar>
          <AchievementTable />
        </Paper>
      </Grid>
    </Grid >
  )
}

export default Achievement