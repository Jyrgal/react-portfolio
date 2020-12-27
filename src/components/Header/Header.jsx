import React, { useState, useRef } from 'react'
import { AppBar, Toolbar, 
    makeStyles, Grid, Container, 
    Button } from "@material-ui/core"
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
        fontSize: '16px',
    }
}))

const Header = (props) => {
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
      const logoNav = props.logoNav
      const aboutNav = props.aboutNav
      const projectsNav = props.projectsNav
      const contactNav = props.contactNav

      return (
        <React.Fragment>
            <AppBar position="fixed" color={Background ? 'primary': 'transparent'}>
              <Toolbar>
                <Container>
                  <Grid item container alignItems="center" justify="center">
                  <Grid item xs={0} sm={1}/>
                  <Grid item xs={0} sm={3}>
                    <Button className={classes.logoStyles} onClick={(e) => { logoNav.current.scrollIntoView({ block: 'start', behavior: 'smooth' }); e.preventDefault() }}>
                      <img src='/jp2_logo.png' className={classes.logoStyles}/>
                    </Button>
                  </Grid>
                    <Grid item xs={0} sm={4}/>
                    <Grid item xs={0} sm={3} alignItems='center'>
                      <Button className={classes.textStyles} onClick={(e) => { aboutNav.current.scrollIntoView({ block: 'start', behavior: 'smooth' }); e.preventDefault() }}>About</Button>
                      <Button className={classes.textStyles} onClick={(e) => { projectsNav.current.scrollIntoView({ block: 'start', behavior: 'smooth' }); e.preventDefault() }}>Projects</Button>
                      <Button className={classes.textStyles} onClick={(e) => { contactNav.current.scrollIntoView({ block: 'start', behavior: 'smooth' }); e.preventDefault() }}>Contact</Button>
                    </Grid>
                  </Grid>
                </Container>
              </Toolbar>
            </AppBar>
        </React.Fragment>
      )
}

export default Header