import React, { useState } from 'react'
import { Paper, Box, Divider, Typography, FormControlLabel, Switch } from '@mui/material'

const Anouncement = () => {
  const [checked, setChecked] = useState(true);


  return (
    <Paper elevation={checked ? 3 : 1} sx={{ my: 2, display: 'flex', flexDirection: 'column' }}>

      <Box sx={{ mt: !checked && -2, position: 'absolute', alignSelf: 'flex-end' }}>
        <FormControlLabel control={
          <Switch checked={checked} onChange={() => setChecked((prev) => !prev)} />
        } />
      </Box>
      {
        checked && (
          <Box sx={{ p: 2 }}>
            <Box sx={{ px: 1 }}>
              <Typography variant="h3" sx={{ pb: 1 }} >Anouncement</Typography>
              <Typography variant="span" color="black">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi cum eligendi porro laboriosam a, animi accusantium, amet vel praesentium blanditiis alias rerum culpa debitis dolor. Quas magni reprehenderit molestias quo?
              </Typography>
            </Box>
            <Divider sx={{ my: 2 }} />
            <Box sx={{ px: 1 }}>
              <Typography variant="h4" sx={{ pb: 1 }} >Information</Typography>
              <Typography variant="h5" color="GrayText">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi cum eligendi porro laboriosam a, animi accusantium, amet vel praesentium blanditiis alias rerum culpa debitis dolor. Quas magni reprehenderit molestias quo?
              </Typography>
            </Box>
          </Box>
        )
      }
    </Paper>
  )
}

export default Anouncement