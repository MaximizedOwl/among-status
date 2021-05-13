import { Typography } from '@material-ui/core';
import React from 'react';

const Basic = () => {
  return (
    <div>
      <h2>なにができるの？</h2>
      <Typography variant='body1' color='textSecondary' align='left'>
        {`
					Among Usプレイ中の基本的な状況の整理や記録ができます。現在利用できる情報・機能は下記のとおりです。
				`}
      </Typography>
      <Typography
        variant='body1'
        color='textSecondary'
        align='left'
        style={{ whiteSpace: 'pre-line' }}
      >
        {`
					- 参加プレイヤーカラーの設定
					- キルクールダウンのタイマー
					- プレイヤーの生死の記録
					- 緊急会議権の利用有無の記録
					- インポスター疑惑の度合いの記録
					- マップの閲覧
					- 位置整理のための、マップ上でのプレイヤーアイコンのドラッグ&ドロップ
				`}
      </Typography>

      <h2>基本的な使い方</h2>
      <Typography
        color='textSecondary'
        align='left'
        style={{ whiteSpace: 'pre-line' }}
      >
        {`1. サイドメニューからHomeへ移動。
				  Settingタブでキルクールダウンタイムと参加プレイヤーを設定します。
				2. ゲーム開始。
				  Mainタブに移動して、状況に応じた記録を行います。マップを確認したい場合はMapタブに移動して確認もできます。`}
      </Typography>

      <h2>※諸注意</h2>
      <Typography
        color='textSecondary'
        align='left'
        style={{ whiteSpace: 'pre-line' }}
      >
        {`現在β版なこともあり、未解決の問題も多いです。ご不便をおかけしますが、ご了承願います。

					1. ゲームの記録を行っている最中には「Home」から離れないようにしてください。
					  ブラウザの更新を行ったり、「Usage」や「About」へ飛ぶと、記録されていた状況がリセットされてしまいます。
					2. 動作環境・ご利用想定機種
					  IEなどの一部ブラウザや特定のバージョンでは機能が動作しない可能性があります。また、発売から長い年月がたった機種や特殊な機種ではレイアウトが崩れる可能性がございます。申し訳ありませんが、ご了承ください。
					  
				`}
      </Typography>
    </div>
  );
};

export default Basic;
