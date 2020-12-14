import React, { Component, useState, useRef } from 'react'
import { AppBar, Toolbar, Typography, 
    makeStyles, Grid, Container, 
    Button, IconButton, CardMedia, GridListTile,
    GridList, ButtonGroup } from "@material-ui/core"
import {MenuIcon} from "@material-ui/icons"
import ReactPlayer from 'react-player'
import Logo from "./logos/JP_logo.jpg"
import windowDimensions from './getWindowDimensions'
import { useEffect } from 'react'

const useStyles = makeStyles(() => ({
    logoStyles: {
        flex: 1,
        color: 'white',
        height: '48px',
        width: '18px',
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
      const [Background, setBackground] = useState(false)
      const appBar = useRef()
      appBar.current = Background
      useEffect(() => {
        const handleScroll = () => {
          const show = window.scrollY > height - 50
          if (appBar.current !== show) {
            setBackground(show)
          }
        }
        document.addEventListener('scroll', handleScroll)
        return () => {
          document.removeEventListener('scroll', handleScroll)
        }
      }, [])

      return (
        <React.Fragment>
          <AppBar position="fixed" color={Background ? 'primary': 'transparent'}>
            <Toolbar>
              <Container>
                <Grid item container alignItems="center" justify="center">
                <Grid item xs={0} sm={1}/>
                <Grid item xs={0} sm={3}>
                  <Button className={classes.logoStyles}>
                    <img src={Logo} className={classes.logoStyles}/>
                  </Button>
                </Grid>
                  <Grid item xs={0} sm={4}/>
                  <Grid item xs={0} sm={3} alignItems='center'>
                    <Button className={classes.textStyles}>asdf</Button>
                    <Button className={classes.textStyles}>asdf</Button>
                    <Button className={classes.textStyles}>asdf</Button>
                  </Grid>
                </Grid>
              </Container>
            </Toolbar>
          </AppBar>
        </React.Fragment>
      )
}

export default Header