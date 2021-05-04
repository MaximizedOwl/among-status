import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';
import Header from '../components/Header';

const lightColor = 'rgba(255, 255, 255, 0.7)';

const styles = (theme) => ({
    main: {
        flex: 1,
        padding: theme.spacing(6, 4),
        background: '#eaeff1',
    },
    paper: {
      maxWidth: 936,
      margin: 'auto',
      overflow: 'hidden',
    },
    contentWrapper: {
      margin: '40px 16px',
    },
    menuButton: {
      marginLeft: -theme.spacing(1),
    },
      iconButtonAvatar: {
      padding: 4,
    },
    link: {
      textDecoration: 'none',
      color: lightColor,
      '&:hover': {
        color: theme.palette.common.white,
      },
    },
    button: {
      borderColor: lightColor,
    },
});

const NoMatch = (props) => {

    const { classes, onDrawerToggle } = props;

    return (
      <div>
      {/* 
        ヘッダー部
      */}
      {/* タブを除くヘッダー */}
      <Header onDrawerToggle={onDrawerToggle} pageName="" />

        <main className={classes.main}>
            <Paper className={classes.paper}>
                <div className={classes.contentWrapper}>
                    <h2>Not Found</h2>
                    <Typography paragraph={true} variant="body1" color="textSecondary" align="center">
                        お探しのページは見つかりませんでした。
                        <RouterLink to={'/'} >
                            {'（クリックしてホーム画面へアクセス）'}
                        </RouterLink>
                    </Typography>
                </div>
            </Paper>
        </main>
      </div>
    );
};

NoMatch.propTypes = {
    classes: PropTypes.object.isRequired,
};
  
export default withStyles(styles)(NoMatch);
