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
    キルクールダウンタイムの時間に関する状態
  */
  const [killCooldown, setKillCooldown] = React.useState('');

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


  return (
    <Paper className={classes.paper}>
      <div className={classes.contentWrapper}>


      {/* 
        キルクールダウンの状態
      */}
      <h3>Kill Cooldown Time</h3>
      <FormControl variant="outlined" className={classes.formControl}>
        <Select
          value={killCooldown}
          onChange={handleChange}
          label="KillCooldown"
          displayEmpty
          name='killCooldown'
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>10s</MenuItem>
          <MenuItem value={12.5}>12.5s</MenuItem>
          <MenuItem value={15}>15s</MenuItem>
          <MenuItem value={17.5}>17.5s</MenuItem>
          <MenuItem value={20}>10s</MenuItem>
          <MenuItem value={12.5}>12.5s</MenuItem>
          <MenuItem value={15}>15s</MenuItem>
          <MenuItem value={17.5}>17.5s</MenuItem>
          <MenuItem value={30}>10s</MenuItem>
          <MenuItem value={12.5}>12.5s</MenuItem>
          <MenuItem value={15}>15s</MenuItem>
          <MenuItem value={17.5}>17.5s</MenuItem>
          <MenuItem value={40}>10s</MenuItem>
          <MenuItem value={12.5}>12.5s</MenuItem>
          <MenuItem value={15}>15s</MenuItem>
          <MenuItem value={17.5}>17.5s</MenuItem>
          <MenuItem value={50}>10s</MenuItem>
          <MenuItem value={12.5}>12.5s</MenuItem>
          <MenuItem value={15}>15s</MenuItem>
          <MenuItem value={17.5}>17.5s</MenuItem>
          <MenuItem value={60}>60s</MenuItem>
        </Select>
      </FormControl>


      {/* 
        プレイヤーの参加状態
      */}

      <h3>Player On/Off</h3>
          
        <Grid container alignItems="center" justify="center">

            {/* 
              Red, Blue
            */}
            <Grid container alignItems="center" justify="center">
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
              <Grid item xs>
                <img src={Blue}/>
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
            </Grid>


            

            {/* 
              Green, Pink
            */}
            <Grid container alignItems="center" justify="center">
              <Grid item xs>
              <img src={Green}/>
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

              <Grid item xs>
              <img src={Pink}/>
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
            </Grid>

            {/* 
              Orange, Yellow
            */}
            <Grid container alignItems="center" justify="center">
              <Grid item xs>
              <img src={Orange}/>
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

              <Grid item xs>
                <img src={Yellow}/>
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
            </Grid>

            {/* 
              Black, White
            */}
            <Grid container alignItems="center" justify="center">
              <Grid item xs>
                <img src={Black}/>
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

              <Grid item xs>
                <img src={White}/>
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
            </Grid>


            {/* 
              Purple, Brown
            */}
            <Grid container alignItems="center" justify="center">
              <Grid item xs>
                <img src={Purple}/>
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

              <Grid item xs>
                <img src={Brown}/>
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
            </Grid>

            {/* 
              Cyan, Lime
            */}
            <Grid container alignItems="center" justify="center">
              <Grid item xs>
                <img src={Cyan}/>
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

              <Grid item xs>
                <img src={Lime}/>
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
            </Grid>

            {/* 
              プレイヤーカラー記述部
              ここまで
            */}

          </Grid>
      </div>
    </Paper>
  );
}

Top.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Top);
