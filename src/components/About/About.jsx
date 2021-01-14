import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Paper } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
    },
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: 'justify'
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
          <Grid item container>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <Paper className={classes.paper} background="#e91e63" elevation={10} >
                <Grid item container>
                  <Grid item xs={1} sm={1} md={1} lg={1}/>
                  <Grid item xs={10} sm={10} md={10} lg={10}>
                    <h1 className={classes.writing}>Hi, I'm James</h1>
                    <h3>An amibitious tech enthusiast 📟 who enjoys all sorts of challenges
                    My passions 🔥 lie in discovering new and innovative things
                    like the vast landscape of machine learning 🤖DEEDOO DEEDOO
                    or the artistic 🎨 world of front end programming.</h3>
                  </Grid>
                  <Grid item xs={1} sm={1} md={1} lg={1}/>
                </Grid>
                <div style={{height: "30px"}}/>
              </Paper>
            </Grid>
          </Grid>
        </div>
  );
}
