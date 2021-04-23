import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import PlayerSlider from './PlayerSlider';
import Checkbox from '@material-ui/core/Checkbox';
import { Button, Typography, TextField } from '@material-ui/core';

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
    height: 'auto',
  },
  killCooldownTimeTextfield :{
    maxWidth: 70,
  }
});

function Players(props) {

  /* 
    全体のprops
  */
  const {
    classes,
    playerInitState,
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
  console.log(currentExistPlayerList);

  
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
    キルクールダウンタイム関連
  */
 // 状態の初期化 
let currentKillCooldwonTime = killCooldownTime;

const killCooldwonTimeCountDown = () => {
  
  if (true) {
    window.alert('この機能は開発中です。もうしばらくお待ち下さい…。Develoing now! Please wait...');
  }

  return;

  // カウントダウン処理
  console.log(typeof currentKillCooldwonTime);
  console.log(currentKillCooldwonTime);

  // 数値未設定時　currentKillCooldwonTimeは文字列型で入ってきている
  if (currentKillCooldwonTime === '') {

    console.log('数値未設定');
    window.alert('キルクールダウンタイムが設定されていません。Topタブで設定してください。');
  
  // 数値設定時
  } else {
    console.log('カウントダウン開始');

    const calculate = () => {
      currentKillCooldwonTime = currentKillCooldwonTime - 0.5; 
    };

    const intervalId = setInterval(() => {
      
      calculate();
      if (currentKillCooldwonTime <= 0) {
        clearInterval(intervalId);
      }
        console.log(currentKillCooldwonTime);
    }, 500);
  };
};

  // React.useEffect(killCooldwonTimeCountDown());


  /* カウントダウン処理されたキルクールダウンタイムを設定値に戻す処理 */
  const resetKillCooldownTime = () => {
    
    if (true) {
      window.alert('この機能は開発中です。もうしばらくお待ち下さい…。Develoing now! Please wait...');
    }

    return;

    setCurrentLillCooldwonTime(killCooldownTime);
  };

  /* 
    新規ゲームを始める際のステータスリセットボタン
    プレイヤーに関する全ての状態に初期値を設定する。
  */

  const playersStatusReset = () => {

    console.log(playerInitState);
    console.log(playerInitState.isDead);

    // 初期値設定
    setIsDead({...isDead, ...playerInitState.isDead});
    setIsUsedEMRight({...isUsedEMRight, ...playerInitState.isUsedEMRight});
    setSuspiciousness({...suspiciousness, ...playerInitState.suspiciousness});

  };

  /* 
    プレイヤー12色のブロック
  */
  const playerBlock = currentExistPlayerList.map((color) => 

    <Grid container xs={12} alignItems="center" justify="center">
      <Grid item xs={2}>
        <img src={playerColorImageList[color]} className={classes.img}/>
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
          
          <h3>Kill Cooldown Time Countdown</h3>
          
          <Grid container spacing={2} alignItems="center" justify="flex-start">
            
            <Grid item>
            <TextField
              disabled
              id="outlined-disabled"
              value={currentKillCooldwonTime}
              variant="outlined"
              size="small"
              margin="dense"
              className={classes.killCooldownTimeTextfield}
            />
            </Grid>
              <Grid item>
                <Button
                  variant="contained"
                  color="secondary"
                  size='small'
                  onClick={killCooldwonTimeCountDown}
                >
                Start
                </Button>
              </Grid>
              <Grid item>
                <Button
                  variant="contained"
                  color="default"
                  size='small'
                  onClick={resetKillCooldownTime}
                >
                Reset
                </Button>
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
              <Grid container={12} alignItems="center" justify="center">
                <Grid item xs={2}>
                </Grid>
                <Grid item xs={2}>
                  <img src={GhostIcon} alt="Ghost" className={classes.img}/>
                </Grid>
                <Grid item xs={2}>
                  <img src={EmergencyMeetingIcon} alt="EmergencyMeeting" className={classes.img}/>
                </Grid>
                <Grid item xs={2}>
                  <img src={CrewmateIcon} alt="Crewmate" className={classes.img}/>
                </Grid>
                <Grid item xs={2}>
                </Grid>
                <Grid item xs={2}>
                  <img src={ImposterIcon} alt="Imposter" className={classes.img}/>
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
          <Grid container alignItems="center" justify="center">
            {playerBlock}
          </Grid>
          
          <br />
          
          {/* 
            リセットボタン
          */}
          <Grid container xs alignItems="center" justify="center">
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

Players.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Players);
