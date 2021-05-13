import React from 'react';
import MuiAlert from '@material-ui/lab/Alert';

const Alert = (props) => {
  return (
    <div>
      <MuiAlert elevation={6} variant='filled' {...props} />;
    </div>
  );
};

export default Alert;
