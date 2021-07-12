import AppBar from '@material-ui/core/AppBar';
import { withStyles } from '@material-ui/core/styles';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import PropTypes from 'prop-types';
import React from 'react';
import Banana from '../../../../img/players/banana.svg';
import Black from '../../../../img/players/black.svg';
import Blue from '../../../../img/players/blue.svg';
import Brown from '../../../../img/players/brown.svg';
import Coral from '../../../../img/players/coral.svg';
import Cyan from '../../../../img/players/cyan.svg';
import Gray from '../../../../img/players/gray.svg';
import Green from '../../../../img/players/green.svg';
import Lime from '../../../../img/players/lime.svg';
import Maroon from '../../../../img/players/maroon.svg';
import Orange from '../../../../img/players/orange.svg';
import Pink from '../../../../img/players/pink.svg';
import Purple from '../../../../img/players/purple.svg';
import Red from '../../../../img/players/red.svg';
import Rose from '../../../../img/players/rose.svg';
import Tan from '../../../../img/players/tan.svg';
import White from '../../../../img/players/white.svg';
import Yellow from '../../../../img/players/yellow.svg';
import Header from '../../../components/Header';
import TabPanel from '../../../components/TabPanel';
import Main from './main/Main';
import Map from './map/Map';
import Setting from './setting/Setting';

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

  /* 
    キルクールダウンタイムの時間に関する記述
  */

  // 状態生成
  const [killCooldownTime, setKillCooldownTime] = React.useState('');

  // 実際に表示されている数値
  const [count, setCount] = React.useState(killCooldownTime);

  // killCooldownTimeに変更があったら検知してcountに反映させる処理
  React.useMemo(() => setCount(killCooldownTime), [killCooldownTime]);

  // カウントが0までいっているかどうかのフラグ
  // カウントが0のときにカウントを始められるかどうかの判定に使う。
  const [countEndFlag, setCountEndFlag] = React.useState(false);

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
    useRef()で生成したintervalRefを状態として保持
    キルクールダウンタイムのインターバルを行っている状態を外部に切り出した
    Main.jsxに記述すると、タブを切り替えたときにnullになってストップがかからなくなってしまう。
  */
  // eslint-disable-next-line no-unused-vars
  const [intervalRef, setIntervalRef] = React.useState(React.useRef(null));

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
    lime: Lime,
    maroon: Maroon,
    rose: Rose,
    banana: Banana,
    gray: Gray,
    tan: Tan,
    coral: Coral,
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
    lime: true,
    maroon: true,
    rose: true,
    banana: true,
    gray: true,
    tan: true,
    coral: true,
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
    lime: false,
    maroon: false,
    rose: false,
    banana: false,
    gray: false,
    tan: false,
    coral: false,
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
    lime: false,
    maroon: false,
    rose: false,
    banana: false,
    gray: false,
    tan: false,
    coral: false,
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
    lime: 50,
    maroon: 50,
    rose: 50,
    banana: 50,
    gray: 50,
    tan: 50,
    coral: 50,
  });

  /* 
  Mapタブで選択しているマップの状態
*/
  const [map, setMap] = React.useState(0);

  /* 
  Mapタブの各アイコンの座標
*/
  const [playerIconCordinate, setPlayerIconCordinate] = React.useState({
    red: {
      x: 0,
      y: 0,
    },
    blue: {
      x: 0,
      y: 0,
    },
    green: {
      x: 0,
      y: 0,
    },
    pink: {
      x: 0,
      y: 0,
    },
    orange: {
      x: 0,
      y: 0,
    },
    yellow: {
      x: 0,
      y: 0,
    },
    black: {
      x: 0,
      y: 0,
    },
    white: {
      x: 0,
      y: 0,
    },
    purple: {
      x: 0,
      y: 0,
    },
    brown: {
      x: 0,
      y: 0,
    },
    cyan: {
      x: 0,
      y: 0,
    },
    lime: {
      x: 0,
      y: 0,
    },
    maroon: {
      x: 0,
      y: 0,
    },
    rose: {
      x: 0,
      y: 0,
    },
    banana: {
      x: 0,
      y: 0,
    },
    gray: {
      x: 0,
      y: 0,
    },
    tan: {
      x: 0,
      y: 0,
    },
    coral: {
      x: 0,
      y: 0,
    },
  });

  /* 
  初期値の格納
  主にステータスリセットボタンで利用
*/
  // eslint-disable-next-line no-unused-vars
  const [initState, setInitState] = React.useState({
    isDead: isDead,
    isUsedEMRight: isUsedEMRight,
    suspiciousness: suspiciousness,
    playerIconCordinate: playerIconCordinate,
  });
  return (
    <React.Fragment>
      {/* 
        ヘッダー部
      */}
      {/* タブを除くヘッダー */}
      <Header onDrawerToggle={onDrawerToggle} pageName='Home' />

      {/* タブ */}
      <AppBar
        component='div'
        className={classes.secondaryBar}
        color='primary'
        position='static'
        elevation={0}
      >
        <Tabs value={value} onChange={handleChange} textColor='inherit'>
          <Tab textColor='inherit' label='Setting' {...a11yProps(0)} />
          <Tab textColor='inherit' label='Main' {...a11yProps(1)} />
          <Tab textColor='inherit' label='Map' {...a11yProps(2)} />
        </Tabs>
      </AppBar>

      {/* 
        メイン部
      */}
      <main className={classes.main}>
        <TabPanel value={value} index={0} className={classes.mapPanel}>
          <Setting
            playerColorImageList={playerColorImageList}
            playerColorList={playerColorList}
            isExistPlayer={isExistPlayer}
            setIsExistPlayer={setIsExistPlayer}
            killCooldownTime={killCooldownTime}
            setKillCooldownTime={setKillCooldownTime}
            killCooldownTimeList={killCooldownTimeList}
            setCountEndFlag={setCountEndFlag}
          />
        </TabPanel>
        <TabPanel value={value} index={1} className={classes.mapPanel}>
          <Main
            initState={initState}
            playerColorImageList={playerColorImageList}
            playerColorList={playerColorList}
            isExistPlayer={isExistPlayer}
            isDead={isDead}
            setIsDead={setIsDead}
            isUsedEMRight={isUsedEMRight}
            setIsUsedEMRight={setIsUsedEMRight}
            suspiciousness={suspiciousness}
            setSuspiciousness={setSuspiciousness}
            killCooldownTime={killCooldownTime}
            count={count}
            setCount={setCount}
            countEndFlag={countEndFlag}
            setCountEndFlag={setCountEndFlag}
            intervalRef={intervalRef}
          />
        </TabPanel>
        <TabPanel value={value} index={2} className={classes.mapPanel}>
          <Map
            map={map}
            setMap={setMap}
            playerColorImageList={playerColorImageList}
            playerColorList={playerColorList}
            playerIconCordinate={playerIconCordinate}
            setPlayerIconCordinate={setPlayerIconCordinate}
            initState={initState}
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
