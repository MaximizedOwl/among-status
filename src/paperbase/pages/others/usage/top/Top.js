import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TabPanel from '../../../../components/TabPanel';
import { Toolbar, Typography } from '@material-ui/core';

const styles = (theme) => ({
  paper: {
    maxWidth: 936,
    margin: 'auto',
    overflow: 'hidden',
  },
  titleBar: {
    borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
  },
  searchInput: {
    fontSize: theme.typography.fontSize,
  },
  block: {
    display: 'block',
  },
  addUser: {
    marginRight: theme.spacing(1),
  },
  contentWrapper: {
    margin: '40px 16px',
  },
  mapPanel: {
    width: '100%',
    height: '100%',
  },
  map:{
    display: 'inline-block',
    width: '100%',
    height: '100%',
  }
});

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}
function Top(props) {
  const { classes } = props;

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper className={classes.paper}>
      <AppBar className={classes.titleBar} position="static" color="default" elevation={0}>
        <Toolbar>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
          indicatorColor="green"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
        >
          <Tab label="基本的な使い方" {...a11yProps(0)} />
          <Tab label="「Game」の見方" {...a11yProps(1)} />
          <Tab label="その他" {...a11yProps(2)} />
        </Tabs>
        </Toolbar>
      </AppBar>
      <div className={classes.contentWrapper}>
      <TabPanel value={value} index={0} className={classes.mapPanel}>
        <Typography art={value} className={classes.map}>基本的な使い方</Typography>
      </TabPanel>
      <TabPanel value={value} index={1} className={classes.mapPanel}>
        <Typography art={value} className={classes.map}>「Game」の見方</Typography>
      </TabPanel>
      <TabPanel value={value} index={2} className={classes.mapPanel}>
        <Typography art={value} className={classes.map}>その他</Typography>
      </TabPanel>
       </div>
    </Paper>
  );
}

Top.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Top);
