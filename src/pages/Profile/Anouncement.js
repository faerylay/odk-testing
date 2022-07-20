import React, { useState } from 'react'
import { Paper, Box, Divider, Typography, IconButton } from '@mui/material'
import { IconArrowLeft, IconArrowUp } from '@tabler/icons'

const Anouncement = () => {
  const [open, setOpen] = useState(true)
  return (
    <Paper elevation={open && 3} sx={{ my: 2, display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ mt: !open && -2, position: 'absolute', alignSelf: 'flex-end' }}>
        <IconButton color="primary" onClick={() => setOpen(!open)}>
          {open ? <IconArrowUp /> : <IconArrowLeft />}
        </IconButton>
      </Box>
      {
        open && (
          <Box sx={{ p: 2 }}>
            <Box sx={{ px: 1 }}>
              <Typography variant="h3" sx={{ pb: 1 }} >Anouncement</Typography>
              <Typography variant="h5" color="black">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi cum eligendi porro laboriosam a, animi accusantium, amet vel praesentium blanditiis alias rerum culpa debitis dolor. Quas magni reprehenderit molestias quo?
              </Typography>
            </Box>
            <Divider sx={{ my: 2 }} />
            <Box sx={{ px: 1 }}>
              <Typography variant="h3" sx={{ pb: 1 }} >Information</Typography>
              <Typography variant="h5" color="grey">
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