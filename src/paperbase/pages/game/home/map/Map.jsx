import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TabPanel from '../../../../components/TabPanel';
import TheSkeld from '../../../../../img/maps/TheSkeld.png';
import MiraHQ from '../../../../../img/maps/MiraHQ.png';
import Polus from '../../../../../img/maps/Polus.png';
import TheAirship from '../../../../../img/maps/TheAirship.png';
import { Toolbar} from '@material-ui/core';


const styles = (theme) => ({
  paper: {
    maxWidth: 936,
    margin: 'auto',
    overflow: 'hidden',
  },
  titleBar: {
    borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
  },
  block: {
    display: 'block',
  },
  contentWrapper: {
    // margin: '40px 16px',
  },
  mapPanel: {
    width: '100%',
    height: '100%',
  },
  map:{
    display: 'inline-block',
    width: '100%',
    height: '100%',
  },
  img :{
    maxWidth: 40,
    height: 'auto',
  },
});

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}
function Map(props) {
  const {
    classes,
    map,
    setMap,
    playerColorImageList,
    playerColorList
  } = props;

  const handleChange = (event, newMap) => {
    setMap(newMap);
  };

  /* 
    プレイヤーのアイコン領域
  */
  const playersIcon = playerColorList.map((color) => 
    
    <Grid item xs={1}>
      <img src={playerColorImageList[color]} className={classes.img}/>
    </Grid>
  );

  return (
    <React.Fragment>
    <Paper className={classes.paper}>
      <AppBar className={classes.titleBar} position="static" color="default" elevation={0}>
        <Toolbar>
        <Tabs
          value={map}
          onChange={handleChange}
          aria-label="simple tabs example"
          indicatorColor="green"
          textColor="primary"
          variant="scrollable"
          scrollButtons="on"
        >
          <Tab label="The Skeld" {...a11yProps(0)} />
          <Tab label="MiraHQ" {...a11yProps(1)} />
          <Tab label="Polus" {...a11yProps(2)} />
          <Tab label="The Airship" {...a11yProps(3)} />
        </Tabs>
        </Toolbar>
      </AppBar>
      <div className={classes.contentWrapper}>
      <TabPanel value={map} index={0} className={classes.mapPanel}>
        <img src={TheSkeld} art={map} className={classes.map}/>
      </TabPanel>
      <TabPanel value={map} index={1} className={classes.mapPanel}>
        <img src={MiraHQ} art={map} className={classes.map}/>
      </TabPanel>
      <TabPanel value={map} index={2} className={classes.mapPanel}>
        <img src={Polus} art={map} className={classes.map}/>
      </TabPanel>
      <TabPanel value={map} index={3} className={classes.mapPanel}>
        <img src={TheAirship} art={map} className={classes.map}/>
      </TabPanel>
       </div>
    </Paper>

    <br />

    {/* 
        プレイヤーアイコン
    */}
      <Paper className={classes.paper}>
        <div className={classes.contentWrapper}>
          
          <h3>Players Icon</h3>
          
          <Grid container xs={12} alignItems="center" justify="center">
            {playersIcon}
          </Grid>
        </div>
      </Paper>
      </React.Fragment>
  );
}

Map.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Map);
