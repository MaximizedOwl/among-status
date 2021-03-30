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
// import Red from '../../../../../img/players/red.svg';
import Red from '../../../../../img/players/red.svg';
// import Blue from '../../../../../img/players/blue.svg';
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
});

function Players(props) {

  /* 
    全体のprops
  */
  const { classes } = props;


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

  return (
    <Paper className={classes.paper}>

      {/* 
        上側AppBar
      */}
      <AppBar className={classes.titleBar} position="static" color="default" elevation={0}>
        <Toolbar>
            <Grid container={12}>
              <Grid item xs={2}>
              </Grid>
              <Grid item xs={2}>
                <img src={GhostIcon} alt="Ghost"/>
              </Grid>
              <Grid item xs={2}>
                <img src={EmergencyMeetingIcon} alt="EmergencyMeeting"/>
              </Grid>
              <Grid item xs={2}>
                <img src={CrewmateIcon} alt="Crewmate"/>
              </Grid>
              <Grid item xs={2}>
              </Grid>
              <Grid item xs={2}>
                <img src={ImposterIcon} alt="Imposter"/>
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
                  checked={isDead.red}
                  onChange={handleChange}
                  color="secondary"
                  name="isDead"
                  value='red'
                />
              </Grid>
              <Grid item xs={2}>
                <Checkbox
                  checked={isUsedEMRight.red}
                  onChange={handleChange}
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
                  
                  checked={isDead.blue}
                  onChange={handleChange}
                  color="secondary"
                  name="isDead"
                  value='blue'
                />
              </Grid>
              <Grid item xs={2}>
                <Checkbox
                  checked={isUsedEMRight.blue}
                  onChange={handleChange}
                  
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
                  checked={isDead.green}
                  onChange={handleChange}
                  color="secondary"
                  name="isDead"
                  value='green'
                />
              </Grid>
              <Grid item xs={2}>
                <Checkbox
                  checked={isUsedEMRight.green}
                  onChange={handleChange}                  
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
                  checked={isDead.pink}
                  onChange={handleChange}
                  color="secondary"
                  name="isDead"
                  value='pink'
                />
              </Grid>
              <Grid item xs={2}>
                <Checkbox
                  checked={isUsedEMRight.pink}
                  onChange={handleChange}                  
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
                  checked={isDead.orange}
                  onChange={handleChange}
                  color="secondary"
                  name="isDead"
                  value='orange'
                />
              </Grid>

              <Grid item xs={2}>
                <Checkbox
                  checked={isUsedEMRight.orange}
                  onChange={handleChange}                  
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
                  checked={isDead.yellow}
                  onChange={handleChange}
                  color="secondary"
                  name="isDead"
                  value='yellow'
                />
              </Grid>
              <Grid item xs={2}>
                <Checkbox
                  checked={isUsedEMRight.yellow}
                  onChange={handleChange}                  
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
                  checked={isDead.black}
                  onChange={handleChange}
                  color="secondary"
                  name="isDead"
                  value='black'
                />
              </Grid>
              <Grid item xs={2}>
                <Checkbox
                  checked={isUsedEMRight.black}
                  onChange={handleChange}                  
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
                  checked={isDead.white}
                  onChange={handleChange}
                  color="secondary"
                  name="isDead"
                  value='white'
                />
              </Grid>
              <Grid item xs={2}>
                <Checkbox
                  checked={isUsedEMRight.white}
                  onChange={handleChange}                  
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
                  checked={isDead.purple}
                  onChange={handleChange}
                  color="secondary"
                  name="isDead"
                  value='purple'
                />
              </Grid>
              <Grid item xs={2}>
                <Checkbox
                  checked={isUsedEMRight.purple}
                  onChange={handleChange}                  
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
                  checked={isDead.brown}
                  onChange={handleChange}
                  color="secondary"
                  name="isDead"
                  value='brown'
                />
              </Grid>
              <Grid item xs={2}>
                <Checkbox
                  checked={isUsedEMRight.brown}
                  onChange={handleChange}                  
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
                  checked={isDead.cyan}
                  onChange={handleChange}
                  color="secondary"
                  name="isDead"
                  value='cyan'
                />
              </Grid>
              <Grid item xs={2}>
                <Checkbox
                  checked={isUsedEMRight.cyan}
                  onChange={handleChange}                  
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
                  checked={isDead.lime}
                  onChange={handleChange}
                  color="secondary"
                  name="isDead"
                  value='lime'
                />
              </Grid>
              <Grid item xs={2}>
              <Checkbox
                  checked={isUsedEMRight.lime}
                  onChange={handleChange}                  
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
              </Grid>
              <Grid item xs={2}>
                <img src={GhostIcon} alt="Ghost"/>
              </Grid>
              <Grid item xs={2}>
                <img src={EmergencyMeetingIcon} alt="EmergencyMeeting"/>
              </Grid>
              <Grid item xs={2}>
                <img src={CrewmateIcon} alt="Crewmate"/>
              </Grid>
              <Grid item xs={2}>
              </Grid>
              <Grid item xs={2}>
                <img src={ImposterIcon} alt="Imposter"/>
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
