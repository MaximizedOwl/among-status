import { Button, TextField } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Snackbar from '@material-ui/core/Snackbar';
import Toolbar from '@material-ui/core/Toolbar';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React from 'react';
import CrewmateIcon from '../../../../../img/others/iconfinder_Among_Us_crewmate-01_7127755.svg';
import EmergencyMeetingIcon from '../../../../../img/others/iconfinder_Among_Us_emergency_meeting_7142960.svg';
import GhostIcon from '../../../../../img/others/iconfinder_Among_Us_ghost_7142959.svg';
import ImposterIcon from '../../../../../img/others/iconfinder_Among_Us_impostor_7127758.svg';
import Alert from '../../../../components/Alert';
import PlayerSlider from './PlayerSlider';

// eslint-disable-next-line no-unused-vars
const styles = (theme) => ({
  paper: {
    maxWidth: 936,
    margin: 'auto',
    overflow: 'hidden',
    textAligh: 'center',
  },
  titleBar: {
    borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
  },
  block: {
    display: 'block',
  },
  contentWrapper: {
    margin: '40px 16px',
  },
  img: {
    maxWidth: 50,
    minWidth: 40,
    height: 'auto',
  },
  killCooldownTimeTextfield: {
    maxWidth: 70,
  },
  statusResetButton: {
    padding: 10,
    textAlign: 'center',
  },
  container: {
    textAlign: 'center',
  },
});

