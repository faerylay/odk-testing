import React, { useState } from 'react'
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Typography } from '@mui/material';

import { useQuery } from '@apollo/client';
import { FETCH_ALL_ACHIEVEMENTS } from '../../../graphql';
import PdfModal from '../Modal/PdfModal';
import AchievementDelete from '../Achievement/AchievementDelete';

const AchievementTable = () => {
  const [limit, setLimit] = useState(5);
  const { data: { achievements } = {}, loading, fetchMore } = useQuery(FETCH_ALL_ACHIEVEMENTS, {
    variables: {
      offset: 0,
      limit,
    }
  })

  const loadMore = () => {
    const currentLength = achievements?.achievements.length;
    fetchMore({
      variables: {
        offset: currentLength,
        limit: 6,
      },
    }).then(fetchMoreResult => {
      setLimit(currentLength + fetchMoreResult.data.achievements.achievements.length);
    });
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <TableContainer component={Paper} elevation={3}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align='left'>List</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>months</TableCell>
              <TableCell>PDF File</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              !loading && achievements?.achievements?.map((item, index) => (
                <TableRow
                  key={item.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell align='left'>{index + 1}</TableCell>
                  <TableCell>{item.author.fullName}</TableCell>
                  <TableCell>{item.months}</TableCell>
                  <TableCell><PdfModal data={item} /></TableCell>
                  <TableCell>
                    <AchievementDelete imagePublicId={item.imagePublicId} achievementId={item.id} />
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box sx={{ display: 'flex', justifyContent: 'center', py: 2 }}>
        {
          achievements?.achievements?.length !== achievements?.count ? (
            <Button variant='outlined' onClick={loadMore}>load more</Button>
          ) : (
            <Typography>All Data has Loaded...</Typography>
          )
        }
      </Box>

    </Box>
  )
}

export default AchievementTable