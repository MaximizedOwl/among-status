import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import HelpIcon from '@material-ui/icons/Help';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import TabPanel from '../../../components/TabPanel';
import Toolbar from '@material-ui/core/Toolbar';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Top from './top/Top';
import Players from './players/Players';
import Map from './map/Map';


const lightColor = 'rgba(255, 255, 255, 0.7)';

const styles = (theme) => ({
  main: {
    flex: 1,
    padding: theme.spacing(6, 4),
    background: '#eaeff1',
  },
  secondaryBar: {
    zIndex: 0,
  },
  menuButton: {
    marginLeft: -theme.spacing(1),
  },
  iconButtonAvatar: {
    padding: 4,
  },
  link: {
    textDecoration: 'none',
    color: lightColor,
    '&:hover': {
      color: theme.palette.common.white,
    },
  },
  button: {
    borderColor: lightColor,
  },
});

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}



function Home(props) {
  
  const { classes, onDrawerToggle } = props;

  /* 
    タブの制御と状態管理
  */
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // ユーザー総合状態
  // const [playerState, setPlayertState] = React.useState({
  //   red: {
  //     isExist: true,
  //     isDead: false,
  //     isUsedEMRight: false,
  //     img: Red,
  //   },
  //   blue: {
  //     isExist: true,
  //     isDead: false,
  //     isUsedEMRight: false,
  //     img: Blue,
  //   },
  //   green: {
  //     isExist: true,
  //     isDead: false,
  //     isUsedEMRight: false,
  //     img: Green,
  //   },
  //   pink: {
  //     isExist: true,
  //     isDead: false,
  //     isUsedEMRight: false,
  //     img: Pink,
  //   },
  //   orange: {
  //     isExist: true,
  //     isDead: false,
  //     isUsedEMRight: false,
  //     img: Orange,
  //   },
  //   yellow: {
  //     isExist: true,
  //     isDead: false,
  //     isUsedEMRight: false,
  //     img: Yellow,
  //   },
  //   black: {
  //     isExist: true,
  //     isDead: false,
  //     isUsedEMRight: false,
  //     img: Black,
  //   },
  //   white: {
  //     isExist: true,
  //     isDead: false,
  //     isUsedEMRight: false,
  //     img: White,
  //   },
  //   purple: {
  //     isExist: true,
  //     isDead: false,
  //     isUsedEMRight: false,
  //     img: Purple,
  //   },
  //   brown: {
  //     isExist: true,
  //     isDead: false,
  //     isUsedEMRight: false,
  //     img: Brown,
  //   },
  //   cyan: {
  //     isExist: true,
  //     isDead: false,
  //     isUsedEMRight: false,
  //     img: Cyan,
  //   },
  //   lime: {
  //     isExist: true,
  //     isDead: false,
  //     isUsedEMRight: false,
  //     img: Lime,
  //   }
  // });

  /* 
    キルクールダウンタイムの時間に関する記述
  */
  // 状態生成
  const [killCooldownTime, setKillCooldownTime] = React.useState('');

  // キルクールタイム時間の配列を作成
  const createKillCooldownTimeList = () => {
  
    const minKillCooldownTime = 10;
  
    let TimeList = [];
    let currentNum = minKillCooldownTime; 
    
    // 2.5ずつ増えながら10から60を配列に入れる
    for (let index = 0; index < 21; index++) {
  
      TimeList.push(currentNum);
  
      currentNum = currentNum + 2.5;
    }
    
    // 最低値10、最高値60の2.5刻みで増加している配列を返す
    return TimeList;
  };

  // わかりやすいように一度定数に入れる
  const killCooldownTimeList = createKillCooldownTimeList();

  // 参加有無に関する記述
  /* 状態生成 */
  const [isExistPlayer, setIsExistPlayer] = React.useState({
    red: true,
    blue: true,
    green: true,
    pink: true,
    orange: true,
    yellow: true,
    black: true,
    white: true,
    purple: true,
    brown: true,
    cyan: true,
    lime: true
  });

    /* 
    生死に関する状態
    キル、追放に関わらず、死亡していたらtrue
  */
    const [isDead, setIsDead] = React.useState({
      red: false,
      blue: false,
      green: false,
      pink: false,
      orange: false,
      yellow: false,
      black: false,
      white: false,
      purple: false,
      brown: false,
      cyan: false,
      lime: false
    });

  /* 
    緊急会議権の使用に関する状態
    使用したらtrue
  */
  const [isUsedEMRight, setIsUsedEMRight] = React.useState({
    red: false,
    blue: false,
    green: false,
    pink: false,
    orange: false,
    yellow: false,
    black: false,
    white: false,
    purple: false,
    brown: false,
    cyan: false,
    lime: false
  });

/* 
  スライダーの値
*/
const [suspiciousness, setSuspiciousness] = React.useState({
  red: 50,
  blue: 50,
  green: 50,
  pink: 50,
  orange: 50,
  yellow: 50,
  black: 50,
  white: 50,
  purple: 50,
  brown: 50,
  cyan: 50,
  lime: 50
});

  /* Mapタブで選択しているマップの状態 */
  const [map, setMap] = React.useState(0);

  return (
    <React.Fragment>
      <AppBar color="primary" position="sticky" elevation={0}>
        <Toolbar>
          <Grid container spacing={1} alignItems="center">
            <Hidden smUp>
              <Grid item>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  onClick={onDrawerToggle}
                  className={classes.menuButton}
                >
                  <MenuIcon />
                </IconButton>
              </Grid>
            </Hidden>
            <Grid item xs />
            <Grid item>
              <Link className={classes.link} href="#" variant="body2">
                Go to docs
              </Link>
            </Grid>
            <Grid item>
              <Tooltip title="Alerts • No alerts">
                <IconButton color="inherit">
                  <NotificationsIcon />
                </IconButton>
              </Tooltip>
            </Grid>
            <Grid item>
              <IconButton color="inherit" className={classes.iconButtonAvatar}>
                <Avatar src="/static/images/avatar/1.jpg" alt="My Avatar" />
              </IconButton>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <AppBar
        component="div"
        className={classes.secondaryBar}
        color="primary"
        position="static"
        elevation={0}
      >
        <Toolbar>
          <Grid container alignItems="center" spacing={1}>
            <Grid item xs>
              <Typography color="inherit" variant="h5" component="h1">
                Home
              </Typography>
            </Grid>
            <Grid item>
              <Button className={classes.button} variant="outlined" color="inherit" size="small">
                Web setup
              </Button>
            </Grid>
            <Grid item>
              <Tooltip title="Help">
                <IconButton color="inherit">
                  <HelpIcon />
                </IconButton>
              </Tooltip>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <AppBar
        component="div"
        className={classes.secondaryBar}
        color="primary"
        position="static"
        elevation={0}
      >
        <Tabs value={value} onChange={handleChange} textColor="inherit">
          <Tab textColor="inherit" label="Top" {...a11yProps(0)} />
          <Tab textColor="inherit" label="Players" {...a11yProps(1)} />
          <Tab textColor="inherit" label="Map" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <main className={classes.main}>
          
      <TabPanel value={value} index={0} className={classes.mapPanel}>
        <Top
          isExistPlayer={isExistPlayer}
          setIsExistPlayer={setIsExistPlayer}
          killCooldownTime={killCooldownTime}
          setKillCooldownTime={setKillCooldownTime}
          killCooldownTimeList={killCooldownTimeList}
        />
      </TabPanel>
      <TabPanel value={value} index={1} className={classes.mapPanel}>
        <Players
          isExistPlayer={isExistPlayer}
          // setIsExistPlayer={setIsExistPlayer}
          isDead={isDead}
          setIsDead={setIsDead}
          isUsedEMRight={isUsedEMRight}
          setIsUsedEMRight={setIsUsedEMRight}
          suspiciousness={suspiciousness}
          setSuspiciousness={setSuspiciousness}
          killCooldownTime={killCooldownTime}
        />
      </TabPanel>
      <TabPanel value={value} index={2} className={classes.mapPanel}>
        <Map
          map={map}
          setMap={setMap}
        />
      </TabPanel>
      </main>
    </React.Fragment>
  );
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
  onDrawerToggle: PropTypes.func.isRequired,
};

export default withStyles(styles)(Home);
