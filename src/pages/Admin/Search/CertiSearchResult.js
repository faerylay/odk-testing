import React, { useState } from 'react'
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, IconButton } from '@mui/material';
import { IconPhoto } from '@tabler/icons'
import ActionModal from '../Modal/ActionModal';
import CertificateDelete from '../Certificate/CertificateDelete';

const CertiSearchResult = ({ certificates, loading, errors }) => {
  const [open, setOpen] = useState(false)
  return (
    <Box>
      {
        loading && !errors && (
          <Paper elevation={1} sx={{ width: '100%', height: 300, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Typography>Loading ....</Typography>
          </Paper>
        )
      }
      {!loading && !certificates.length && !errors && (
        <Paper elevation={1} sx={{ width: '100%', height: 300, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Typography>No Certificates Found ....</Typography>
        </Paper>
      )}
      {
        !loading && !errors && certificates.length > 0 && (
          <TableContainer component={Paper} elevation={3}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align='left'>List</TableCell>
                  <TableCell>Fullname</TableCell>
                  <TableCell>Years</TableCell>
                  <TableCell>Months</TableCell>
                  <TableCell>Amounts</TableCell>
                  <TableCell>Register</TableCell>
                  <TableCell>Image</TableCell>
                  <TableCell>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {
                  certificates.map((item, index) => (
                    <TableRow
                      key={item.id}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell align='left'>{index + 1}</TableCell>
                      <TableCell >{item.fullname}</TableCell>
                      <TableCell >{item.years}</TableCell>
                      <TableCell >{item.months}</TableCell>
                      <TableCell >{item.amounts}</TableCell>
                      <TableCell>{item.regNo}</TableCell>
                      <TableCell>
                        <IconButton onClick={() => setOpen(!open)}>
                          <IconPhoto color='gold' />
                        </IconButton>
                        {
                          open && <Box>
                            <img src={item.image} alt="..." width={300} height={200} />
                          </Box>
                        }
                      </TableCell>
                      <TableCell>
                        <Box sx={{ display: 'flex' }}>
                          <CertificateDelete imagePublicId={item.imagePublicId} certificateId={item.id} />
                          <ActionModal data={item} />
                        </Box>
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
        )
      }
    </Box>
  )
}

export default CertiSearchResult