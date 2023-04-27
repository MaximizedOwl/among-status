import AppBar from '@material-ui/core/AppBar';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogActions from '@material-ui/core/DialogActions';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import Snackbar from '@material-ui/core/Snackbar';
import Toolbar from '@material-ui/core/Toolbar';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';
import LinkIcon from '@material-ui/icons/Link';
import MenuIcon from '@material-ui/icons/Menu';
import ShareIcon from '@material-ui/icons/Share';
import TwitterIcon from '@material-ui/icons/Twitter';
import PropTypes from 'prop-types';
import React from 'react';
import Alert from './Alert';

// const lightColor = 'rgba(255, 255, 255, 0.7)';

const styles = (theme) => ({
  secondaryBar: {
    zIndex: 0,
  },
  menuButton: {
    marginLeft: -theme.spacing(1),
  },
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant='h6'>{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label='close'
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

// eslint-disable-next-line no-unused-vars
const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

function Header(props) {
  const { classes, onDrawerToggle, pageName } = props;

  /* URLコピー完了のスナックバー関連 */
  const [openSnackbar, setOpenSnackbar] = React.useState(false);

  const handleClickSnackbar = () => {
    setOpenSnackbar(true);
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenSnackbar(false);
  };

  /* シェアアイコンのダイアログ関連 */
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    // スナックバーが表示されていたら、それも合わせて閉じる
    if (openSnackbar === true) {
      setOpenSnackbar(false);
    }

    setOpen(false);
  };

  /* URLをクリップボードへ貼り付ける処理 */
  const copyUrl = () => {
    const siteURL = 'https://among-status.web.app/';

    navigator.clipboard.writeText(siteURL).then(
      function () {
        /* clipboard successfully set */
        // 成功時の通知スナックバー
        handleClickSnackbar();
      },
      function () {
        /* clipboard write failed */
        alert('クリップボードへの貼り付けが失敗しました。');
      }
    );
  };

  return (
    <React.Fragment>
      <AppBar color='primary' position='sticky' elevation={0}>
        <Toolbar>
          <Grid container spacing={1} alignItems='center'>
            <Hidden smUp>
              <Grid item>
                <IconButton
                  color='inherit'
                  aria-label='open drawer'
                  onClick={onDrawerToggle}
                  className={classes.menuButton}
                >
                  <MenuIcon />
                </IconButton>
              </Grid>
            </Hidden>
            <Grid item xs />
            <Grid item>
              <Tooltip title='Share'>
                <IconButton color='inherit' onClick={handleClickOpen}>
                  <ShareIcon />
                </IconButton>
              </Tooltip>
              <Dialog
                onClose={handleClose}
                aria-labelledby='customized-dialog-title'
                open={open}
                fullwidth
              >
                <DialogTitle id='customized-dialog-title' onClose={handleClose}>
                  Share
                </DialogTitle>
                <DialogContent dividers>
                  {/* Twitter */}
                  <IconButton
                    color='inherit'
                    href='https://twitter.com/share?url=https://among-status.web.app/&related=AmongStatUs&via=AmongStatUs&hashtags=AmongStatUs&text=AmongStatUs Helping tool your playing for Among Us'
                    target='_blank'
                    rel='nofollow'
                  >
                    <TwitterIcon />
                  </IconButton>
                  {/* ToDo: URL copy */}
                  <IconButton color='inherit' onClick={copyUrl}>
                    <LinkIcon />
                  </IconButton>
                </DialogContent>
                {/* コピー完了時の表示 */}
                <Snackbar
                  open={openSnackbar}
                  autoHideDuration={3000}
                  onClose={handleCloseSnackbar}
                >
                  <Alert onClose={handleCloseSnackbar} severity='success'>
                    copy successed!
                  </Alert>
                </Snackbar>
              </Dialog>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <AppBar
        component='div'
        className={classes.secondaryBar}
        color='primary'
        position='static'
        elevation={0}
      >
        <Toolbar>
          <Grid container alignItems='center' spacing={1}>
            <Grid item xs>
              <Typography color='inherit' variant='h5' component='h1'>
                {pageName}
              </Typography>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  onDrawerToggle: PropTypes.func.isRequired,
  pageName: PropTypes.string.isRequired,
};

export default withStyles(styles)(Header);
