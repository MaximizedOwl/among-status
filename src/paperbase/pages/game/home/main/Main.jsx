import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import PlayerSlider from './PlayerSlider';
import Checkbox from '@material-ui/core/Checkbox';
import { Button, TextField } from '@material-ui/core';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '../../../../components/Alert';

/* 
  画像
*/
import EmergencyMeetingIcon from '../../../../../img/others/iconfinder_Among_Us_emergency_meeting_7142960.svg';
import ImposterIcon from '../../../../../img/others/iconfinder_Among_Us_impostor_7127758.svg';
import CrewmateIcon from '../../../../../img/others/iconfinder_Among_Us_crewmate-01_7127755.svg';
import GhostIcon from '../../../../../img/others/iconfinder_Among_Us_ghost_7142959.svg';

const styles = (theme) => ({
  paper: {
    maxWidth: 936,
    margin: 'auto',
    overflow: 'hidden',
    textAligh: 'center'
  },
  titleBar: {
    borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
    // maxHeight: 40,
  },
  block: {
    display: 'block',
  },
  contentWrapper: {
    margin: '40px 16px',
  },
  img :{
    maxWidth: 50,
    minWidth: 40,
    height: 'auto',
  },
  killCooldownTimeTextfield :{
    maxWidth: 70,
  },
  statusResetButton: {
    padding: 10,
    textAlign: 'center',
  },
  container: {
    textAlign: 'center',
  }
});

