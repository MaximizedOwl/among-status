import { Typography } from '@material-ui/core';
import React from 'react';

const Basic = () => {
    return (
        <div>

            <h2>なにができるの？</h2>
            <Typography paragraph={true} variant="body1" color="textSecondary" align="left">
                Among Usプレイ中の基本的な状況の記録ができます。
                現在記録・利用できる情報は下記のとおりです。
            </Typography>
            <Typography variant="body1" color="textSecondary" align="left">- どのプレイヤーが参加しているのかの設定</Typography>
            <Typography variant="body1" color="textSecondary" align="left">- キルクールダウンタイムの設定と経過通知（開発中）</Typography>
            <Typography variant="body1" color="textSecondary" align="left">- プレイヤーの生死の記録</Typography>
            <Typography variant="body1" color="textSecondary" align="left">- 緊急会議権の利用有無の記録</Typography>
            <Typography variant="body1" color="textSecondary" align="left">- インポスター疑惑の度合いの記録</Typography>
            <Typography variant="body1" color="textSecondary" align="left">- マップの閲覧</Typography>

            <h2>基本的な使い方</h2>
            <Typography color="textSecondary" align="left">
                1. サイドメニューからHomeへ移動。Topタブでキルクールダウンタイムと参加プレイヤーを設定します。
            </Typography>
            <Typography color="textSecondary" align="left">
                2. ゲーム開始。Playerタブに移動して、状況に応じた記録を行います。マップを確認したい場合はMapタブに移動して確認もできます。
            </Typography>

            <h2>※諸注意</h2>
            <Typography color="textSecondary" align="left">
                1. Homeでゲームの記録を行っている最中にはHomeから離れないようにしてください。
                ブラウザの更新を行ったり、UsageやAboutへ飛ぶと、記録されていた状況がリセットされます。
                今後、Homeから離れても記録がリセットされないようになる予定です。
            </Typography>
            <Typography color="textSecondary" align="left">
                2. 現在β版なこともあり、未解決の問題も多いです。ご不便をおかけしますが、ご了承願います。
            </Typography>
        </div>
    );
};

export default Basic;
