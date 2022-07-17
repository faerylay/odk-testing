import React from 'react'
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';
import { ActionModal, UserEditModal, AchievementModal } from '../Modal';

const UserSearchResult = ({ users, loading }) => {
  if (loading) {
    return (
      <Paper elevation={1} sx={{ width: '100%', height: 300, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Typography>Loading ....</Typography>
      </Paper>
    )
  }
  if (!loading && !users.length) {
    return (
      <Paper elevation={1} sx={{ width: '100%', height: 300, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Typography>Not User Found ....</Typography>
      </Paper>
    )
  }
  return (
    <Box>
      {
        !loading && users.length > 0 && (
          <TableContainer component={Paper} elevation={3}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align='left'>Action</TableCell>
                  <TableCell align='left'>List</TableCell>
                  <TableCell>Fullname</TableCell>
                  <TableCell>Username ID</TableCell>
                  <TableCell>Birthday</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {
                  users.map((item, index) => (
                    <TableRow
                      key={item.id}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell align='left'>
                        <Box sx={{ display: 'flex' }}>
                          <ActionModal data={item} />
                          <UserEditModal data={item} />
                          <AchievementModal data={item} />
                        </Box>
                      </TableCell>
                      <TableCell align='left'>{index + 1}</TableCell>
                      <TableCell component="th" scope="row">{item.fullName}</TableCell>
                      <TableCell>{item.username}</TableCell>
                      <TableCell>{item?.dateOfBirth === null ? '' : item?.dateOfBirth}</TableCell>
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

export default UserSearchResult