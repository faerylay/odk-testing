import React from 'react';
import { Tabs, Tab, Box, useTheme, useMediaQuery } from '@mui/material';
import { IconUsers, IconPhoto, IconTrophy } from '@tabler/icons';

import Achievement from './Achievement';
import Certificate from './Certificate';
import UserList from './User';
import TabPanel, { a11yProps } from './helpers/TabPanel';

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);
  const theme = useTheme()
  const matchDownSm = useMediaQuery(theme.breakpoints.down('md'));
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ display: 'block' }}>
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' } }}>
        <Tabs
          orientation={matchDownSm ? 'horizontal' : 'vertical'}
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs"
          sx={{ borderRight: 1, borderColor: 'divider' }}
        >
          <Tab icon={<IconUsers />}  {...a11yProps(0)} />
          <Tab icon={<IconPhoto />} {...a11yProps(1)} />
          <Tab icon={<IconTrophy />} {...a11yProps(2)} />
        </Tabs>
        <TabPanel value={value} index={0}>
          <UserList />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Certificate />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Achievement />
        </TabPanel>
      </Box>
    </Box>
  );
}
