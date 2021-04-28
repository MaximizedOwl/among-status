import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Draggable from 'react-draggable';
import TabPanel from '../../../../components/TabPanel';
import TheSkeld from '../../../../../img/maps/TheSkeld.png';
import MiraHQ from '../../../../../img/maps/MiraHQ.png';
import Polus from '../../../../../img/maps/Polus.png';
import TheAirship from '../../../../../img/maps/TheAirship.png';
import { Button, Toolbar} from '@material-ui/core';


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
    width: 25,
    minWidth: 20,
    maxWidth: 40,
    height: 'auto',
    cursor: 'move',
  },
  iconResetButton: {
    padding: 10,
    textAlign: 'center',
  }
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
    initState
  } = props;

  const handleDrag = (e, data, color) => {

    console.log('start');
    console.log(e);
    console.log(data);
    console.log(color);
    console.log('end');

    setPlayerIconCordinate({...playerIconCordinate,
      [color]: {
        x: data.x,
        y: data.y,
      }
    });

    console.log(playerIconCordinate[color]);


  };

  const handleChange = (event, newMap) => {
    setMap(newMap);
  };

  /* 
    プレイヤーのアイコン領域
  */
  const playersIcon = // React.useMemo(() => 
    
    playerColorList.map((color) => 
    
    <Grid item xs='auto'>  
      <Draggable
        position={playerIconCordinate[color]}
        onDrag={(e,data) => handleDrag(e, data, color)}
        // bounds='parent'
      >
        <img src={playerColorImageList[color]} className={classes.img}/>
      </Draggable>    
    </Grid> 
    
    );
  // ,[0]);

  /* 
    プレイヤーのアイコンリセット関する全ての状態に初期値を設定する。
  */

  const playersIconCordinateReset = () => {

    // 初期値設定
    setPlayerIconCordinate({...playerIconCordinate, ...initState.playerIconCordinate});
  };

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

          {/* タブ（マップ）領域 */}
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

          {/* プレイヤーアイコン領域 */}
          <Grid container xs='auto' spacing={1} alignItems="center" justify="center">
            {playersIcon}
          </Grid>
          
          {/* 
            リセットボタン
          */}
          <Grid container xs alignItems="center" justify="center" className={classes.iconResetButton}>
            <Grid item xs>
              <Button
                variant="contained"
                color="secondary"
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
};

export default withStyles(styles)(Map);
