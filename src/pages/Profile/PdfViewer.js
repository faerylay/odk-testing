import React from 'react'
import { Box } from '@mui/material'

import { Worker, Viewer } from '@react-pdf-viewer/core';
import { getFilePlugin } from '@react-pdf-viewer/get-file';
import '@react-pdf-viewer/core/lib/styles/index.css';


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
      <Box
        className="rpv-core__viewer"
        sx={{
          border: 2,
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
          borderColor: 'gold',
          display: 'flex',
          flexDirection: 'column',
          height: { xs: 400, sm: 600, md: 700 },
          width: '100%',
        }}
      >
        <Box
          sx={{
            alignItems: 'center',
            backgroundColor: '#eeeeee',
            borderTopLeftRadius: 11,
            borderTopRightRadius: 11,
            display: 'flex',
            justifyContent: 'space-between',
            padding: '4px',
          }}
        >
          <DownloadButton />
          <h3>months - {data.months}</h3>
        </Box>
        <Box sx={{ flex: 1, overflow: 'hidden' }}>
          <Viewer fileUrl={data.image} plugins={[getFilePluginInstance]} />
        </Box>
      </Box>
    </Worker>
  )
}

export default PdfViewer