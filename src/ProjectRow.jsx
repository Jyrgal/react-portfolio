import React from 'react'
import {Grid} from '@material-ui/core'
import Typical from 'react-typical'
import MediaCard from './MediaCard'
import Projects from './ProjectData'

const ProjectRow = () => {
    return (
      Projects.map((project, key) => {
        return (
          <Grid item container style={{marginBottom: '10px'}}>
            <Grid item xs={0} sm={1}/>
            <Grid item xs={0} sm={4}>
              <MediaCard name={project.leftName} pic={project.leftImage} url={project.leftUrl} description={project.leftDescription}/>
            </Grid>
            <Grid item xs={0} sm={2}/>
            <Grid item xs={0} sm={4}>
              <MediaCard name={project.rightName} pic={project.rightImage} url={project.rightUrl} description={project.rightDescription}/>
            </Grid>
            <Grid item xs={0} sm={1}/>
          </Grid>
        )
      })
    )
}
export default ProjectRow