function Main(props) {

  /* 
    全体のprops
  */
  const {
    classes,
    initState,
    playerColorImageList,
    playerColorList,
    isExistPlayer,
    // setIsExistPlayer,
    isDead,
    setIsDead,
    isUsedEMRight,
    setIsUsedEMRight,
    suspiciousness,
    setSuspiciousness,
    killCooldownTime
  } = props;

  /* 
  参加有無に関する記述
  */
  // isExistPlayerが現在trueになっている色だけを配列currentExistPlayerListに格納する。
  const generateCurrentExistPlayer = () => {
    
    // プレイヤー人数の取得
    const objectLength = Object.keys(isExistPlayer).length;

    console.log(objectLength);

    let newExistPlayerList = [];

    for (let index = 0; index < objectLength; index++) {
      
      console.log([Object.values(isExistPlayer)[index]]);
      // isExistPlayerがtrueなら配列にキーを追加
      if (Object.values(isExistPlayer)[index] === true) {

        newExistPlayerList.push(Object.keys(isExistPlayer)[index]);
      }
    }
    console.log(newExistPlayerList);

    return newExistPlayerList;
  };

  // 現参加者リスト
  const [currentExistPlayerList, setCurrentExistPlayerList] = React.useState(generateCurrentExistPlayer);

  /* 
    選択した対象の真偽値判定にチェックを入れて真偽値を入れ替える
    会議権使用状態と生死状態のどちらでも利用可能
  */
  const handleChange = (event) => {

    if (event.target.name === 'isUsedEMRight') {

      console.log('start: check ' + event.target.value + ' of ' + event.target.name + '.');

      setIsUsedEMRight({ ...isUsedEMRight, [event.target.value]: event.target.checked });

      console.log('end: checked ' + event.target.value + ' of ' + event.target.name + '.');

    } if (event.target.name === 'isDead') {

      console.log('start: check ' + event.target.value + ' of ' + event.target.name + '.');

      setIsDead({ ...isDead, [event.target.value]: event.target.checked });

      console.log('end: checked ' + event.target.value + ' of ' + event.target.name + '.');

    } else {
      
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

  // 実際に表示されている数値
  const [count, setCount] = React.useState(killCooldownTime);

  // タイマーの内部で使う現在の数値を取得
  let innerCount = count * 2;

  const intervalRef = React.useRef(null);

  /* カウントダウン 停止処理 */
  const stopKillCooldownTime = React.useCallback(() => {

    console.log('Stop機能 開始');

    if (intervalRef.current === null) {
      return;
    }
    clearInterval(intervalRef.current);
    intervalRef.current = null;

    console.log('Stop機能 終了');
  }, []);

  /* カウントダウン 開始処理 */
  const startKillCooldownTime = React.useCallback(() => {

    console.log('Start機能 開始');

    // 数値未設定時　countは文字列型で入ってきている
    if (count === '') {

      console.log('数値未設定');
      window.alert(`Please set Kill Cooldown Time at "Setting".
キルクールダウンタイムが設定されていません。Settingタブで設定してください。`);

      console.log('Start機能 終了');

      return;

    // 数値設定時
    } else {
      if (intervalRef.current !== null) {

        return;      
      }
    };
    intervalRef.current = setInterval(() => {

      console.log(innerCount);
      if(innerCount <= 0) {

        // 処理停止
        stopKillCooldownTime();

        // スナックバー表示
        handleClickSnackbar();

        console.log('時間が0になりました');

      } else {
        // 表示時間減少処理
        setCount(count => count - 0.5);
        // 内部表示終了カウント減少処理
        innerCount--;
      }

    }, 500);

    console.log('Start機能 終了');
  }, []);


  /* カウントダウン 再設定（リセット）処理 */
  const resetKillCooldownTime = React.useCallback(() => {

    console.log('Reset機能 開始');

    // 表示数値の初期化
    setCount(killCooldownTime);
    // 内部カウント数値の初期化
    innerCount = count * 2;
    // スナックバーを閉じる
    handleCloseSnackbar();

    console.log('Reset機能 終了');

  }, []);

  /* 
    新規ゲームを始める際のステータスリセットボタン
    プレイヤーに関する全ての状態に初期値を設定する。
  */

  const playersStatusReset = () => {

    console.log(initState);
    console.log(initState.isDead);

    // 初期値設定
    setIsDead({...isDead, ...initState.isDead});
    setIsUsedEMRight({...isUsedEMRight, ...initState.isUsedEMRight});
    setSuspiciousness({...suspiciousness, ...initState.suspiciousness});

  };

  /* 
    プレイヤー12色のブロック
  */
  const playerBlock = currentExistPlayerList.map((color) => 

    <Grid container xs={12} alignItems="center" justify="space-evenly" className={classes.container}>
      <Grid item xs={2} justify="center">
        <img src={playerColorImageList[color]} className={classes.img} />
      </Grid>
      <Grid item xs={2}>
        <Checkbox
          checked={isDead[color]}
          onChange={handleChange}
          color="secondary"
          name="isDead"
          value={color}
        />
      </Grid>
      <Grid item xs={2}>
        <Checkbox
          checked={isUsedEMRight[color]}
          onChange={handleChange}
          color="primary"
          name="isUsedEMRight"
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
  );

  return (
    <React.Fragment>
      
      {/* 
        時間経過・通知関連
      */}
      <Paper className={classes.paper}>
        <div className={classes.contentWrapper}>
          
          <h3>Kill Cooldown Timer</h3>
          
          <Grid container xs='auto' spacing={1} alignItems="center" justify="flex-start">
            <Grid container xs='auto' spacing={1} alignItems="center" justify="flex-start">
              <Grid item xs='auto'>
                <TextField
                  disabled
                  id="outlined-disabled"
                  value={count}
                  variant="outlined"
                  size="small"
                  margin="dense"
                  className={classes.killCooldownTimeTextfield}
                />
              </Grid>
              <Grid item xs='auto'>
                <Snackbar open={openSnackbar} onClose={handleCloseSnackbar}>
                  <Alert onClose={handleCloseSnackbar} severity="info">
                    cooldown time is over!
                  </Alert>
                </Snackbar>
              </Grid>
            </Grid>
            <Grid container xs='auto' spacing={1} alignItems="center" justify="flex-start">
              <Grid item xs='auto'>
                <Button
                  variant="contained"
                  color="primary"
                  size='small'
                  onClick={startKillCooldownTime}      
                >
                  Start
                </Button>
              </Grid>
              <Grid item xs='auto'>
                <Button
                  variant="contained"
                  color="default"
                  size='small'
                  onClick={stopKillCooldownTime}      
                >
                  Stop
                </Button>
              </Grid>
              <Grid item xs='auto'>
                <Button
                  variant="contained"
                  color="secondary"
                  size='small'
                  onClick={resetKillCooldownTime}      
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
        <AppBar className={classes.titleBar} position="static" color="default" elevation={0}>
          <Toolbar>
              {/* <Grid container xs={12} className={classes.container}> */}
                <Grid container xs={6} justify="flex-end" alignItems="center" className={classes.container}>
                  <Grid item xs={4}>
                    <img src={GhostIcon} alt="Ghost" className={classes.img}/>
                  </Grid>
                  <Grid item xs={4}>
                    <img src={EmergencyMeetingIcon} alt="EmergencyMeeting" className={classes.img}/>
                  </Grid>
                </Grid>
                <Grid container xs={6} justify="space-between" alignItems="center" className={classes.container}>
                  <Grid item xs={3}>
                    <img src={CrewmateIcon} alt="Crewmate" className={classes.img}/>
                  </Grid>
                  <Grid item xs={3}>
                    <img src={ImposterIcon} alt="Imposter" className={classes.img}/>
                  </Grid>
                {/* </Grid> */}

                {/* <Grid item xs={2}>
                  <img src={CrewmateIcon} alt="Crewmate" className={classes.img}/>
                </Grid>
                <Grid item xs={2}>
                </Grid>
                <Grid item xs={2}>
                  <img src={ImposterIcon} alt="Imposter" className={classes.img}/>
                </Grid> */}

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
          <Grid container alignItems="center" justify="center">
            {playerBlock}
          </Grid>
          
          {/* 
            リセットボタン
          */}
          <Grid container xs alignItems="center" justify="center" className={classes.statusResetButton}>
            <Grid item xs>
              <Button
                variant="contained"
                color="secondary"
                // size='small'
                onClick={playersStatusReset}
              >
              Status Reset
              </Button>
            </Grid>
          </Grid>
        </div>
      </Paper>


      
      {/* <br /> */}

      {/* 
        NewGameボタン
      */}
      {/* <Paper className={classes.paper}>
        <div className={classes.contentWrapper}>
          <Grid container xs alignItems="center" justify="center">
            <Grid item xs>
            <Button
                  variant="contained"
                  color="secondary"
                  // size='small'
                  // onClick={killCooldwonTimeCountDown}
                >
                Status Reset
                </Button>
            </Grid>
          </Grid>
        </div>
      </Paper> */}
    </React.Fragment>
  );
}

Main.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Main);
