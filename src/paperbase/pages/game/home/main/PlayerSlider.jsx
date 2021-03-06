import Slider from '@material-ui/core/Slider';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React from 'react';

const useStyles = makeStyles({
  root: {
    //   paddingInline: 40,
  },
});

const PlayerSlider = (props) => {
  const classes = useStyles();

  const { color, suspiciousness, setSuspiciousness } = props;

  const handleChange = (event, newValue) => {
    setSuspiciousness({ ...suspiciousness, [color]: newValue });
  };

  return (
    <div className={classes.root}>
      <Slider
        onChange={handleChange}
        value={suspiciousness[color]}
        aria-labelledby='discrete-slider'
        valueLabelDisplay='auto'
        step={25}
        min={0}
        max={100}
        name={color}
      />
    </div>
  );
};

PlayerSlider.propTypes = {
  color: PropTypes.string,
  suspiciousness: PropTypes.object,
  setSuspiciousness: PropTypes.func,
};

export default PlayerSlider;
