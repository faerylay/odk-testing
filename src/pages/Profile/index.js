import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { Box, Button, Typography, Container, Paper } from '@mui/material';
import { useQuery } from '@apollo/client';

import jwt_decode from 'jwt-decode'
import Certificates from './Certificates';
import Achievements from './Achievements';
import Anouncement from './Anouncement';

import { FETCH_USER } from '../../graphql'

const Profile = () => {
  const [limit, setLimit] = useState(4);
  const { getUserId } = useParams()
  const { data: { getUser } = {}, loading, fetchMore } = useQuery(FETCH_USER, {
    variables: {
      getUserId,
      offset: 0,
      limit,
    }
  })

  const token = localStorage.getItem('profile')
  const navigate = useNavigate()
  const [user, setUser] = useState(false);

  useEffect(() => {
    if (token) {
      const decoded = jwt_decode(token);
      if (decoded.role !== 'User') {
        navigate('/home')
      }
      setUser(decoded.role === 'User');
    }
  }, [token, navigate]);

  // const { height } = useWindowDimensions()
  // const theme = useTheme()
  // const matchDownMd = useMediaQuery(theme.breakpoints.down('md'));
  const logout = () => {
    localStorage.removeItem('profile')
    navigate('/login')
  }
  return (
    <Container maxWidth="lg" >
      {user && (
        <Box>
          <Anouncement />
          <Paper elevation={3} sx={{ border: 2, borderColor: "#FFD700" }}>
            <Box sx={{ width: '100%', alignSelf: 'center' }}>
              <Box sx={{ p: 2, overflow: 'auto' }}>

                <Box sx={{ display: 'flex', justifyContent: 'space-between', paddingInline: 3, paddingBlock: 1 }}>
                  <Typography variant="h3">Name - {getUser?.user?.fullName}</Typography>
                  <Button variant="outlined" sx={{ border: 2, borderColor: '#fff' }} onClick={logout} >
                    <Typography variant='h3'>Logout</Typography>
                  </Button>
                </Box>
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