import React from 'react';
import { Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import CoverImage from '../assets/images/CoverImage_1.png';

import useWindowDimensions from '../hooks/useWindowDimensions';
import { Footer, CoverSwiper } from '../components/MainComponent';
import Youtube from '../components/MainComponent/helpers/Youtube';
import MotificationImage from '../components/MainComponent/helpers/MotificationImage';

const Home = () => {
  const navigate = useNavigate()
  const { width, height } = useWindowDimensions()
  const youtube = [
    { name: 'https://www.youtube.com/watch?v=HZoVj7xcWxo&t=891s' },
    { name: '"https://www.youtube.com/watch?v=gXxiRwWmpWI"' }
  ]
  return (
    <Box>
      <Box sx={{ width, height: { md: height / 1.4, xs: height / 3 } }}>
        <img src={CoverImage} alt="..." width="100%" height="100%" />
      </Box>
      <CoverSwiper />
      <Box sx={{ marginBlock: 5, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Button onClick={() => navigate('/request_form')} variant="outlined" color="primary" sx={{ marginBlock: { md: 3, xs: 0 } }}>
          REQUEST FORM
        </Button>
      </Box>
      {
        youtube.map(data => <Youtube key={data.name} youtubeUrl={data.name} />)
      }
      <MotificationImage />
      <Footer />
    </Box>
  )
}

export default Home