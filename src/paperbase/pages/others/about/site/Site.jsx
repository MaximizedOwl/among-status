import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import React from 'react';

// eslint-disable-next-line no-unused-vars
const styles = (theme) => ({
  paper: {
    maxWidth: 936,
    margin: 'auto',
    overflow: 'hidden',
    textAligh: 'center',
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
  emphasis: {
    color: '#FF5050',
  },
});

function Site(props) {
  const { classes } = props;

  return (
    <Paper className={classes.paper}>
      <div className={classes.contentWrapper}>
        <h2>Among StatUsとは</h2>
        <Typography
          color='textSecondary'
          align='left'
          style={{ whiteSpace: 'pre-line' }}
          paragraph={true}
        >
          {`  Among StatUs（以下、当サイト）はAmong Usをプレイする際の補助となるよう、一個人により制作された非公式のファンサイトです。
          `}
        </Typography>

        <Typography
          color='textSecondary'
          align='left'
          style={{ whiteSpace: 'pre-line' }}
          paragraph={true}
        >
          {`  利用規約は「Terms」からご確認ください。当サイトを利用された時点で当規約に同意されたものとみなされます。必ず最後までお読み下さい。
          `}
        </Typography>

        <Typography
          color='textPrimary'
          align='left'
          className={classes.emphasis}
        >
          {'  「Among Us」は、'}
          <Link
            color='textSecondary'
            href='https://www.innersloth.com/index.php'
            target='_blank'
            className={classes.emphasis}
          >
            Innersloth
          </Link>
          {
            '社様の登録商標です。当サイトは、Innersloth社様、他関連企業様とは一切関係ありません。'
          }
        </Typography>

        <Typography variant='body1' color='textSecondary' align='left'>
          {
            '  サイト下部著作権表示はサイト独自の内容に関する著作権を示すものであり、「Among Us」や使用させていただいている画像等の権利を主張するものではありません。'
          }
        </Typography>

        <h2>権利等の表記（敬称略）</h2>

        <h4>Paperbase</h4>
        <Typography
          color='textSecondary'
          align='left'
          style={{ whiteSpace: 'pre-line' }}
        >
          {`Created by Material-UI OSS
          `}
          <Link
            color='inherit'
            href='https://opensource.org/licenses/MIT'
            target='_blank'
          >
            {'MIT Lisence'}
          </Link>
        </Typography>

        <h4>Among Us Icon Pack</h4>
        <Typography
          color='textSecondary'
          align='left'
          style={{ whiteSpace: 'pre-line' }}
        >
          {'Author: '}
          <Link
            color='textSecondary'
            href='https://iconscout.com/contributors/nemmu-s/'
            target='_blank'
          >
            {/* eslint-disable-next-line quotes */}
            {"Nem'mu Studio"}
          </Link>
          {`
          Date: Unknown
            WebSite: `}
          <Link
            color='textSecondary'
            href='https://iconscout.com/icon-pack/among-us-2'
            target='_blank'
          >
            {'Among Us Icon Pack'}
          </Link>
        </Typography>

        <h4>Among Us Game - Line Icon Set</h4>
        <Typography
          color='textSecondary'
          align='left'
          style={{ whiteSpace: 'pre-line' }}
        >
          {'Author: '}
          <Link
            color='textSecondary'
            href='https://www.behance.net/aireench'
            target='_blank'
          >
            {'Aireen Ch'}
          </Link>
          {`
          Date: 2021/3/24
            WebSite: `}
          <Link
            color='textSecondary'
            href='https://www.behance.net/gallery/116070117/Among-Us-Game-Line-Icon-Set'
            target='_blank'
          >
            {'Among-Us-Game-Line-Icon-Set'}
          </Link>
        </Typography>

        <h4>Among Us Icon</h4>
        <Typography
          color='textSecondary'
          align='left'
          style={{ whiteSpace: 'pre-line' }}
        >
          {'Author: '}
          <Link
            color='textSecondary'
            href='https://iconscout.com/contributors/sonisokell'
            target='_blank'
          >
            {'Soni Sokell'}
          </Link>
          {`
          Date: Unknown
          WebSite: `}
          <Link
            color='textSecondary'
            href='https://iconscout.com/icons/among-us'
            target='_blank'
          >
            {'Among Us icons'}
          </Link>
          <Typography
            color='textSecondary'
            align='left'
            style={{ whiteSpace: 'pre-line' }}
          >
            {
              '※2021 年 6 月 15 日のアップデートで追加された6色については、こちらを参考にサイト運営者が追加しました。'
            }
          </Typography>
        </Typography>

        <h4>マップ画像5種</h4>
        <Typography color='textSecondary' align='left'>
          <Link
            color='textSecondary'
            href='https://x.com/terazo/status/1346099688718516224?s=20'
            target='_blank'
          >
            {'テラゾー(@terazo)様のポストツリーより'}
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
