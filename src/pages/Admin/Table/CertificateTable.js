import React, { useState } from 'react'
import { Button, Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton, Typography } from '@mui/material';
import { useQuery } from '@apollo/client';
import { IconPhoto } from '@tabler/icons'
import { FETCH_ALL_CERTIFICATES } from '../../../graphql';
import CertificateDelete from '../Certificate/CertificateDelete';
import { ActionModal } from '../Modal';

const CertificateTable = () => {
  const [open, setOpen] = useState(false)
  const [limit, setLimit] = useState(6)

  const { data: { certificates } = {}, loading, fetchMore } = useQuery(FETCH_ALL_CERTIFICATES, {
    variables: {
      offset: 0,
      limit,
    }
  })
  const loadMore = () => {
    const currentLength = certificates?.certificates.length;
    fetchMore({
      variables: {
        offset: currentLength,
        limit: 6,
      },
    }).then(fetchMoreResult => {
      setLimit(currentLength + fetchMoreResult.data.certificates.certificates.length);
    });
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
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
              !loading && certificates?.certificates?.map((item, index) => (
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
      <Box sx={{ display: 'flex', justifyContent: 'center', py: 2 }}>
        {
          certificates?.certificates?.length !== certificates?.count ? (
            <Button variant='outlined' onClick={loadMore}>load more</Button>
          ) : (
            <Typography>All Data has Loaded...</Typography>
          )
        }
      </Box>
    </Box>
  )
}

export default CertificateTable