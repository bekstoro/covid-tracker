import React from 'react';
import { useSelector } from 'react-redux'

import { AppBar, CssBaseline, Container, Grid, Paper, Toolbar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Chart from './components/Chart';
import Form from './components/Form';
import Title from './components/Title';
import { selectParams } from './store/params.slice';

const useStyles = makeStyles((theme) => ({
  appBarSpacer: theme.mixins.toolbar,
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  root: {
    display: 'flex',
  },
}));

export default function App() {
  const classes = useStyles();
  const params = useSelector(selectParams);
  
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="absolute">
        <Toolbar>
          <Typography component="h1" variant="h6" color="inherit" noWrap>
            Covid Tracker
          </Typography>
        </Toolbar>
      </AppBar>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={5} lg={5}>
              <Title>Search params</Title>
              <Form/>
            </Grid>
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <Chart params={params} />
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </main>
    </div>
  );
}
