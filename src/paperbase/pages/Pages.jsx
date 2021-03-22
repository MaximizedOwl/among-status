import React from 'react';
import Home from './game/home/Home';

const Pages = (props) => {

    const { classes, ...other } = props;

    return (
        <div>
            {/* 
                ToDo:ルーティング処理
            */}

            <p>Pages</p>
            
            <Home {...other} />
          <main className={classes.main}>
            <Content />
          </main>
        </div>
    );
};

export default Pages;
