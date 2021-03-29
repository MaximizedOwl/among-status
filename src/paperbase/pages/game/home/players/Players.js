import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import PlayersIcon from '@material-ui/icons/People';
import PlayerSlider from './PlayerSlider';
import Switch from '@material-ui/core/Switch';
import Checkbox from '@material-ui/core/Checkbox';

/* 
  画像
*/
import Red from '../../../../../img/players/red.png';
import Blue from '../../../../../img/players/blue.png';
import Green from '../../../../../img/players/green.png';
import Pink from '../../../../../img/players/pink.png';
import Orange from '../../../../../img/players/orange.png';
import Yellow from '../../../../../img/players/yellow.png';
import Black from '../../../../../img/players/black.png';
import White from '../../../../../img/players/white.png';
import Purple from '../../../../../img/players/purple.png';
import Brown from '../../../../../img/players/brown.png';
import Cyan from '../../../../../img/players/cyan.png';
import Lime from '../../../../../img/players/lime.png';


const styles = (theme) => ({
  paper: {
    maxWidth: 936,
    margin: 'auto',
    overflow: 'hidden',
    textAligh: 'center'
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
});

function Players(props) {

  /* 
    全体のprops
  */
  const { classes } = props;


  /* 
    プレイヤー参加に関する状態
  */
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
    緊急会議権の使用に関する状態
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
    選択した対象の真偽値判定にチェックを入れて真偽値を入れ替える
    会議権使用状態と参加状態のどちらでも利用可能
  */
  const handleChange = (event) => {
    

    if (event.target.name === 'isUsedEMRight') {

      console.log('start: check ' + event.target.value + ' of ' + event.target.name + '.');

      setIsUsedEMRight({ ...isUsedEMRight, [event.target.value]: event.target.checked });

      console.log('end: checked ' + event.target.value + ' of ' + event.target.name + '.');

    } if (event.target.name === 'isExistPlayer') {

      console.log('start: check ' + event.target.value + ' of ' + event.target.name + '.');

      setIsExistPlayer({ ...isExistPlayer, [event.target.value]: event.target.checked });

      console.log('end: checked ' + event.target.value + ' of ' + event.target.name + '.');


    } else {
      
    }
  };

  return (
    <Paper className={classes.paper}>

      {/* 
        上側AppBar
      */}
      <AppBar className={classes.titleBar} position="static" color="default" elevation={0}>
        <Toolbar>
            <Grid container>
              <Grid item xs>
                <PlayersIcon className={classes.block} color="inherit" />
              </Grid>
              <Grid item xs>
                <SearchIcon className={classes.block} color="inherit" />
              </Grid>
              <Grid item xs={6}>
                <Typography>
                  Detective
                </Typography>
              </Grid>
              <Grid item xs>
                <SearchIcon className={classes.block} color="inherit" />
              </Grid>
            </Grid>
        </Toolbar>
      </AppBar>

      {/* 
        メイン情報表示部
      */}
      <div className={classes.contentWrapper}>
          <Grid container alignItems='center'>

            {/* 
              Red
            */}
            <Grid container>
              <Grid item xs>
                <img src={Red}/>
              </Grid>
              <Grid item xs>
                <Switch
                  size="small"
                  checked={isExistPlayer.red}
                  onChange={handleChange}
                  color="primary"
                  name="isExistPlayer"
                  value='red'
                />
              </Grid>
              <Grid item xs={4}>
                <PlayerSlider />
              </Grid>
              <Grid item xs>
                <Checkbox
                  checked={isUsedEMRight.red}
                  onChange={handleChange}
                  size="small"
                  color="primary"
                  name="isUsedEMRight"
                  value='red'
                />
              </Grid>
            </Grid>

            {/* 
              Blue
            */}
            <Grid container>
              <Grid item xs>
                <Typography>
                  Blue
                </Typography>
              </Grid>
              <Grid item xs>
                <Switch
                  size="small"
                  checked={isExistPlayer.blue}
                  onChange={handleChange}
                  color="primary"
                  name="isExistPlayer"
                  value='blue'
                />
              </Grid>
              <Grid item xs={4}>
                <PlayerSlider />
              </Grid>
              <Grid item xs>
                <Checkbox
                  checked={isUsedEMRight.blue}
                  onChange={handleChange}
                  size="small"
                  color="primary"
                  name="isUsedEMRight"
                  value='blue'
                />
              </Grid>
            </Grid>

            {/* 
              Green
            */}
            <Grid container>
              <Grid item xs>
                <Typography>
                  Green
                </Typography>
              </Grid>
              <Grid item xs>
                <Switch
                  size="small"
                  checked={isExistPlayer.green}
                  onChange={handleChange}
                  color="primary"
                  name="isExistPlayer"
                  value='green'
                />
              </Grid>
              <Grid item xs={4}>
                <PlayerSlider />
              </Grid>
              <Grid item xs>
                <Checkbox
                  checked={isUsedEMRight.green}
                  onChange={handleChange}
                  size="small"
                  color="primary"
                  name="isUsedEMRight"
                  value='green'
                />
              </Grid>
            </Grid>

            {/* 
              Pink
            */}
            <Grid container>
              <Grid item xs>
                <Typography>
                  Pink
                </Typography>
              </Grid>
              <Grid item xs>
                <Switch
                  size="small"
                  checked={isExistPlayer.pink}
                  onChange={handleChange}
                  color="primary"
                  name="isExistPlayer"
                  value='pink'
                />
              </Grid>
              <Grid item xs={4}>
                <PlayerSlider />
              </Grid>
              <Grid item xs>
                <Checkbox
                  checked={isUsedEMRight.pink}
                  onChange={handleChange}
                  size="small"
                  color="primary"
                  name="isUsedEMRight"
                  value='pink'
                />
              </Grid>
            </Grid>

            {/* 
              Orange
            */}
            <Grid container>
              <Grid item xs>
                <Typography>
                  Orange
                </Typography>
              </Grid>
              <Grid item xs>
                <Switch
                  size="small"
                  checked={isExistPlayer.orange}
                  onChange={handleChange}
                  color="primary"
                  name="isExistPlayer"
                  value='orange'
                />
              </Grid>
              <Grid item xs={4}>
                <PlayerSlider />
              </Grid>
              <Grid item xs>
                <Checkbox
                  checked={isUsedEMRight.orange}
                  onChange={handleChange}
                  size="small"
                  color="primary"
                  name="isUsedEMRight"
                  value='orange'
                />
              </Grid>
            </Grid>

            {/* 
              Yellow
            */}
            <Grid container>
              <Grid item xs>
                <Typography>
                  Yellow
                </Typography>
              </Grid>
              <Grid item xs>
                <Switch
                  size="small"
                  checked={isExistPlayer.yellow}
                  onChange={handleChange}
                  color="primary"
                  name="isExistPlayer"
                  value='yellow'
                />
              </Grid>
              <Grid item xs={4}>
                <PlayerSlider />
              </Grid>
              <Grid item xs>
                <Checkbox
                  checked={isUsedEMRight.yellow}
                  onChange={handleChange}
                  size="small"
                  color="primary"
                  name="isUsedEMRight"
                  value='yellow'
                />
              </Grid>
            </Grid>


            {/* 
              Black
            */}
            <Grid container>
              <Grid item xs>
                <Typography>
                  Black
                </Typography>
              </Grid>
              <Grid item xs>
                <Switch
                  size="small"
                  checked={isExistPlayer.black}
                  onChange={handleChange}
                  color="primary"
                  name="isExistPlayer"
                  value='black'
                />
              </Grid>
              <Grid item xs={4}>
                <PlayerSlider />
              </Grid>
              <Grid item xs>
                <Checkbox
                  checked={isUsedEMRight.black}
                  onChange={handleChange}
                  size="small"
                  color="primary"
                  name="isUsedEMRight"
                  value='black'
                />
              </Grid>
            </Grid>

            {/* 
              White
            */}
            <Grid container>
              <Grid item xs>
                <Typography>
                  White
                </Typography>
              </Grid>
              <Grid item xs>
                <Switch
                  size="small"
                  checked={isExistPlayer.white}
                  onChange={handleChange}
                  color="primary"
                  name="isExistPlayer"
                  value='white'
                />
              </Grid>
              <Grid item xs={4}>
                <PlayerSlider />
              </Grid>
              <Grid item xs>
                <Checkbox
                  checked={isUsedEMRight.white}
                  onChange={handleChange}
                  size="small"
                  color="primary"
                  name="isUsedEMRight"
                  value='white'
                />
              </Grid>
            </Grid>

            {/* 
              Purple
            */}
            <Grid container>
              <Grid item xs>
                <Typography>
                  Purple
                </Typography>
              </Grid>
              <Grid item xs>
                <Switch
                  size="small"
                  checked={isExistPlayer.purple}
                  onChange={handleChange}
                  color="primary"
                  name="isExistPlayer"
                  value='purple'
                />
              </Grid>
              <Grid item xs={4}>
                <PlayerSlider />
              </Grid>
              <Grid item xs>
                <Checkbox
                  checked={isUsedEMRight.purple}
                  onChange={handleChange}
                  size="small"
                  color="primary"
                  name="isUsedEMRight"
                  value='purple'
                />
              </Grid>
            </Grid>

            {/* 
              Brown
            */}
            <Grid container>
              <Grid item xs>
                <Typography>
                  Brown
                </Typography>
              </Grid>
              <Grid item xs>
                <Switch
                  size="small"
                  checked={isExistPlayer.brown}
                  onChange={handleChange}
                  color="primary"
                  name="isExistPlayer"
                  value='brown'
                />
              </Grid>
              <Grid item xs={4}>
                <PlayerSlider />
              </Grid>
              <Grid item xs>
                <Checkbox
                  checked={isUsedEMRight.brown}
                  onChange={handleChange}
                  size="small"
                  color="primary"
                  name="isUsedEMRight"
                  value='brown'
                />
              </Grid>
            </Grid>

            {/* 
              Cyan
            */}
            <Grid container>
              <Grid item xs>
                <Typography>
                  Cyan
                </Typography>
              </Grid>
              <Grid item xs>
                <Switch
                  size="small"
                  checked={isExistPlayer.cyan}
                  onChange={handleChange}
                  color="primary"
                  name="isExistPlayer"
                  value='cyan'
                />
              </Grid>
              <Grid item xs={4}>
                <PlayerSlider />
              </Grid>
              <Grid item xs>
                <Checkbox
                  checked={isUsedEMRight.cyan}
                  onChange={handleChange}
                  size="small"
                  color="primary"
                  name="isUsedEMRight"
                  value='cyan'
                />
              </Grid>
            </Grid>

            {/* 
              Lime
            */}
            <Grid container>
              <Grid item xs>
                <Typography>
                  Lime
                </Typography>
              </Grid>
              <Grid item xs>
                <Switch
                  size="small"
                  checked={isExistPlayer.lime}
                  onChange={handleChange}
                  color="primary"
                  name="isExistPlayer"
                  value='lime'
                />
              </Grid>
              <Grid item xs={4}>
                <PlayerSlider />
              </Grid>
              <Grid item xs>
              <Checkbox
                  checked={isUsedEMRight.lime}
                  onChange={handleChange}
                  size="small"
                  color="primary"
                  name="isUsedEMRight"
                  value='lime'
                />
              </Grid>
            </Grid>

            {/* 
              プレイヤーカラー記述部
              ここまで
            */}

          </Grid>
      </div>

      {/* 
        下側AppBar
      */}
      <AppBar className={classes.titleBar} position="static" color="default" elevation={0}>
        <Toolbar>
            <Grid container>
              <Grid item xs>
                <PlayersIcon className={classes.block} color="inherit" />
              </Grid>
              <Grid item xs>
                <SearchIcon className={classes.block} color="inherit" />
              </Grid>
              <Grid item xs={6}>
                <Typography>
                  Detective
                </Typography>
              </Grid>
              <Grid item xs>
                <SearchIcon className={classes.block} color="inherit" />
              </Grid>
            </Grid>
        </Toolbar>
      </AppBar>
    </Paper>
  );
}

Players.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Players);
