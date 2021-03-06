import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { Box, Button, Typography, Container, Paper, Skeleton } from '@mui/material';
import { useQuery } from '@apollo/client';

import Certificates from './Certificates';
import Achievements from './Achievements';
import { FETCH_USER } from '../../graphql'
import Anouncement from './Anouncement';
import { authAccess } from '../../auth'

const Profile = () => {
  const navigate = useNavigate()
  const { getUserId } = useParams()

  const [limit, setLimit] = useState(4);
  const { data: { getUser } = {}, loading, fetchMore } = useQuery(FETCH_USER, {
    variables: {
      getUserId,
      offset: 0,
      limit,
    }
  })

  useEffect(() => {
    if (authAccess()?.role !== 'User') {
      navigate('/home')
    }
  }, [navigate]);

  const logout = () => {
    localStorage.removeItem('profile')
    navigate('/login')
  }
  const user = authAccess()?.role === 'User';
  return (
    <Container maxWidth="lg" >
      {user && (
        <Box>
          <Anouncement anouncement={getUser?.user?.anouncement} />
          <Paper elevation={3} sx={{ border: 2, borderColor: "#FFD700" }}>
            <Box sx={{ width: '100%', alignSelf: 'center' }}>
              <Box sx={{ p: 2, overflow: 'auto' }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', paddingInline: 3, paddingBlock: 1, alignItems: 'center' }}>
                  <Typography variant="h3" sx={{ fontSize: { xs: 13, md: 17 } }}>Name - {getUser?.user?.fullName}</Typography>
                  <Button variant="contained" onClick={logout} >
                    <Typography>Logout</Typography>
                  </Button>
                </Box>
                {user && loading && (
                  <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Skeleton
                      animation="pulse"
                      style={{ width: '48%', height: 500, mb: 3 }}
                    />
                    <Skeleton
                      animation="pulse"
                      style={{ width: '48%', height: 500, mb: 3 }}
                    />
                  </Box>
                )}
                {!loading && <Achievements achievements={getUser?.user?.achievements} />}
                {!loading && <Certificates getUser={getUser} fetchMore={fetchMore} setLimit={setLimit} />}
              </Box>
            </Box>
          </Paper>
        </Box>
      )}
      {!user && (
        <Paper elevation={3} >
          <h1>Login</h1>
        </Paper>
      )}
    </Container>
  )
}

export default Profile