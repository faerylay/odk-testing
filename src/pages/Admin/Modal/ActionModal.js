import React, { useState } from 'react'
import { IconButton, Dialog, Slide, Box, Paper, Typography } from '@mui/material'
import { IconPencil, IconX, IconReceipt } from '@tabler/icons'
import CertificateCreate from '../Certificate/CertificateCreate';
import CertificateUpdate from '../Certificate/CertificateUpdate';


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ActionModal = ({ data }) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <IconButton onClick={handleClickOpen}>
        {data.__typename === 'UserPayload' ? <IconReceipt color="lightgreen" /> : <IconPencil color="skyblue" />}
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
                {data.__typename === 'UserPayload' ? 'Create Certificate' : 'Update Certificate'}
              </Typography>
              <IconButton onClick={handleClose}>
                <IconX />
              </IconButton>
            </Box>
            {data.__typename === 'UserPayload' ? (
              <CertificateCreate userId={data.id} fullName={data.fullName} handleClose={handleClose} />
            ) : (
              <CertificateUpdate data={data} handleClose={handleClose} />
            )}

          </Paper>
        </Box>
      </Dialog>
    </div>
  )
}

export default ActionModal