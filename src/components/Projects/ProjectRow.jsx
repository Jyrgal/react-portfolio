import React from 'react'
import {Grid} from '@material-ui/core'
import MediaCard from './MediaCard'
import Projects from './ProjectData'
import { makeStyles } from '@material-ui/core/styles'
const styles = { 
  card: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }
}

const useStyles = makeStyles((theme) => ({
  card: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: '50px'
  }
}));

const ProjectRow = () => {
  const classes = useStyles();
    return (
      Projects.map((project, key) => {
        return (
          <Grid item container>
            <Grid item xs={0} sm={0} md={0} lg={0}/>
            <Grid item className={classes.card} xs={12} sm={12} md={6} lg={6}>
              <MediaCard name={project.leftName} pic={project.leftImage} url={project.leftUrl} description={project.leftDescription} long={project.leftLong}/>
            </Grid>
            <Grid item className={classes.card} xs={12} sm={12} md={6} lg={6}>
              <MediaCard name={project.rightName} pic={project.rightImage} url={project.rightUrl} description={project.rightDescription} long={project.rightLong}/>
            </Grid>
            <Grid item xs={0} sm={0} md={0} lg={0}/>
          </Grid>
        )
      })
    )
}
export default ProjectRow