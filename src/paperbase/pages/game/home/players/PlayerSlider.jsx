import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles({
    root: {
    //   paddingInline: 40,
    },
  });
  

const PlayerSlider = (props) => {

  const classes = useStyles();

  const {
    color,
    suspiciousness,
    setSuspiciousness,
  } = props;

  const handleChange = (event, newValue) => {

    console.log([event.target]);
    setSuspiciousness({...suspiciousness, [color]: newValue});
    
  };


  /* 目盛り */
  // const marks = [
  //     {
  //       value: 0,
  //       label: 'Clue',
  //     },
  //     {
  //       value: 25,
  //       label: 'Clue...?',
  //     },
  //     {
  //       value: 50,
  //       label: '?????',
  //     },
  //     {
  //       value: 75,
  //       label: 'Imposter...?',
  //     },
  //     {
  //         value: 100,
  //         label: 'Imposter',
  //     },
  //   ];

  return (
      <div className={classes.root}>
          <Slider
              onChange={handleChange}
              value={suspiciousness[color]}
              aria-labelledby="discrete-slider"
              valueLabelDisplay="auto"
              step={25}
              min={0}
              max={100}
              name={color}
          />
      </div>
  );
};

export default PlayerSlider;