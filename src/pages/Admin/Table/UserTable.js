import React, { useState } from 'react'
import { Button, Typography, Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { useQuery } from '@apollo/client';
import { FETCH_ALL_USERS } from '../../../graphql';
import ActionModal from '../Modal/ActionModal';
import UserEditModal from '../Modal/UserEditModal';
import AchievementModal from '../Modal/AchievementModal';

const UserTable = () => {
  const [limit, setLimit] = useState(6);
  const { data: { getUsers } = {}, loading, fetchMore } = useQuery(FETCH_ALL_USERS, {
    variables: {
      offset: 0,
      limit,
    }
  })

  const loadMore = () => {
    const currentLength = getUsers?.users.length;
    fetchMore({
      variables: {
        offset: currentLength,
        limit: 6,
      },
    }).then(fetchMoreResult => {
      setLimit(currentLength + fetchMoreResult.data.getUsers.users.length);
    });
  };

  if (loading) return <Typography>loading...</Typography>;
  if (!loading && !getUsers?.users?.length) return <Typography>No Data Yet...</Typography>;

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
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
              !loading && getUsers?.users?.map((item, index) => (
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
      <Box sx={{ display: 'flex', justifyContent: 'center', py: 2 }}>
        {
          getUsers?.users?.length !== getUsers?.count ? (
            <Button variant='outlined' onClick={loadMore}>load more</Button>
          ) : (
            <Typography>All Data has Loaded...</Typography>
          )
        }
      </Box>
    </Box>
  )
}

export default UserTable