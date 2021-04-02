import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Switch from '@material-ui/core/Switch';
import Paper from '@material-ui/core/Paper';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { withStyles } from '@material-ui/core/styles';

/* 
  画像
*/
import Red from '../../../../../img/players/red.svg';
import red from '../../../../../img/players/red.svg';
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
import { colors } from '@material-ui/core';
import { render } from 'react-dom';




const styles = (theme) => ({
  paper: {
    maxWidth: 936,
    margin: 'auto',
    overflow: 'hidden',
  },
  contentWrapper: {
    margin: '40px 16px',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
});

function Top(props) {

  const { classes } = props;

  /* 
    キルクールダウンタイムの時間に関する記述
  */

  // 状態生成
  const [killCooldown, setKillCooldown] = React.useState('');

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
    プレイヤー参加に関する記述
  */

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

  // プレイヤーColorの配列
  const playerColorList = Object.keys(isExistPlayer);
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
  /* 
    選択した対象の真偽値判定にチェックを入れて真偽値を入れ替える
    参加状態とキルクールタイムのどちらでも利用可能
  */
  const handleChange = (event) => {
    
    if (event.target.name === 'killCooldown') {

      // console.log('start: check ' + event.target.value + ' of ' + event.target.name + '.');

      setKillCooldown(event.target.value);

      // console.log('end: checked ' + event.target.value + ' of ' + event.target.name + '.');

    } if (event.target.name === 'isExistPlayer') {

      console.log('start: check ' + event.target.value + ' of ' + event.target.name + '.');

      setIsExistPlayer({ ...isExistPlayer, [event.target.value]: event.target.checked });

      console.log('end: checked ' + event.target.value + ' of ' + event.target.name + '.');

    } else {
      
    }
  };

  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };


  /* 
    プレイヤー12色のブロック
  */
    const playerBlock = playerColorList.map((color, index) => 

      // <React.Fragment>
      <Grid container alignItems="center" justify="center">
        <Grid item xs>
          <img src={Object.values(playerColorImageList)[index]}/>
        </Grid>
        <Grid item xs>
          <Switch                  
            checked={Object.values(isExistPlayer)[index]}
            onChange={handleChange}
            color="primary"
            name="isExistPlayer"
            value={playerColorList[index]}
          />
        </Grid>
      </Grid>
      //  </React.Fragment>; 
    );


  return (
    <Paper className={classes.paper}>
      <div className={classes.contentWrapper}>

      {/* 
        キルクールダウンの状態
      */}
      <h3>Kill Cooldown Time(s)</h3>
      <FormControl variant="outlined" className={classes.formControl}>
        <Select
          value={killCooldown}
          onChange={handleChange}
          label="KillCooldown"
          name='killCooldown'
          MenuProps={MenuProps}
        >
        {killCooldownTimeList.map((time) =>
          <MenuItem
            key={time.toString()}
            value={time}
          >
            {time.toString()}
          </MenuItem>
        )};
        </Select>
      </FormControl>
      
      {/* デバッグ用 */}
      <Typography>{killCooldown.toString()}</Typography>

      {/* 
        プレイヤーの参加状態
      */}

      <h3>Player On/Off</h3> 
        <Grid container alignItems="center" justify="center">
          
          {/* プレイヤー12色のブロック */}
          {playerBlock}
        </Grid>
      </div>
    </Paper>
  );
}

Top.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Top);
