import React from 'react'
import { AppBar, Toolbar, Typography, 
    makeStyles, Grid, Container, 
    Button, IconButton, CardMedia, GridListTile,
    GridList, ButtonGroup } from "@material-ui/core"
import {MenuIcon} from "@material-ui/icons"
import ReactPlayer from 'react-player'
import Logo from "./SpinLogo"
import windowDimensions from './getWindowDimensions'

const useStyles = makeStyles(() => ({
    logoStyles: {
        flex: 1,
        color: 'white',
        fontSize: '36px',
        fontWeight: 'bold'
    },
    textStyles: {
        color: 'white',
        fontSize: '18px',
    }
}))
const Header = () => {
    const classes = useStyles()
    const { height, width } = windowDimensions()
    return (
      <React.Fragment>
        <AppBar position="fixed" color="transparent">
          <Toolbar>
            <Container>
              <Grid item container alignItems="center" justify="center">
              <Grid item xs={0} sm={1}/>
              <Grid item xs={0} sm={3}>
                <Button className={classes.logoStyles}>JP</Button>
              </Grid>
                <Grid item xs={0} sm={4}/>
                <Grid item xs={0} sm={3} alignItems='center'>
                  <Button className={classes.textStyles}>About</Button>
                  <Button className={classes.textStyles}>Projects</Button>
                  <Button className={classes.textStyles}>Contact</Button>
                </Grid>
              </Grid>
            </Container>
          </Toolbar>
        </AppBar>
      </React.Fragment>
    )
}

export default Header