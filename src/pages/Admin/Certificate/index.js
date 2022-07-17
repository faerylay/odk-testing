import React from 'react'
import { Paper, Toolbar, Typography, Grid } from '@mui/material'
import CertificateTable from '../Table/CertificateTable'
import SearchCertificate from '../Search/SearchCertificate'

const Certificate = () => {
  return (
    <Grid container spacing={2} sx={{ display: 'flex', flexDirection: 'row' }}>
      <Grid item xs={12} sm={12} md={6}>
        <Paper elevation={2} sx={{ paddingBlock: 1, background: '#f1f1f1' }}>
          <Toolbar sx={{ pl: { sm: 2 }, pr: { xs: 1, sm: 1 } }} >
            <Typography
              sx={{ flex: '1 1 100%' }}
              variant="h4"
              component="div"
            >
              Search Certificate By Register No
            </Typography>
          </Toolbar>
          <SearchCertificate />
        </Paper>
      </Grid>
      <Grid item xs={12} sm={12} md={6}>
        <Paper elevation={2} sx={{ paddingBlock: 1 }}>
          <Toolbar sx={{ pl: { sm: 2 }, pr: { xs: 1, sm: 1 } }} >
            <Typography
              sx={{ flex: '1 1 100%' }}
              variant="h4"
              component="div"
            >
              Certificates List
            </Typography>
          </Toolbar>
          <CertificateTable />
        </Paper>
      </Grid>

    </Grid >
  )
}

export default Certificate