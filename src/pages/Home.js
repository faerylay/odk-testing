import React from 'react';
import { Box, Button } from '@mui/material';

import CoverImage from '../assets/images/CoverImage_1.png';

import useWindowDimensions from '../hooks/useWindowDimensions';
import { Footer, CoverSwiper } from '../components/MainComponent';
// import Youtube from '../components/MainComponent/helpers/Youtube';
import MotificationImage from '../components/MainComponent/helpers/MotificationImage';

const Home = () => {
  const { width, height } = useWindowDimensions()
  return (
    <Box>
      <Box sx={{ width, height: { md: height / 1.4, xs: height / 3 } }}>
        <img src={CoverImage} alt="..." width="100%" height="100%" />
      </Box>
      <CoverSwiper />
      <Box sx={{ marginBlock: 5, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Button variant="outlined" color="primary" sx={{ marginBlock: { md: 3, xs: 0 } }}>
          REQUEST FORM
        </Button>
      </Box>
      {/* <Youtube /> */}
      <MotificationImage />
      <Footer />
    </Box>
  )
}

export default Home