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
          border: 1,
          borderColor: '#ddd',
          display: 'flex',
          flexDirection: 'column',
          height: 700,
        }}
      >
        <Box
          sx={{
            alignItems: 'center',
            backgroundColor: '#eeeeee',
            borderBottom: 1,
            borderBottomColor: '#ddd',
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