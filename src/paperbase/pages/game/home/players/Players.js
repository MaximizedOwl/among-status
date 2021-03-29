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
            <Grid container={12}>
              <Grid item xs={2}>
                <PlayersIcon className={classes.block} color="inherit" />
              </Grid>
              <Grid item xs={2}>
                <SearchIcon className={classes.block} color="inherit" />
              </Grid>
              <Grid item xs={2}>
                <SearchIcon className={classes.block} color="inherit" />
              </Grid>
              <Grid item xs={6}>
                <Typography>
                  Imposter...?
                </Typography>
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
            <Grid container xs={12}>
              <Grid item xs={2}>
                <img src={Red}/>
              </Grid>
              <Grid item xs={2}>
                <Checkbox
                  size="small"
                  checked={isExistPlayer.red}
                  onChange={handleChange}
                  color="secondary"
                  name="isExistPlayer"
                  value='red'
                />
              </Grid>
              <Grid item xs={2}>
                <Checkbox
                  checked={isUsedEMRight.red}
                  onChange={handleChange}
                  size="small"
                  color="primary"
                  name="isUsedEMRight"
                  value='red'
                />
              </Grid>
              <Grid item xs={6}>
                <PlayerSlider />
              </Grid>
            </Grid>

            {/* 
              Blue
            */}
            <Grid container={12}>
              <Grid item xs={2}>
                <img src={Blue}/>
              </Grid>
              <Grid item xs={2}>
                <Checkbox
                  size="small"
                  checked={isExistPlayer.blue}
                  onChange={handleChange}
                  color="secondary"
                  name="isExistPlayer"
                  value='blue'
                />
              </Grid>
              <Grid item xs={2}>
                <Checkbox
                  checked={isUsedEMRight.blue}
                  onChange={handleChange}
                  size="small"
                  color="primary"
                  name="isUsedEMRight"
                  value='blue'
                />
              </Grid>
              <Grid item xs={6}>
                <PlayerSlider />
              </Grid>
            </Grid>

            {/* 
              Green
            */}
            <Grid container={12}>
              <Grid item xs={2}>
                <img src={Green}/>
              </Grid>
              <Grid item xs={2}>
                <Checkbox
                  size="small"
                  checked={isExistPlayer.green}
                  onChange={handleChange}
                  color="secondary"
                  name="isExistPlayer"
                  value='green'
                />
              </Grid>
              <Grid item xs={2}>
                <Checkbox
                  checked={isUsedEMRight.green}
                  onChange={handleChange}
                  size="small"
                  color="primary"
                  name="isUsedEMRight"
                  value='green'
                />
              </Grid>
              <Grid item xs={6}>
                <PlayerSlider />
              </Grid>
            </Grid>

            {/* 
              Pink
            */}
            <Grid container={12}>
              <Grid item xs={2}>
                <img src={Pink}/>
              </Grid>
              <Grid item xs={2}>
                <Checkbox
                  size="small"
                  checked={isExistPlayer.pink}
                  onChange={handleChange}
                  color="secondary"
                  name="isExistPlayer"
                  value='pink'
                />
              </Grid>
              <Grid item xs={2}>
                <Checkbox
                  checked={isUsedEMRight.pink}
                  onChange={handleChange}
                  size="small"
                  color="primary"
                  name="isUsedEMRight"
                  value='pink'
                />
              </Grid>
              <Grid item xs={6}>
                <PlayerSlider />
              </Grid>
            </Grid>

            {/* 
              Orange
            */}
            <Grid container={12}>
              <Grid item xs={2}>
                <img src={Orange}/>
              </Grid>
              <Grid item xs={2}>
                <Checkbox
                  size="small"
                  checked={isExistPlayer.orange}
                  onChange={handleChange}
                  color="secondary"
                  name="isExistPlayer"
                  value='orange'
                />
              </Grid>

              <Grid item xs={2}>
                <Checkbox
                  checked={isUsedEMRight.orange}
                  onChange={handleChange}
                  size="small"
                  color="primary"
                  name="isUsedEMRight"
                  value='orange'
                />
              </Grid>
              <Grid item xs={6}>
                <PlayerSlider />
              </Grid>
            </Grid>

            {/* 
              Yellow
            */}
            <Grid container={12}>
              <Grid item xs={2}>
                <img src={Yellow}/>
              </Grid>
              <Grid item xs={2}>
                <Checkbox
                  size="small"
                  checked={isExistPlayer.yellow}
                  onChange={handleChange}
                  color="secondary"
                  name="isExistPlayer"
                  value='yellow'
                />
              </Grid>
              <Grid item xs={2}>
                <Checkbox
                  checked={isUsedEMRight.yellow}
                  onChange={handleChange}
                  size="small"
                  color="primary"
                  name="isUsedEMRight"
                  value='yellow'
                />
              </Grid>
              <Grid item xs={6}>
                <PlayerSlider />
              </Grid>
            </Grid>


            {/* 
              Black
            */}
            <Grid container={12}>
              <Grid item xs={2}>
                <img src={Black}/>
              </Grid>
              <Grid item xs={2}>
                <Checkbox
                  size="small"
                  checked={isExistPlayer.black}
                  onChange={handleChange}
                  color="secondary"
                  name="isExistPlayer"
                  value='black'
                />
              </Grid>
              <Grid item xs={2}>
                <Checkbox
                  checked={isUsedEMRight.black}
                  onChange={handleChange}
                  size="small"
                  color="primary"
                  name="isUsedEMRight"
                  value='black'
                />
              </Grid>
              <Grid item xs={6}>
                <PlayerSlider />
              </Grid>
            </Grid>

            {/* 
              White
            */}
            <Grid container={12}>
              <Grid item xs={2}>
                <img src={White}/>
              </Grid>
              <Grid item xs={2}>
                <Checkbox
                  size="small"
                  checked={isExistPlayer.white}
                  onChange={handleChange}
                  color="secondary"
                  name="isExistPlayer"
                  value='white'
                />
              </Grid>
              <Grid item xs={2}>
                <Checkbox
                  checked={isUsedEMRight.white}
                  onChange={handleChange}
                  size="small"
                  color="primary"
                  name="isUsedEMRight"
                  value='white'
                />
              </Grid>
              <Grid item xs={6}>
                <PlayerSlider />
              </Grid>
            </Grid>

            {/* 
              Purple
            */}
            <Grid container={12}>
              <Grid item xs={2}>
                <img src={Purple}/>
              </Grid>
              <Grid item xs={2}>
                <Checkbox
                  size="small"
                  checked={isExistPlayer.purple}
                  onChange={handleChange}
                  color="secondary"
                  name="isExistPlayer"
                  value='purple'
                />
              </Grid>
              <Grid item xs={2}>
                <Checkbox
                  checked={isUsedEMRight.purple}
                  onChange={handleChange}
                  size="small"
                  color="primary"
                  name="isUsedEMRight"
                  value='purple'
                />
              </Grid>
              <Grid item xs={6}>
                <PlayerSlider />
              </Grid>
            </Grid>

            {/* 
              Brown
            */}
            <Grid container={12}>
              <Grid item xs={2}>
                <img src={Brown}/>
              </Grid>
              <Grid item xs={2}>
                <Checkbox
                  size="small"
                  checked={isExistPlayer.brown}
                  onChange={handleChange}
                  color="secondary"
                  name="isExistPlayer"
                  value='brown'
                />
              </Grid>
              <Grid item xs={2}>
                <Checkbox
                  checked={isUsedEMRight.brown}
                  onChange={handleChange}
                  size="small"
                  color="primary"
                  name="isUsedEMRight"
                  value='brown'
                />
              </Grid>
              <Grid item xs={6}>
                <PlayerSlider />
              </Grid>
            </Grid>

            {/* 
              Cyan
            */}
            <Grid container={12}>
              <Grid item xs={2}>
                <img src={Cyan}/>
              </Grid>
              <Grid item xs={2}>
                <Checkbox
                  size="small"
                  checked={isExistPlayer.cyan}
                  onChange={handleChange}
                  color="secondary"
                  name="isExistPlayer"
                  value='cyan'
                />
              </Grid>
              <Grid item xs={2}>
                <Checkbox
                  checked={isUsedEMRight.cyan}
                  onChange={handleChange}
                  size="small"
                  color="primary"
                  name="isUsedEMRight"
                  value='cyan'
                />
              </Grid>
              <Grid item xs={6}>
                <PlayerSlider />
              </Grid>
            </Grid>

            {/* 
              Lime
            */}
            <Grid container={12}>
              <Grid item xs={2}>
                <img src={Lime}/>
              </Grid>
              <Grid item xs={2}>
                <Checkbox
                  size="small"
                  checked={isExistPlayer.lime}
                  onChange={handleChange}
                  color="secondary"
                  name="isExistPlayer"
                  value='lime'
                />
              </Grid>
              <Grid item xs={2}>
              <Checkbox
                  checked={isUsedEMRight.lime}
                  onChange={handleChange}
                  size="small"
                  color="primary"
                  name="isUsedEMRight"
                  value='lime'
                />
              </Grid>
              <Grid item xs={6}>
                <PlayerSlider />
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
            <Grid container={12}>
              <Grid item xs={2}>
                <PlayersIcon className={classes.block} color="inherit" />
              </Grid>
              <Grid item xs={2}>
                <SearchIcon className={classes.block} color="inherit" />
              </Grid>
              <Grid item xs={2}>
                <SearchIcon className={classes.block} color="inherit" />
              </Grid>
              <Grid item xs={6}>
                <Typography>
                  Imposter...?
                </Typography>
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
