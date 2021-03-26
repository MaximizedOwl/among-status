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


const styles = (theme) => ({
  paper: {
    maxWidth: 936,
    margin: 'auto',
    overflow: 'hidden',
    textAligh: 'center'
  },
  searchBar: {
    borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
  },
  // searchInput: {
  //   fontSize: theme.typography.fontSize,
  // },
  block: {
    display: 'block',
  },
  // addUser: {
  //   marginRight: theme.spacing(1),
  // },
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

    } if (event.target.name === 'isExist') {
      

    } else {
      
    }
  };
  
  // const targetState = {
  //   isUsedEMRight: 'isUsedEMRight',
  //   isExist: 'isExist'
  // };

  return (
    <Paper className={classes.paper}>
      <AppBar className={classes.searchBar} position="static" color="default" elevation={0}>
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
      <div className={classes.contentWrapper}>
          <Grid container alignItems='center'>

            {/* 
              Red
            */}
            <Grid container>
              <Grid item xs>
                <Typography>
                  Red
                </Typography>
              </Grid>
              <Grid item xs>
                <Switch
                  size="small"
                  checked={state.red.isExist}
                  onChange={handleChange}
                  name="isExist"
                  inputProps={{ 'aria-label': 'secondary checkbox' }}
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
                {/* <Switch
                  size="small"
                  checked={state.red.isExist}
                  onChange={handleChange}
                  color="primary"
                  name="checkedB"
                  inputProps={{ 'aria-label': 'primary checkbox' }}
                /> */}
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
                  checked={state.blue.hasEMRight}
                  onChange={handleChange}
                  name="hasEMRight"
                  inputProps={{ 'aria-label': 'secondary checkbox' }}
                />
              </Grid>
              <Grid item xs={4}>
                <PlayerSlider />
              </Grid>
              <Grid item xs>
                {/* <Switch
                  size="small"
                  checked={state.blue.isExist}
                  onChange={handleChange}
                  color="primary"
                  name="checkedB"
                  inputProps={{ 'aria-label': 'primary checkbox' }}
                /> */}
                <Checkbox inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} />
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
                  checked={state.green.hasEMRight}
                  onChange={handleChange}
                  name="hasEMRight"
                  inputProps={{ 'aria-label': 'secondary checkbox' }}
                />
              </Grid>
              <Grid item xs={4}>
                <PlayerSlider />
              </Grid>
              <Grid item xs>
                <Switch
                  size="small"
                  checked={state.green.isExist}
                  onChange={handleChange}
                  color="primary"
                  name="checkedB"
                  inputProps={{ 'aria-label': 'primary checkbox' }}
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
                  checked={state.pink.hasEMRight}
                  onChange={handleChange}
                  name="hasEMRight"
                  inputProps={{ 'aria-label': 'secondary checkbox' }}
                />
              </Grid>
              <Grid item xs={4}>
                <PlayerSlider />
              </Grid>
              <Grid item xs>
                <Switch
                  size="small"
                  checked={state.pink.isExist}
                  onChange={handleChange}
                  color="primary"
                  name="checkedB"
                  inputProps={{ 'aria-label': 'primary checkbox' }}
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
                  checked={state.orange.hasEMRight}
                  onChange={handleChange}
                  name="hasEMRight"
                  inputProps={{ 'aria-label': 'secondary checkbox' }}
                />
              </Grid>
              <Grid item xs={4}>
                <PlayerSlider />
              </Grid>
              <Grid item xs>
                <Switch
                  size="small"
                  checked={state.orange.isExist}
                  onChange={handleChange}
                  color="primary"
                  name="checkedB"
                  inputProps={{ 'aria-label': 'primary checkbox' }}
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
                  checked={state.yellow.hasEMRight}
                  onChange={handleChange}
                  name="hasEMRight"
                  inputProps={{ 'aria-label': 'secondary checkbox' }}
                />
              </Grid>
              <Grid item xs={4}>
                <PlayerSlider />
              </Grid>
              <Grid item xs>
                <Switch
                  size="small"
                  checked={state.yellow.isExist}
                  onChange={handleChange}
                  color="primary"
                  name="checkedB"
                  inputProps={{ 'aria-label': 'primary checkbox' }}
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
                  checked={state.black.hasEMRight}
                  onChange={handleChange}
                  name="hasEMRight"
                  inputProps={{ 'aria-label': 'secondary checkbox' }}
                />
              </Grid>
              <Grid item xs={4}>
                <PlayerSlider />
              </Grid>
              <Grid item xs>
                <Switch
                  size="small"
                  checked={state.black.isExist}
                  onChange={handleChange}
                  color="primary"
                  name="isExist"
                  inputProps={{ 'aria-label': 'primary checkbox' }}
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
                  checked={state.white.hasEMRight}
                  onChange={handleChange}
                  name="hasEMRight"
                  inputProps={{ 'aria-label': 'secondary checkbox' }}
                />
              </Grid>
              <Grid item xs={4}>
                <PlayerSlider />
              </Grid>
              <Grid item xs>
                <Switch
                  size="small"
                  checked={state.white.isExist}
                  onChange={handleChange}
                  color="primary"
                  name="checkedB"
                  inputProps={{ 'aria-label': 'primary checkbox' }}
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
                  checked={state.purple.hasEMRight}
                  onChange={handleChange}
                  name="hasEMRight"
                  inputProps={{ 'aria-label': 'secondary checkbox' }}
                />
              </Grid>
              <Grid item xs={4}>
                <PlayerSlider />
              </Grid>
              <Grid item xs>
                <Switch
                  size="small"
                  checked={state.purple.isExist}
                  onChange={handleChange}
                  color="primary"
                  name="checkedB"
                  inputProps={{ 'aria-label': 'primary checkbox' }}
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
                  checked={state.brown.hasEMRight}
                  onChange={handleChange}
                  name="hasEMRight"
                  inputProps={{ 'aria-label': 'secondary checkbox' }}
                />
              </Grid>
              <Grid item xs={4}>
                <PlayerSlider />
              </Grid>
              <Grid item xs>
                <Switch
                  size="small"
                  checked={state.brown.isExist}
                  onChange={handleChange}
                  color="primary"
                  name="checkedB"
                  inputProps={{ 'aria-label': 'primary checkbox' }}
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
                  checked={state.cyan.hasEMRight}
                  onChange={handleChange}
                  name="hasEMRight"
                  inputProps={{ 'aria-label': 'secondary checkbox' }}
                />
              </Grid>
              <Grid item xs={4}>
                <PlayerSlider />
              </Grid>
              <Grid item xs>
                <Switch
                  size="small"
                  checked={state.cyan.isExist}
                  onChange={handleChange}
                  color="primary"
                  name="checkedB"
                  inputProps={{ 'aria-label': 'primary checkbox' }}
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
                  checked={state.lime.hasEMRight}
                  onChange={handleChange}
                  name="hasEMRight"
                  inputProps={{ 'aria-label': 'secondary checkbox' }}
                />
              </Grid>
              <Grid item xs={4}>
                <PlayerSlider />
              </Grid>
              <Grid item xs>
                <Switch
                  size="small"
                  checked={state.lime.isExist}
                  onChange={handleChange}
                  color="primary"
                  name="checkedB"
                  inputProps={{ 'aria-label': 'primary checkbox' }}
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

Players.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Players);
