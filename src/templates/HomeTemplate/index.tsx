import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Marketplace } from '../../pages/Home/Marketplace';
import { Button } from '@mui/material';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      // style={{ background: 'red' }}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const HomeTemplate = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100vw', height: '100vh' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider', display: 'flex', justifyContent: 'space-between', padding: 2 }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="NFT Marketplace" {...a11yProps(0)} />
          <Tab label="NFT Influencers" {...a11yProps(1)} />
          <Tab label="NFT Podcasts" {...a11yProps(2)} />
        </Tabs>
        <Button variant='contained' href='/admin'>Admin</Button>
      </Box>
      <TabPanel value={value} index={0}>
        <Marketplace />
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </Box>
  );
}

export { HomeTemplate }