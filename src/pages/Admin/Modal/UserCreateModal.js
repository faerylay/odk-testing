import React, { useState } from 'react'
import { IconButton, Button, Dialog, Slide, Box, Paper, Typography } from '@mui/material'
import { IconX, IconUserPlus } from '@tabler/icons'
import UserCreate from '../User/UserCreate'

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const UserCreateModal = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen} startIcon={<IconUserPlus size={20} color="skyblue" />}>
        User
      </Button>

      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <Box sx={{ height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Paper elevation={3} sx={{ width: { xs: '90%', sm: 380 }, paddingBlock: 2, maxWidth: '100%' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingInline: 3 }}>
              <Typography variant='h4'> User Create</Typography>
              <IconButton onClick={handleClose}>
                <IconX />
              </IconButton>
            </Box>
            <UserCreate handleClose={handleClose} />
          </Paper>
        </Box>
      </Dialog>
    </div>
  )
}

export default UserCreateModal