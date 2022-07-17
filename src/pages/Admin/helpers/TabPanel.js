import React from 'react'
import { Box } from '@mui/material'
export function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}
const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <Box
      sx={{ width: '100%', height: '100%' }}
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 2 }}>
          {children}
        </Box>
      )}
    </Box>
  );
}

export default TabPanel

