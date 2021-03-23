import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles({
    root: {
    //   paddingInline: 40,
    },
  });
  
  function valuetext(value) {
    return `${value}°C`;
  }
  

const PlayerSlider = () => {

    const classes = useStyles();

    const marks = [
        {
          value: 0,
          label: 'Clue',
        },
        {
          value: 25,
          label: 'Clue...?',
        },
        {
          value: 50,
          label: '?????',
        },
        {
          value: 75,
          label: 'Imposter...?',
        },
        {
            value: 100,
            label: 'Imposter',
        },
      ];

    return (
        <div className={classes.root}>
            <Slider
                defaultValue={50}
                getAriaValueText={valuetext}
                aria-labelledby="discrete-slider"
                valueLabelDisplay="auto"
                step={25}
                // marks={marks}
                min={0}
                max={100}
                // disabled
                // color="black"
            />
        </div>
    );
};

export default PlayerSlider;