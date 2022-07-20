import React from 'react'
import { Box, Typography } from '@mui/material'

import { Worker, Viewer } from '@react-pdf-viewer/core';
import { getFilePlugin } from '@react-pdf-viewer/get-file';
import '@react-pdf-viewer/core/lib/styles/index.css';
import './styles.css'

const PdfViewer = ({ data }) => {

  const getFilePluginInstance = getFilePlugin({
    fileNameGenerator: () => {
      const fileName = data.image.substring(data.image.lastIndexOf('/') + 1);
      return `${fileName}`;
    },
  });

  const { DownloadButton } = getFilePluginInstance;
  return (
    <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.14.305/build/pdf.worker.min.js">
      <div className={+data.months > 6 ? 'box' : 'empty'}>
        <Box
          className="rpv-core__viewer"
          sx={{
            border: 2,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            borderColor: '#eee',
            display: 'flex',
            flexDirection: 'column',
            height: { xs: 380, sm: 600, md: 700 },
            width: '100%',
          }}
        >
          <Box
            sx={{
              alignItems: 'center',
              backgroundColor: 'gold',
              borderTopLeftRadius: 7,
              borderTopRightRadius: 7,
              display: 'flex',
              justifyContent: 'space-between',
              py: 2,
              px: 3,
              zIndex: 1
            }}
          >
            <DownloadButton />
            <Typography variant="h3">months - {data.months}</Typography>
          </Box>
          <Box sx={{ flex: 1, overflow: 'hidden', zIndex: 1 }}>
            <Viewer fileUrl={data.image} plugins={[getFilePluginInstance]} />
          </Box>
        </Box>

      </div>
    </Worker>
  )
}

export default PdfViewer