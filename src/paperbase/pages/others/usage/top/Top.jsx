import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TabPanel from '../../../../components/TabPanel';
import { Toolbar, Typography } from '@material-ui/core';
import Basic from './basic/Basic';

const styles = (theme) => ({
  paper: {
    maxWidth: 936,
    margin: 'auto',
    overflow: 'hidden',
  },
  contentWrapper: {
    margin: '40px 16px',
  },
});

function Top(props) {
  const { classes } = props;

  return (
    <Paper className={classes.paper}>
      <div className={classes.contentWrapper}>
        <Basic />
       </div>
    </Paper>
  );
}

Top.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Top);
