import React from 'react'
import { Box, Paper, Typography, Button } from '@mui/material'

import { Footer } from '../components/MainComponent';
import JotformEmbed from 'react-jotform-embed'

const RequestForm = () => {

  return (
    <Box sx={{ width: '100%', height: 'auto' }}>
      <Box sx={{ display: 'flex', justifyContent: 'center', height: 'auto', paddingBlock: 2 }}>
        <Paper elevation={3} sx={{ width: { xs: '100%', sm: '80%', md: '60%' }, display: 'flex', flexDirection: 'column', alignItems: 'center', alignContent: 'center', paddingInline: 1, paddingBlock: 3, border: 3, borderColor: '#FFD700' }} >
          <Button variant="outlined" color="primary" >
            REQUEST FORM
          </Button>
          <Typography color="gray" variant='h2' component="div" sx={{ paddingBlock: 2 }}> REQUEST FORM</Typography>
          <JotformEmbed src="https://form.jotformeu.com/212105374765050" />
        </Paper>
      </Box>
      <Footer />

    </Box>
  )
}

export default RequestForm