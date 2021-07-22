import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CardOne from './CardOne';
import SideMenuTab from '../components/SideMenuTab'
import { Container } from '@material-ui/core'  

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        {/* Container prop to define that it is a container */}
        {/* Spacing is between containers */}
      <Grid container spacing={3}>
          {/* Item prop to define that it is an item */}
          {/* Start with xs -> sm -> md -> lg -> xl */}
        <Grid item md={2} xs={2}>
          <Paper className={classes.paper}>
              <SideMenuTab />
          </Paper>
        </Grid>
        <Grid item md={4} xs={10}>
          <Paper className={classes.paper}>
              <CardOne />
          </Paper>
        </Grid>
        <Grid item md={4} xs={10}>
          <Paper className={classes.paper}>
             <CardOne />            
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
