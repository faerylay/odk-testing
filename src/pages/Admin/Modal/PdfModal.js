import React, { useState } from 'react'
import { IconButton, Dialog, Slide, Box, Paper, Typography } from '@mui/material'
import { IconX, IconTrophy } from '@tabler/icons'
import AchievementPDF from '../Achievement/AchievementPDF';


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const PdfModal = ({ data }) => {
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
          <Paper elevation={3} sx={{ width: { xs: '90%', sm: '50%' }, paddingBlock: 2, maxWidth: '100%' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingInline: 3 }}>
              <Typography variant='h4'>
                Achievement
              </Typography>
              <IconButton onClick={handleClose}>
                <IconX />
              </IconButton>
            </Box>
            <AchievementPDF data={data} />
          </Paper>
        </Box>
      </Dialog>
    </Box>
  )
}

export default PdfModal