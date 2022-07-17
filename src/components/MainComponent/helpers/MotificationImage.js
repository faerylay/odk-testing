import React from 'react'
import { Box, ImageList, ImageListItem, Paper, useMediaQuery, useTheme } from '@mui/material'
import useWindowDimensions from '../../../hooks/useWindowDimensions';
import { show_1, show_2, show_3, show_4 } from '../../../assets/images'
const itemData = [show_1, show_2, show_3, show_4, show_1, show_2, show_3, show_4]


const MotificationImage = () => {
  const theme = useTheme()
  const { width } = useWindowDimensions()
  const matchDownMd = useMediaQuery(theme.breakpoints.down('md'));


  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBlock: 1 }}>
      <Paper elevation={3} sx={{ width: matchDownMd ? width / 1.1 : width / 1.5, height: 'auto', padding: 1, borderRadius: 2, border: 1, borderColor: '#FFD700' }}>
        <ImageList variant="masonry" cols={matchDownMd ? 1 : 2} gap={8}>
          {itemData.map((item, index) => (
            <ImageListItem key={index.toString()}>
              <img
                src={item}
                srcSet={item}
                alt={item}
                loading="lazy"
                width='100%'
                height="100%"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Paper>
    </Box>
  )
}

export default MotificationImage