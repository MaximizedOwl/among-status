import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';


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

function Site(props) {

  const { classes } = props;

  return (
    <Paper className={classes.paper}>
      <div className={classes.contentWrapper}>
      <h2>当サイトについて</h2>
        <Typography variant="body1" color="textSecondary" align="left">
          {'「Among Us」は、'}
          <Link color='textSecondary' href='https://www.innersloth.com/index.php'>
          Innersloth
          </Link>
          {'社様の登録商標です。当サイトは個人が運営する非公式のWebサービスです。Innersloth社様、他関連企業様とは一切関係ありません。サイト下部著作権表示はサイト独自の内容に関する著作権を示すものであり、「Among Us」や使用させていただいている画像等の権利を主張するものではありません。'}
        </Typography>

      <h2>権利等の表記（敬称略）</h2>

        <h4>Paperbase</h4>
        <Typography color="textSecondary" align="left">{'Created by Material-UI OSS'}</Typography>
        <Typography color="textSecondary" align="left">
          <Link color="inherit" href="https://opensource.org/licenses/MIT">
            {'MIT Lisence'}
          </Link>
        </Typography>

        <h4>Among Us Game - Line Icon Set</h4>
        <Typography color="textSecondary" align="left">{'Author: Aireen Ch'}</Typography>
        <Typography color="textSecondary" align="left">{'Date: 2021/3/24'}</Typography>
        <Typography color="textSecondary" align="left">{'URL: https://www.behance.net/gallery/116070117/Among-Us-Game-Line-Icon-Set'}</Typography>

        <h4>Among Us Icon</h4>
        <a href="https://iconscout.com/icons/among-us" target="_blank">Among Us Icon</a> by <a href="https://iconscout.com/contributors/sonisokell">Soni Sokell</a> on <a href="https://iconscout.com">Iconscout</a>

        <h4>マップ画像（The Skeld、MiraHQ、Polus）</h4>
        <Typography color="textSecondary" align="left">
          <Link color='textSecondary' href='https://baskmedia.jp/amongus-japanese-map/'>
            {'【AmongUs】マップ画像を作成したよ！【日本語訳対応済み】'}
          </Link>
        </Typography>

        <h4>マップ画像（The Airship）</h4>
        <Typography color="textSecondary" align="left">
          <Link color='textSecondary' href='https://twitter.com/jinguji777ch/status/1377395749567139845?s=20'>
            {'アモアス部'}
          </Link>
        </Typography>

      </div>


      
   </Paper>
  );
}

Site.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Site);
