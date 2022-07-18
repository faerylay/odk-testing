import React, { useState } from 'react'
import { IconButton, Dialog, Slide, Box, Paper, Typography } from '@mui/material'
import { IconX, IconTrophy } from '@tabler/icons'
import AchievementCreate from '../Achievement/AchievementCreate';


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const AchievementModal = ({ data }) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Box>
      <IconButton onClick={handleClickOpen}>
        <IconTrophy color="gold" />
      </IconButton>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <Box sx={{ height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Paper elevation={3} sx={{ width: { xs: '90%', sm: 380 }, paddingBlock: 2, maxWidth: '100%' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingInline: 3 }}>
              <Typography variant='h4'>
                Create Achievement
              </Typography>
              <IconButton onClick={handleClose}>
                <IconX />
              </IconButton>
            </Box>
            <AchievementCreate data={data} handleClose={handleClose} />
          </Paper>
        </Box>
      </Dialog>
    </Box>
  )
}

export default AchievementModal