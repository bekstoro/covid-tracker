import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { CircularProgress as MUICircularProgress } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    height: 100,
    flexGrow: 1,
    margin: theme.spacing(10),
  },
}));

export default function CircularProgress() {
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
      <MUICircularProgress />
    </div>
  );
}
