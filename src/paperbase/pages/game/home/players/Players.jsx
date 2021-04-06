import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import PlayerSlider from './PlayerSlider';
import Checkbox from '@material-ui/core/Checkbox';
import Switch from '@material-ui/core/Switch';

/* 
  画像
*/
import Red from '../../../../../img/players/red.svg';
import Blue from '../../../../../img/players/blue.svg';
import Green from '../../../../../img/players/green.svg';
import Pink from '../../../../../img/players/pink.svg';
import Orange from '../../../../../img/players/orange.svg';
import Yellow from '../../../../../img/players/yellow.svg';
import Black from '../../../../../img/players/black.svg';
import White from '../../../../../img/players/white.svg';
import Purple from '../../../../../img/players/purple.svg';
import Brown from '../../../../../img/players/brown.svg';
import Cyan from '../../../../../img/players/cyan.svg';
import Lime from '../../../../../img/players/lime.svg';
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
  }
});

function Players(props) {

  /* 
    全体のprops
  */
  const { classes, isExistPlayer, setIsExistPlayer } = props;

  // ユーザー総合状態（）
  const [playerState, setPlayertState] = React.useState({
    red: {
      isExist: true,
      isDead: false,
      isUsedEMRight: false,
      img: Red,
    },
    blue: {
      isExist: true,
      isDead: false,
      isUsedEMRight: false,
      img: Blue,
    },
    green: {
      isExist: true,
      isDead: false,
      isUsedEMRight: false,
      img: Green,
    },
    pink: {
      isExist: true,
      isDead: false,
      isUsedEMRight: false,
      img: Pink,
    },
    orange: {
      isExist: true,
      isDead: false,
      isUsedEMRight: false,
      img: Orange,
    },
    yellow: {
      isExist: true,
      isDead: false,
      isUsedEMRight: false,
      img: Yellow,
    },
    black: {
      isExist: true,
      isDead: false,
      isUsedEMRight: false,
      img: Black,
    },
    white: {
      isExist: true,
      isDead: false,
      isUsedEMRight: false,
      img: White,
    },
    purple: {
      isExist: true,
      isDead: false,
      isUsedEMRight: false,
      img: Purple,
    },
    brown: {
      isExist: true,
      isDead: false,
      isUsedEMRight: false,
      img: Brown,
    },
    cyan: {
      isExist: true,
      isDead: false,
      isUsedEMRight: false,
      img: Cyan,
    },
    lime: {
      isExist: true,
      isDead: false,
      isUsedEMRight: false,
      img: Lime,
    }
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

  // プレイヤーColorの配列
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

  // /* 状態生成 */
  // const [isExistPlayer, setIsExistPlayer] = React.useState({
  //   red: true,
  //   blue: true,
  //   green: true,
  //   pink: true,
  //   orange: true,
  //   yellow: true,
  //   black: true,
  //   white: true,
  //   purple: true,
  //   brown: true,
  //   cyan: true,
  //   lime: true
  // });


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

  const [currentExistPlayerList, setCurrentExistPlayerList] = React.useState(generateCurrentExistPlayer);
  console.log(currentExistPlayerList);
  // 現参加者リスト
  // 参加者の状態の元は状態で管理しており、この配列は処理をしやすくするために作成しただけなのでこれは状態として扱わなくて良い。
  // SetPlayerColorList(generateCurrentExistPlayer());

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


    } if (event.target.name === 'isExistPlayer') {

      console.log('start: check ' + event.target.value + ' of ' + event.target.name + '.');

      setIsExistPlayer({ ...isExistPlayer, [event.target.value]: event.target.checked });

      console.log('end: checked ' + event.target.value + ' of ' + event.target.name + '.');

      // 現在の参加プレイヤーを更新
      setCurrentExistPlayerList(generateCurrentExistPlayer);

      console.log('CurrentExistPlayer is ... ' + currentExistPlayerList +' .');
    } else {
      
    }
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
        <PlayerSlider />
      </Grid>
    </Grid>
  );

  const isExistPlayerBlock = playerColorList.map((color) => 

      // <React.Fragment>
      <Grid container alignItems="center" justify="center">
        <Grid item xs>
          <img src={playerColorImageList[color]}/>
        </Grid>
        <Grid item xs>
          <Switch                  
            checked={isExistPlayer[color]}
            onChange={handleChange}
            color="primary"
            name="isExistPlayer"
            value={color}
          />
        </Grid>
      </Grid>
      //  </React.Fragment>; 
  );

  return (

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
            仮の参加者変更ボタンゾーン
          */}

          {/* <Grid container alignItems="center" justify="center"> */}
            {/* プレイヤー12色のブロック */}
          {/* {isExistPlayerBlock} */}
          {/* </Grid> */}
          <Grid container alignItems="center" justify="center">
            {playerBlock}
          </Grid>

      </div>
    </Paper>
  );
}

Players.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Players);
