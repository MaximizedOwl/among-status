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
});

function Terms(props) {
  const { classes } = props;

  return (
    <Paper className={classes.paper}>
      <div className={classes.contentWrapper}>
        <h2>利用規約</h2>
        <Typography
          variant='body1'
          color='textSecondary'
          align='left'
          style={{ whiteSpace: 'pre-line' }}
        >
          {`  この利用規約（以下，「本規約」といいます。）は，Among StatUsの（以下，「本サイト」といいます。）の利用条件を定めるものです。ユーザーの皆さま（以下，「ユーザー」といいます。）には，本規約に従って，本サイトをご利用いただきます。本サイトを利用された時点で当規約に同意されたものとみなされますので，必ず最後までお読み下さい。
            この規約を守って頂けない場合，程度によっては機能規制，アクセス拒否，IPアドレス・ホストの公開，警察サイバー犯罪対策課への通報などを行う事があります。
          `}
        </Typography>

        <h4>第1条（適用）</h4>
        <Typography
          variant='body1'
          color='textSecondary'
          align='left'
          style={{ whiteSpace: 'pre-line' }}
        >
          {`  本規約は，ユーザーと本サイト運営者との間の本サイトの利用に関わる一切の関係に適用されるものとします。
            本サイト運営者は本差異とに関し，本規約のほか，ご利用にあたってのルール等，各種の定め（以下，「個別規定」といいます。）をすることがあります。これら個別規定はその名称のいかんに関わらず，本規約の一部を構成するものとします。
            本規約の規定が前条の個別規定の規定と矛盾する場合には，個別規定において特段の定めなき限り，個別規定の規定が優先されるものとします。
        `}
        </Typography>

        <h4>第2条（保証の否認および免責事項）</h4>
        <Typography
          variant='body1'
          color='textSecondary'
          align='left'
          style={{ whiteSpace: 'pre-line' }}
        >
          {`  本サイトは，本サイトに事実上または法律上の瑕疵（安全性，信頼性，正確性，完全性，有効性，特定の目的への適合性，セキュリティなどに関する欠陥，エラーやバグ，権利侵害などを含みます。）がないことを明示的にも黙示的にも保証しておりません。
            当サイト運営者は，本サイトに起因してユーザーに生じたあらゆる損害について一切の責任を負いません。
            本サイトは，本サイトに関して，ユーザーと他のユーザーまたは第三者との間において生じた取引，連絡または紛争等について一切責任を負いません。
          `}
        </Typography>

        <h4>第3条（本サイトの提供の停止等）</h4>
        <Typography
          variant='body1'
          color='textSecondary'
          align='left'
          style={{ whiteSpace: 'pre-line' }}
        >
          {`  本サイト運営者は，以下のいずれかの事由があると判断した場合，ユーザーに事前に通知することなく本サイトの全部または一部の提供を停止または中断することができるものとします。
                本サイトにかかるコンピュータシステムの保守点検または更新を行う場合
                地震，落雷，火災，停電または天災などの不可抗力により，本サイトの提供が困難となった場合
                コンピュータまたは通信回線等が事故により停止した場合
                その他，本サイト運営者が本サイトの提供が困難と判断した場合
              本サイト運営者は，本サイトの提供の停止または中断により，ユーザーまたは第三者が被ったいかなる不利益または損害についても，一切の責任を負わないものとします。

          `}
        </Typography>

        <h4>第4条（サービス内容の変更等）</h4>
        <Typography
          variant='body1'
          color='textSecondary'
          align='left'
          style={{ whiteSpace: 'pre-line' }}
        >
          {`  本サイト運営者は，ユーザーに通知することなく，本サイトの内容を変更しまたは本サイトの提供を中止することができるものとし，これによってユーザーに生じた損害について一切の責任を負いません。
          `}
        </Typography>

        <h4>第5条（利用規約の変更）</h4>
        <Typography
          variant='body1'
          color='textSecondary'
          align='left'
          style={{ whiteSpace: 'pre-line' }}
        >
          {`  本サイト運営者は，必要と判断した場合には，ユーザーに通知することなくいつでも本規約を変更することができるものとします。なお，本規約の変更後，本サイトの利用を開始した場合には，当該ユーザーは変更後の規約に同意したものとみなします。
        `}
        </Typography>

        <h4>第6条（準拠法・裁判管轄）</h4>
        <Typography
          variant='body1'
          color='textSecondary'
          align='left'
          style={{ whiteSpace: 'pre-line' }}
        >
          {`  本規約の解釈にあたっては，日本法を準拠法とします。
            本サイトに関して紛争が生じた場合には，本サイト運営者の居住地を管轄する裁判所を専属的合意管轄とします。
        `}
        </Typography>
      </div>
    </Paper>
  );
}

Terms.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Terms);
