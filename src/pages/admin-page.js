import React from 'react';

import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

/** include Custom Comps */
import {Applications} from '../components/applications';
import {Users} from '../components/users';
import {TicketList} from '../components/tickets';

function TabPanel(props) {
  const {children, value, index, ...other} = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{p: 3}}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export const AdminPage = ({session, isAdmin}) => {
  const [value, setValue] = React.useState(0);
  const handleTabsChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{width: '100%'}}>
      <Box sx={{borderBottom: 1, borderColor: 'divider', display: 'flex', justifyContent: 'center'}}>
        <Tabs value={value} onChange={handleTabsChange} variant="scrollable" scrollButtons="auto"
              aria-label="basic tabs example">
          <Tab label="Tickets" {...a11yProps(0)} />
          <Tab label="Applications" {...a11yProps(1)} />
          <Tab label="Users" {...a11yProps(2)} />
          <Tab label="My Tasks in work" {...a11yProps(3)}/>
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <TicketList session={session} isAdmin={isAdmin} worklist={false}/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Applications/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Users isAdmin={isAdmin}/>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <TicketList session={session} isAdmin={isAdmin} worklist={true}/>
      </TabPanel>
    </Box>
  );
};