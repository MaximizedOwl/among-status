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
import PlayerSlider from './pages/game/home/players/PlayerSlider';
import Switch from '@material-ui/core/Switch';

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

function Content(props) {

  /* 
    全体のprops
  */
  const { classes } = props;


  /* 
    スイッチの制御
    hasEMRight:緊急会議権の有無
    isExist:ゲームへの参加の有無
  */
  const [state, setState] = React.useState({
    black: {
      hasEMRight: true,
      isExist: true,
    },
    blue: {
      hasEMRight: true,
      isExist: true,
    },
    brown: {
      hasEMRight: true,
      isExist: true,
    },
    cyan: {
      hasEMRight: true,
      isExist: true,
    },
    forteGreen: {
      hasEMRight: true,
      isExist: true,
    },
    green: {
      hasEMRight: true,
      isExist: true,
    },
    lime: {
      hasEMRight: true,
      isExist: true,
    },
    purple: {
      hasEMRight: true,
      isExist: true,
    },
    red: {
      hasEMRight: true,
      isExist: true,
    },
    tan: {
      hasEMRight: true,
      isExist: true,
    },
    white: {
      hasEMRight: true,
      isExist: true,
    },
    yellow: {
      hasEMRight: true,
      isExist: true,
    }
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };


  
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
                  name="checkedB"
                  inputProps={{ 'aria-label': 'primary checkbox' }}
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
                <Switch
                  size="small"
                  checked={state.blue.isExist}
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
              ForteGreen
            */}
            <Grid container>
              <Grid item xs>
                <Typography>
                  F-Green
                </Typography>
              </Grid>
              <Grid item xs>
                <Switch
                  size="small"
                  checked={state.forteGreen.hasEMRight}
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
                  checked={state.forteGreen.isExist}
                  onChange={handleChange}
                  color="primary"
                  name="checkedB"
                  inputProps={{ 'aria-label': 'primary checkbox' }}
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
                  checked={state.red.hasEMRight}
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
                  checked={state.red.isExist}
                  onChange={handleChange}
                  color="primary"
                  name="checkedB"
                  inputProps={{ 'aria-label': 'primary checkbox' }}
                />
              </Grid>
            </Grid>

            {/* 
              Tan
            */}
            <Grid container>
              <Grid item xs>
                <Typography>
                  Tan
                </Typography>
              </Grid>
              <Grid item xs>
                <Switch
                  size="small"
                  checked={state.tan.hasEMRight}
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
                  checked={state.tan.isExist}
                  onChange={handleChange}
                  color="primary"
                  name="checkedB"
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
          </Grid>
      </div>
    </Paper>
  );
}

Content.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Content);
