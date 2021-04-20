import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import TabPanel from '../../../components/TabPanel';
import { withStyles } from '@material-ui/core/styles';
import Top from './top/Top';
import Players from './players/Players';
import Map from './map/Map';
import Header from '../../../components/Header';

/* 
  画像
*/
import Red from '../../../../img/players/red.svg';
import Blue from '../../../../img/players/blue.svg';
import Green from '../../../../img/players/green.svg';
import Pink from '../../../../img/players/pink.svg';
import Orange from '../../../../img/players/orange.svg';
import Yellow from '../../../../img/players/yellow.svg';
import Black from '../../../../img/players/black.svg';
import White from '../../../../img/players/white.svg';
import Purple from '../../../../img/players/purple.svg';
import Brown from '../../../../img/players/brown.svg';
import Cyan from '../../../../img/players/cyan.svg';
import Lime from '../../../../img/players/lime.svg';


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

  // ユーザー状態　初期値
  // const [playerState, setPlayerState] = React.useState({
  //   red: {
  //     isExist: true,
  //     isDead: false,
  //     isUsedEMRight: false,
  //     suspiciousness: 50,
  //     img: Red,
  //   },
  //   blue: {
  //     isExist: true,
  //     isDead: false,
  //     isUsedEMRight: false,
  //     suspiciousness: 50,
  //     img: Blue,
  //   },
  //   green: {
  //     isExist: true,
  //     isDead: false,
  //     isUsedEMRight: false,
  //     suspiciousness: 50,
  //     img: Green,
  //   },
  //   pink: {
  //     isExist: true,
  //     isDead: false,
  //     isUsedEMRight: false,
  //     suspiciousness: 50,
  //     img: Pink,
  //   },
  //   orange: {
  //     isExist: true,
  //     isDead: false,
  //     isUsedEMRight: false,
  //     suspiciousness: 50,
  //     img: Orange,
  //   },
  //   yellow: {
  //     isExist: true,
  //     isDead: false,
  //     isUsedEMRight: false,
  //     suspiciousness: 50,
  //     img: Yellow,
  //   },
  //   black: {
  //     isExist: true,
  //     isDead: false,
  //     isUsedEMRight: false,
  //     suspiciousness: 50,
  //     img: Black,
  //   },
  //   white: {
  //     isExist: true,
  //     isDead: false,
  //     isUsedEMRight: false,
  //     suspiciousness: 50,
  //     img: White,
  //   },
  //   purple: {
  //     isExist: true,
  //     isDead: false,
  //     isUsedEMRight: false,
  //     suspiciousness: 50,
  //     img: Purple,
  //   },
  //   brown: {
  //     isExist: true,
  //     isDead: false,
  //     isUsedEMRight: false,
  //     suspiciousness: 50,
  //     img: Brown,
  //   },
  //   cyan: {
  //     isExist: true,
  //     isDead: false,
  //     isUsedEMRight: false,
  //     suspiciousness: 50,
  //     img: Cyan,
  //   },
  //   lime: {
  //     isExist: true,
  //     isDead: false,
  //     isUsedEMRight: false,
  //     suspiciousness: 50,
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

  /* 
    プレイヤーColorの配列
  */
    const playerColorImageList = {
      red: Red,
      blue: Blue,
      green: Green,
      pink: Pink,
      orange: Orange,
      yellow: Yellow,
      black: Black,
      white: White,
      purple: Purple,
      brown: Brown,
      cyan: Cyan,
      lime: Lime
    };
  const playerColorList = Object.keys(playerColorImageList);

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

/* 
  初期値の格納
  主にステータスリセットボタンで利用
*/
const [playerInitState, setPlayerInitState] = React.useState({
  isDead: isDead,
  isUsedEMRight: isUsedEMRight,
  suspiciousness: suspiciousness,
});


  /* Mapタブで選択しているマップの状態 */
  const [map, setMap] = React.useState(0);

  return (
    <React.Fragment>
      
      {/* 
        ヘッダー部
      */}
      {/* タブを除くヘッダー */}
      <Header onDrawerToggle={onDrawerToggle} pageName="Home" />

      {/* タブ */}
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

      {/* 
        メイン部
      */}
      <main className={classes.main}>
          
      <TabPanel value={value} index={0} className={classes.mapPanel}>
        <Top
          playerColorImageList={playerColorImageList}
          playerColorList={playerColorList}
          isExistPlayer={isExistPlayer}
          setIsExistPlayer={setIsExistPlayer}
          killCooldownTime={killCooldownTime}
          setKillCooldownTime={setKillCooldownTime}
          killCooldownTimeList={killCooldownTimeList}
        />
      </TabPanel>
      <TabPanel value={value} index={1} className={classes.mapPanel}>
        <Players
          playerInitState={playerInitState}
          playerColorImageList={playerColorImageList}
          playerColorList={playerColorList}
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
