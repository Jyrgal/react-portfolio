import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Paper } from '@material-ui/core'
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles((theme) => ({
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
    <div>
      <div style={{height: "30px"}}/>
      <Grid item container>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Paper className={classes.paper} background="#e91e63" elevation={10}>
            <Grid item container>
              <Grid item xs={1} sm={1} md={1} lg={1}/>
              <Grid item xs={7} sm={7} md={7} lg={7}>
                <h1>James</h1>
              </Grid>
              <Grid item xs={2} sm={2} md={2} lg={2}>
                <Grid item container direction="column" alignItems="center">
                  <Grid item xs={4} sm={4} md={4} lg={4}>
                  </Grid>
                  <Grid item xs={4} sm={4} md={4} lg={4}>
                    {/* <Button style={{display: "inline-flex",verticalAlign:"center"}}>
                      <GitHubIcon style={{display: "inline-flex",verticalAlign:"center"}}/>
                    </Button> */}
                    <LinkedInIcon/>
                  </Grid>
                  <Grid item xs={4} sm={4} md={4} lg={4}>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={2} sm={2} md={2} lg={2}>
                
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
