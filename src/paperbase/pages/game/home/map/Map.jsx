import { Button, Toolbar } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import PropTypes from 'prop-types';
import React from 'react';
import Draggable from 'react-draggable';
import MiraHQ from '../../../../../img/maps/MiraHQ.png';
import Polus from '../../../../../img/maps/Polus.png';
import TheAirship from '../../../../../img/maps/TheAirship.png';
import TheSkeld from '../../../../../img/maps/TheSkeld.png';
import TabPanel from '../../../../components/TabPanel';

// eslint-disable-next-line no-unused-vars
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
  map: {
    display: 'inline-block',
    width: '100%',
    height: '100%',
  },
  img: {
    width: 25,
    minWidth: 20,
    maxWidth: 40,
    height: 'auto',
    cursor: 'move',
  },
  iconResetButton: {
    padding: 10,
    textAlign: 'center',
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
    playerColorList,
    playerIconCordinate,
    setPlayerIconCordinate,
    initState,
  } = props;

  const handleDrag = (e, data, color) => {
    console.log('start');
    console.log(e);
    console.log(data);
    console.log(color);
    console.log('end');

    setPlayerIconCordinate({
      ...playerIconCordinate,
      [color]: {
        x: data.x,
        y: data.y,
      },
    });

    console.log(playerIconCordinate[color]);
  };

  const handleChange = (event, newMap) => {
    setMap(newMap);
  };

  /* 
    ????????????????????????????????????
  */
  const playersIcon = playerColorList.map(
    (
      color // React.useMemo(() =>
    ) => (
      <Grid item xs='auto' key={color}>
        <Draggable
          position={playerIconCordinate[color]}
          onDrag={(e, data) => handleDrag(e, data, color)}
          // bounds='parent'
        >
          <img src={playerColorImageList[color]} className={classes.img} />
        </Draggable>
      </Grid>
    )
  );
  // ,[0]);

  /* 
    ????????????????????????????????????????????????????????????????????????????????????????????????
  */
  const playersIconCordinateReset = () => {
    // ???????????????
    setPlayerIconCordinate({
      ...playerIconCordinate,
      ...initState.playerIconCordinate,
    });
  };

  return (
    <React.Fragment>
      <Paper className={classes.paper}>
        <AppBar
          className={classes.titleBar}
          position='static'
          color='default'
          elevation={0}
        >
          <Toolbar>
            <Tabs
              value={map}
              onChange={handleChange}
              aria-label='simple tabs example'
              indicatorColor='green'
              textColor='primary'
              variant='scrollable'
              scrollButtons='on'
            >
              <Tab label='The Skeld' {...a11yProps(0)} />
              <Tab label='MiraHQ' {...a11yProps(1)} />
              <Tab label='Polus' {...a11yProps(2)} />
              <Tab label='The Airship' {...a11yProps(3)} />
            </Tabs>
          </Toolbar>
        </AppBar>
        <div className={classes.contentWrapper}>
          {/* ??????????????????????????? */}
          <TabPanel value={map} index={0} className={classes.mapPanel}>
            <img src={TheSkeld} art={map} className={classes.map} />
          </TabPanel>
          <TabPanel value={map} index={1} className={classes.mapPanel}>
            <img src={MiraHQ} art={map} className={classes.map} />
          </TabPanel>
          <TabPanel value={map} index={2} className={classes.mapPanel}>
            <img src={Polus} art={map} className={classes.map} />
          </TabPanel>
          <TabPanel value={map} index={3} className={classes.mapPanel}>
            <img src={TheAirship} art={map} className={classes.map} />
          </TabPanel>

          {/* ????????????????????????????????? */}
          <Grid
            container
            xs='auto'
            spacing={1}
            alignItems='center'
            justify='center'
          >
            {playersIcon}
          </Grid>

          {/* 
            ?????????????????????
          */}
          <Grid
            container
            xs
            alignItems='center'
            justify='center'
            className={classes.iconResetButton}
          >
            <Grid item xs>
              <Button
                variant='contained'
                color='secondary'
                size='small'
                onClick={playersIconCordinateReset}
              >
                Icon Reset
              </Button>
            </Grid>
          </Grid>
        </div>
      </Paper>
    </React.Fragment>
  );
}

Map.propTypes = {
  classes: PropTypes.object.isRequired,
  map: PropTypes.string.isRequired,
  setMap: PropTypes.func.isRequired,
  playerColorImageList: PropTypes.object.isRequired,
  playerColorList: PropTypes.object.isRequired,
  playerIconCordinate: PropTypes.object.isRequired,
  setPlayerIconCordinate: PropTypes.func.isRequired,
  initState: PropTypes.object.isRequired,
};

export default withStyles(styles)(Map);
