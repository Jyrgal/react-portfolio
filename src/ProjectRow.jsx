import React from 'react'
import {Grid} from '@material-ui/core'
import Typical from 'react-typical'
import MediaCard from './MediaCard'

const ProjectRow = () => {
    return (
        <Grid item container >
          <Grid item xs={0} sm={1}/>
          <Grid item xs={0} sm={4}>
            <MediaCard name="Dungeon Crawler" pic="videos/dungeon.png"/>
          </Grid>
          <Grid item xs={0} sm={2}/>
          <Grid item xs={0} sm={4}>
            <MediaCard name="React Workshop" pic="videos/workshop.png"/>
          </Grid>
          <Grid item xs={0} sm={1}/>
        </Grid>
    )
}
export default ProjectRow