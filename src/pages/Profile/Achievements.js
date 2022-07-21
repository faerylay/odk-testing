import React from 'react'
import { ImageList, useTheme, useMediaQuery } from '@mui/material'
import PdfViewer from './PdfViewer';

const Achievements = ({ achievements }) => {
  const theme = useTheme()
  const matchDownMd = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <ImageList cols={matchDownMd ? 1 : 2} gap={8}>
      {achievements && achievements?.map(item => <PdfViewer data={item} key={item.id} />)}
      {!achievements && <Typography>loading...</Typography>}
    </ImageList>
  )
}


export default Achievements

