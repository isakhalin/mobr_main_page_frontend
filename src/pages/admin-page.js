import React from 'react';

import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

/** include Custom Comps */
import {Applications} from '../components/applications'; // Компонент с формами заявок (апликации)

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

export const AdminPage = () => {
    const [value, setValue] = React.useState(0);

    const handleTabsChange = (event, newValue) => {
        setValue(newValue);
    };


    return (
        <Box sx={{width: '100%'}}>
            <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
                <Tabs value={value} onChange={handleTabsChange} aria-label="basic tabs example">
                    <Tab label="Users" {...a11yProps(0)} />
                    <Tab label="Tickets" {...a11yProps(1)} />
                    <Tab label="Applications" {...a11yProps(2)} />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                Users
            </TabPanel>
            <TabPanel value={value} index={1}>
                Tickets
            </TabPanel>
            <TabPanel value={value} index={2}>
                <Applications />
            </TabPanel>
        </Box>
    );
};