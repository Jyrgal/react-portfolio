import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Grid, Container, Typography, Paper, Fab } from '@material-ui/core'
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import theme from './theme'
import Header from './Header'
import ReactPlayer from 'react-player'
import SpinLogo from './SpinLogo'
import About from './About'
import Title from './Title'
import PastCard from './PastCard'
import MediaCard from './MediaCard'
import ProjectRow from './ProjectRow'
import Skills from './Skills'
import Experience from './Experience'
import Form from './MyForm'
import Type from './Type'
import windowDimensions from './getWindowDimensions'
import PhotoCard from './PhotoCard'
import Frame from './Frame'
import SkillList from './SkillList'

const App = () => {
  const master_clicked = () => {
    console.log("master_clicked")
  }
  return (
    <Grid container direction="column">
      <Grid item>
        <Header/>
      </Grid>
      
      <div className="Main">
          <Title/>
          <div style={{height: "35vh"}}/>
          <Fab href="#about" color="white" aria-label="add">
            <ArrowDownwardIcon />
          </Fab>
      </div>
      <div style={{height: "10vh"}}/>
      
      <Grid item container>
        <Grid item sm md/>
        <Grid item sm
              justify="center" 
              alignItems="center"
        >
          {/* <ReactPlayer url='videos/logo.mp4' wrapper="container" loop={true} playing={true} muted/>  */}
          {/* <Container maxWidth="false">
            <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} />
          </Container> */}
          {/* <Paper elevation={9}>Hi waowsas 
          </Paper> */}
          <About id="about"/>
          
          <div style={{height: "20px"}}/>
          {/* <SkillList/> */}

          <h1>Experience</h1>
          <Grid item container>
            <Grid item xs={0} sm={6} >
              {/* <Experience experience="mastercard"/> */}
              <PastCard experience="mastercard" company="Mastercard" position="Software Engineer" duration="2019-2020"/>
            </Grid>
            <Grid item xs={0} sm={6}>
              {/* <Experience experience="auspost"/> */}
              <PastCard experience="ikea" company="Ikea" position="Salesperson" duration="2020-Current"/>
            </Grid>
          </Grid>
          <div style={{height: "20vh"}}/>
          <Grid item container>
              <Grid item xs={0} sm={6}>
                {/* <Experience experience="ikea"/> */}
                <PastCard experience="auspost" company="Aus Post" position="Cashier" duration="2017-2019"/>
              </Grid>
              <Grid item xs={0} sm={6}>
              </Grid>
          </Grid>
          
          <div style={{height: "50vh"}}/>

          <h1>Skills</h1>
          <Skills logo="backend" style={{    display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center"}}/>
          <Grid item container>
            <Grid item xs={0} sm={6}/>
            <Grid item xs={0} sm={6}>
              <Skills logo="frontend"/>
            </Grid>
          </Grid>
          <Skills logo="misc"/>
          <div style={{height: "50px"}}/>
          <h1>Projects</h1>
            {/* <Grid item xs={0} sm={1}/>
            <Grid item xs={0} sm={4}>
              <MediaCard name="Dungeon Crawler" pic="videos/dungeon.png"/>
            </Grid>
            <Grid item xs={0} sm={2}/>
            <Grid item xs={0} sm={4}>
              <MediaCard name="React Workshop" pic="videos/workshop.png"/>
            </Grid>
            <Grid item xs={0} sm={1}/> */}
          <ProjectRow 
            leftName="Dungeon Crawler" leftDescription="A java dungeon crawler game where the player uses wasd to reach the exit."
            leftPic="videos/dungeon.png" leftUrl="https://github.com/Jyrgal/Dungeon-Hunter"
            rightName="React Workshop" rightDescription="A short demo website used for an uni workshop"
            rightPic="videos/workshop.png" rightUrl="https://github.com/Jyrgal/react-workshop"
          />
          <div style={{height: "50px"}}/>
          <ProjectRow
            leftName="Exchange Scraper" leftPic="videos/dungeon.png" leftUrl="https://github.com/Jyrgal/Dungeon-Hunter"
            rightName="Website Redesign" rightPic="videos/workshop.png" rightUrl="https://github.com/Jyrgal/react-workshop"
          />
          <div style={{height: "50px"}}/>
          <Form/>
          <div style={{height: "50px"}}/>
          {/* <div style={{display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center"}}>
            <PhotoCard/>
          </div> */}
          {/* <Frame/> */}
        </Grid>
        <Grid item sm/>
      </Grid>
    </Grid>
  )
}

export default App;

