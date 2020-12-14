import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core'
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(120),
      height: theme.spacing(40),
    },
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  paper: {
    backgroundColor: '#FFFFFF',
    background: '#FFFFFF',
    color: '#000000'
  },
  writing: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }
}));

export default function About() {
  const classes = useStyles();

  return (
        <div className={classes.root}>
          <div style={{height: "30px"}}/>
          <Paper className={classes.paper} background="#e91e63" elevation={10} >
            <h1 className={classes.writing}>Hi, I'm James</h1>
            <h3 className={classes.writing}>An amibitious tech enthusiast 📟 who enjoys all sorts of challenges</h3>
            <h3 className={classes.writing}>My passions 🔥 lie in discovering new and innovative things </h3>
            <h3 className={classes.writing}>like the vast landscape of machine learning 🤖DEEDOO DEEDOO</h3>
            <h3 className={classes.writing}>or the artistic 🎨 world of front end programming.</h3>
          </Paper>
        </div>
  );
}
