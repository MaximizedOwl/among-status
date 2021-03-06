import CssBaseline from '@material-ui/core/CssBaseline';
import Hidden from '@material-ui/core/Hidden';
import {
  createMuiTheme,
  ThemeProvider,
  withStyles,
} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import React from 'react';
// import Link from '@material-ui/core/Link';
import {
  BrowserRouter as Router,
  Link as RouterLink,
  Route,
  Switch,
} from 'react-router-dom';
import Navigator from './Navigator';
import Home from './pages/game/home/Home';
import NoMatch from './pages/NoMatch';
import About from './pages/others/about/About';
import Usage from './pages/others/usage/Usage';

function Copyright() {
  return (
    <div>
      <Typography variant='body2' color='textSecondary' align='center'>
        {'当サイトは個人が運営するAmong Us非公式のファンサイト'}
        <RouterLink to={'/about'}>{'（詳細）'}</RouterLink>
        {'です。'}
      </Typography>
      <Typography variant='body2' color='textSecondary' align='center'>
        {' © '}
        {/* <Link color="inherit" href=""> */}
        {'Among StatUs'}
        {/* </Link> */} {new Date().getFullYear()}
        {/* {'.'} */}
      </Typography>
    </div>
  );
}

let theme = createMuiTheme({
  palette: {
    primary: {
      light: '#63ccff',
      main: '#009be5',
      dark: '#006db3',
    },
  },
  typography: {
    h5: {
      fontWeight: 500,
      fontSize: 26,
      letterSpacing: 0.5,
    },
  },
  shape: {
    borderRadius: 8,
  },
  props: {
    MuiTab: {
      disableRipple: true,
    },
  },
  mixins: {
    toolbar: {
      minHeight: 48,
    },
  },
});

theme = {
  ...theme,
  overrides: {
    MuiDrawer: {
      paper: {
        backgroundColor: '#18202c',
      },
    },
    MuiButton: {
      label: {
        textTransform: 'none',
      },
      contained: {
        boxShadow: 'none',
        '&:active': {
          boxShadow: 'none',
        },
      },
    },
    MuiTabs: {
      root: {
        marginLeft: theme.spacing(1),
      },
      indicator: {
        height: 3,
        borderTopLeftRadius: 3,
        borderTopRightRadius: 3,
        backgroundColor: theme.palette.common.white,
      },
    },
    MuiTab: {
      root: {
        textTransform: 'none',
        margin: '0 16px',
        minWidth: 0,
        padding: 0,
        [theme.breakpoints.up('md')]: {
          padding: 0,
          minWidth: 0,
        },
      },
    },
    MuiIconButton: {
      root: {
        padding: theme.spacing(1),
      },
    },
    MuiTooltip: {
      tooltip: {
        borderRadius: 4,
      },
    },
    MuiDivider: {
      root: {
        backgroundColor: '#404854',
      },
    },
    MuiListItemText: {
      primary: {
        fontWeight: theme.typography.fontWeightMedium,
      },
    },
    MuiListItemIcon: {
      root: {
        color: 'inherit',
        marginRight: 0,
        '& svg': {
          fontSize: 20,
        },
      },
    },
    MuiAvatar: {
      root: {
        width: 32,
        height: 32,
      },
    },
  },
};

const drawerWidth = 280;

const styles = {
  root: {
    display: 'flex',
    minHeight: '100vh',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  app: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  footer: {
    padding: theme.spacing(2),
    background: '#eaeff1',
  },
  link: {
    textDecoration: 'none',
  },
};

function Paperbase(props) {
  const { classes } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  /* 
    Homeタブの選択項目
  */
  // const [selectedPage, setSelectedPage] = React.useState(1);

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <CssBaseline />

        <Router>
          <nav className={classes.drawer}>
            {/* 
            JavaScriptでの制御
            スマートフォン等のサイズ時に適用されるナビゲーションの開閉はここ
          */}
            <Hidden smUp implementation='js'>
              <Navigator
                PaperProps={{ style: { width: drawerWidth } }}
                variant='temporary'
                open={mobileOpen}
                onClose={handleDrawerToggle}
                // selectedPage
              />
            </Hidden>

            {/* 
            JavaScriptでの制御
            DesktopPCなどのサイズで表示される、ナビゲーション開閉の存在しない場合の描画はこちらの担当
          */}
            <Hidden xsDown implementation='css'>
              <Navigator PaperProps={{ style: { width: drawerWidth } }} />
            </Hidden>
          </nav>
          <div className={classes.app}>
            {/* 
            ページ（ヘッダーとコンテント）のルーティング部分
          */}
            <Switch>
              <Route exact path='/'>
                <Home onDrawerToggle={handleDrawerToggle} />
              </Route>
              <Route path='/usage'>
                <Usage onDrawerToggle={handleDrawerToggle} />
              </Route>
              <Route path='/about'>
                <About onDrawerToggle={handleDrawerToggle} />
              </Route>
              <Route path='/*'>
                <NoMatch onDrawerToggle={handleDrawerToggle} />
              </Route>
            </Switch>

            {/* 
            フッター
          */}

            <footer className={classes.footer}>
              <Copyright />
            </footer>
          </div>
        </Router>
      </div>
    </ThemeProvider>
  );
}

Paperbase.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Paperbase);