function Main(props) {
  /* 
    全体のprops
  */
  const {
    classes,
    initState,
    playerColorImageList,
    isExistPlayer,
    isDead,
    setIsDead,
    isUsedEMRight,
    setIsUsedEMRight,
    suspiciousness,
    setSuspiciousness,
    killCooldownTime,
    count,
    setCount,
    isActiveTimer,
    setIsActiveTimer,
    intervalRef,
  } = props;

  /* 
  参加有無に関する記述
  */
  // isExistPlayerが現在trueになっている色だけを配列currentExistPlayerListに格納する。
  const generateCurrentExistPlayer = () => {
    // プレイヤー人数の取得
    const objectLength = Object.keys(isExistPlayer).length;

    let newExistPlayerList = [];

    for (let index = 0; index < objectLength; index++) {
      // isExistPlayerがtrueなら配列にキーを追加
      if (Object.values(isExistPlayer)[index] === true) {
        newExistPlayerList.push(Object.keys(isExistPlayer)[index]);
      }
    }

    return newExistPlayerList;
  };

  // 現参加者リスト
  // eslint-disable-next-line no-unused-vars
  const [currentExistPlayerList, setCurrentExistPlayerList] = React.useState(
    generateCurrentExistPlayer
  );

  /* 
    選択した対象の真偽値判定にチェックを入れて真偽値を入れ替える
    会議権使用状態と生死状態のどちらでも利用可能
  */
  const handleChange = (event) => {
    if (event.target.name === 'isUsedEMRight') {
      setIsUsedEMRight({
        ...isUsedEMRight,
        [event.target.value]: event.target.checked,
      });
    }
    if (event.target.name === 'isDead') {
      setIsDead({ ...isDead, [event.target.value]: event.target.checked });
    }
  };

  /* 
    キルクールダウンタイム終了通知のスナックバー関連
  */
  const [openSnackbar, setOpenSnackbar] = React.useState(false);

  const handleClickSnackbar = () => {
    setOpenSnackbar(true);
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenSnackbar(false);
  };

  /* 
    キルクールダウンタイム関連
  */

  React.useEffect(() => {
    if (isActiveTimer) {
      intervalRef.current = setInterval(() => {
        setCount((prevCount) => {
          // 未設定ではなく、かつカウントが0になったとき
          if (prevCount <= 0) {
            // 処理停止
            handleStopTimer();

            // スナックバー表示
            handleClickSnackbar();

            return prevCount;
          } else {
            return prevCount - 0.5;
          }
        });
      }, 500);
    }
    return () => clearInterval(intervalRef.current);
  }, [isActiveTimer]);

  /* カウントダウン 停止処理 */
  const handleStopTimer = () => {
    clearInterval(intervalRef.current);
    setIsActiveTimer(false);
  };

  /* カウントダウン 開始処理 */
  const handleStartTimer = () => {
    // 数値未設定時 countは文字列型で入ってきている
    if (count === '') {
      window.alert(`Please set Kill Cooldown Time at "Setting".
キルクールダウンタイムが設定されていません。Settingタブで設定してください。`);

      return;
    } else {
      setIsActiveTimer(true);
    }
  };

  /* カウントダウン 再設定（リセット）処理 */
  const handleResetTimer = () => {
    // 表示数値の初期化
    setCount(killCooldownTime);
    clearInterval(intervalRef.current);
    setIsActiveTimer(false);

    // スナックバーを閉じる
    handleCloseSnackbar();
  };

  /* 
    新規ゲームを始める際のステータスリセットボタン
    プレイヤーに関する全ての状態に初期値を設定する。
  */

  const playersStatusReset = () => {
    // 初期値設定
    setIsDead({ ...isDead, ...initState.isDead });
    setIsUsedEMRight({ ...isUsedEMRight, ...initState.isUsedEMRight });
    setSuspiciousness({ ...suspiciousness, ...initState.suspiciousness });
  };

  /* 
    プレイヤー12色のブロック
  */
  const playerBlock = currentExistPlayerList.map((color) => (
    <Grid
      container
      xs={12}
      alignItems='center'
      justify='space-evenly'
      className={classes.container}
      key={color}
    >
      <Grid item xs={2} justify='center'>
        <img src={playerColorImageList[color]} className={classes.img} />
      </Grid>
      <Grid item xs={2}>
        <Checkbox
          checked={isDead[color]}
          onChange={handleChange}
          color='secondary'
          name='isDead'
          value={color}
        />
      </Grid>
      <Grid item xs={2}>
        <Checkbox
          checked={isUsedEMRight[color]}
          onChange={handleChange}
          color='primary'
          name='isUsedEMRight'
          value={color}
        />
      </Grid>
      <Grid item xs={6}>
        <PlayerSlider
          color={color}
          suspiciousness={suspiciousness}
          setSuspiciousness={setSuspiciousness}
        />
      </Grid>
    </Grid>
  ));

  return (
    <React.Fragment>
      {/* 
        時間経過・通知関連
      */}
      <Paper className={classes.paper}>
        <div className={classes.contentWrapper}>
          <h3>Kill Cooldown Timer</h3>

          <Grid
            container
            xs='auto'
            spacing={1}
            alignItems='center'
            justify='flex-start'
          >
            <Grid
              container
              xs='auto'
              spacing={1}
              alignItems='center'
              justify='flex-start'
            >
              <Grid item xs='auto'>
                <TextField
                  disabled
                  id='outlined-disabled'
                  value={count}
                  variant='outlined'
                  size='small'
                  margin='dense'
                  className={classes.killCooldownTimeTextfield}
                />
              </Grid>
              <Grid item xs='auto'>
                <Snackbar open={openSnackbar} onClose={handleCloseSnackbar}>
                  <Alert onClose={handleCloseSnackbar} severity='info'>
                    cooldown time is over!
                  </Alert>
                </Snackbar>
              </Grid>
            </Grid>
            <Grid
              container
              xs='auto'
              spacing={1}
              alignItems='center'
              justify='flex-start'
            >
              <Grid item xs='auto'>
                <Button
                  variant='contained'
                  color='primary'
                  size='small'
                  onClick={handleStartTimer}
                  disabled={isActiveTimer}
                >
                  Start
                </Button>
              </Grid>
              <Grid item xs='auto'>
                <Button
                  variant='contained'
                  color='default'
                  size='small'
                  onClick={handleStopTimer}
                >
                  Stop
                </Button>
              </Grid>
              <Grid item xs='auto'>
                <Button
                  variant='contained'
                  color='secondary'
                  size='small'
                  onClick={handleResetTimer}
                >
                  Reset
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </Paper>

      <br />

      {/* 
        プレイヤー関連
      */}
      <Paper className={classes.paper}>
        {/* 
          上側AppBar
        */}
        <AppBar
          className={classes.titleBar}
          position='static'
          color='default'
          elevation={0}
        >
          <Toolbar>
            <Grid
              container
              xs={6}
              justify='flex-end'
              alignItems='center'
              className={classes.container}
            >
              <Grid item xs={4}>
                <img src={GhostIcon} alt='Ghost' className={classes.img} />
              </Grid>
              <Grid item xs={4}>
                <img
                  src={EmergencyMeetingIcon}
                  alt='EmergencyMeeting'
                  className={classes.img}
                />
              </Grid>
            </Grid>
            <Grid
              container
              xs={6}
              justify='space-between'
              alignItems='center'
              className={classes.container}
            >
              <Grid item xs={3}>
                <img
                  src={CrewmateIcon}
                  alt='Crewmate'
                  className={classes.img}
                />
              </Grid>
              <Grid item xs={3}>
                <img
                  src={ImposterIcon}
                  alt='Imposter'
                  className={classes.img}
                />
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>

        {/* 
          メイン情報表示部
        */}
        <div className={classes.contentWrapper}>
          {/* 
            プレイヤー12色のブロック
          */}
          <Grid container alignItems='center' justify='center'>
            {playerBlock}
          </Grid>

          {/* 
            リセットボタン
          */}
          <Grid
            container
            xs
            alignItems='center'
            justify='center'
            className={classes.statusResetButton}
          >
            <Grid item xs>
              <Button
                variant='contained'
                color='secondary'
                // size='small'
                onClick={playersStatusReset}
              >
                Status Reset
              </Button>
            </Grid>
          </Grid>
        </div>
      </Paper>
    </React.Fragment>
  );
}

Main.propTypes = {
  classes: PropTypes.object.isRequired,
  initState: PropTypes.bool.isRequired,
  playerColorImageList: PropTypes.objectOf(PropTypes.string).isRequired,
  isExistPlayer: PropTypes.bool.isRequired,
  isDead: PropTypes.bool.isRequired,
  setIsDead: PropTypes.func.isRequired,
  isUsedEMRight: PropTypes.object.isRequired,
  setIsUsedEMRight: PropTypes.func.isRequired,
  suspiciousness: PropTypes.object.isRequired,
  setSuspiciousness: PropTypes.func.isRequired,
  killCooldownTime: PropTypes.number.isRequired,
  count: PropTypes.number.isRequired,
  setCount: PropTypes.func.isRequired,
  intervalRef: PropTypes.object.isRequired,
  isActiveTimer: PropTypes.bool.isRequired,
  setIsActiveTimer: PropTypes.func.isRequired,
};

export default withStyles(styles)(Main);
