import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import Select from '@material-ui/core/Select';
import { withStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import PropTypes from 'prop-types';
import React from 'react';

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
  img: {
    maxWidth: 50,
    minWidth: 50,
    height: 'auto',
  },
  container: {
    textAlign: 'center',
  },
});

function Setting(props) {
  const {
    classes,
    playerColorImageList,
    playerColorList,
    isExistPlayer,
    setIsExistPlayer,
    killCooldownTime,
    setKillCooldownTime,
    killCooldownTimeList,
    setIsActiveTimer,
    intervalRef,
    setCount,
  } = props;

  /* 
    選択した対象の真偽値判定にチェックを入れて真偽値を入れ替える
    参加状態とキルクールタイムのどちらでも利用可能
  */
  const handleSelectChange = (event) => {
    if (event.target.name === 'killCooldownTime') {
      setKillCooldownTime(event.target.value);

      setCount(event.target.value);
      // eslint-disable-next-line
      clearInterval(intervalRef.current);
      setIsActiveTimer(false);
    }
    if (event.target.name === 'isExistPlayer') {
      setIsExistPlayer({
        ...isExistPlayer,
        [event.target.value]: event.target.checked,
      });
    }
  };

  // キルクールダウンのドロップダウンリストのサイズ調整
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
  const oddPlayerList = playerColorList.filter((e, i) => i % 2 === 0);
  const evenPlayerList = playerColorList.filter((e, i) => i % 2 === 1);

  // 左側のプレイヤーの配列
  const oddPlayerBlock = oddPlayerList.map((color) => (
    <Grid container alignItems='center' justify='flex-start' key={color}>
      <Grid item xs={4}>
        <img src={playerColorImageList[color]} className={classes.img} />
      </Grid>
      <Grid item xs={2}>
        <Switch
          checked={isExistPlayer[color]}
          onChange={handleSelectChange}
          color='primary'
          name='isExistPlayer'
          value={color}
        />
      </Grid>
    </Grid>
  ));

  // 右側のプレイヤーの配列
  const evenPlayerBlock = evenPlayerList.map((color) => (
    <Grid container alignItems='center' justify='flex-start' key={color}>
      <Grid item xs={4}>
        <img src={playerColorImageList[color]} className={classes.img} />
      </Grid>
      <Grid item xs={2}>
        <Switch
          checked={isExistPlayer[color]}
          onChange={handleSelectChange}
          color='primary'
          name='isExistPlayer'
          value={color}
        />
      </Grid>
    </Grid>
  ));

  return (
    <React.Fragment>
      {/* 
        キルクールダウンの状態
    */}
      <Paper className={classes.paper}>
        <div className={classes.contentWrapper}>
          <h3>Kill Cooldown Time(s)</h3>
          <FormControl variant='outlined' className={classes.formControl}>
            <Select
              value={killCooldownTime}
              onChange={handleSelectChange}
              label='KillCooldownTime'
              name='killCooldownTime'
              MenuProps={MenuProps}
            >
              {killCooldownTimeList.map((time) => (
                <MenuItem key={time} value={time}>
                  {time}
                </MenuItem>
              ))}
              ;
            </Select>
          </FormControl>
        </div>
      </Paper>

      <br />

      {/* 
        プレイヤーの参加状態
    */}
      <Paper className={classes.paper}>
        <div className={classes.contentWrapper}>
          <h3>Player On/Off</h3>
          {/* プレイヤー12色のブロック */}
          <Grid
            container
            alignItems='center'
            justify='flex-start'
            xs={12}
            className={classes.container}
          >
            <Grid container alignItems='center' justify='flex-start' xs={6}>
              {oddPlayerBlock}
            </Grid>
            <Grid container alignItems='center' justify='flex-start' xs={6}>
              {evenPlayerBlock}
            </Grid>
          </Grid>
        </div>
      </Paper>
    </React.Fragment>
  );
}

Setting.propTypes = {
  classes: PropTypes.object.isRequired,
  playerColorImageList: PropTypes.object.isRequired,
  playerColorList: PropTypes.object.isRequired,
  isExistPlayer: PropTypes.object.isRequired,
  setIsExistPlayer: PropTypes.func.isRequired,
  killCooldownTime: PropTypes.number,
  setKillCooldownTime: PropTypes.func.isRequired,
  killCooldownTimeList: PropTypes.object.isRequired,
  setIsActiveTimer: PropTypes.func.isRequired,
  intervalRef: PropTypes.object.isRequired,
  setCount: PropTypes.func.isRequired,
};

export default withStyles(styles)(Setting);
