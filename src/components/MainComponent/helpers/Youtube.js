import React from 'react'
import { Paper, Box, useTheme, useMediaQuery } from '@mui/material'
import ReactPlayer from 'react-player'

import useWindowDimensions from '../../../hooks/useWindowDimensions';

const Youtube = () => {
  const theme = useTheme()
  const { width, height } = useWindowDimensions()
  const matchDownMd = useMediaQuery(theme.breakpoints.down('md'));


  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBlock: 3 }}>
      <Paper elevation={5} sx={{ width: matchDownMd ? width / 1.1 : width / 1.5, height: matchDownMd ? height / 2 : height / 1.06 }}>
        <ReactPlayer
          controls={true}
          url={"https://www.youtube.com/watch?v=HZoVj7xcWxo&t=891s"}
          config={{
            youtube: {
              playerVars: {
                origin: 'https://localhost:3000/home',
                showinfo: 1
              }
            }
          }}
          playing={false}
          volume={1}
          width={'100%'}
          height={'100%'}
        />
      </Paper>
    </Box>
  )
}

export default Youtube