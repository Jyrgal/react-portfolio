import React, { Component, useState, useRef } from 'react'
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
import ContactForm from './ContactForm'
import Scroll from './Scroll'
import Education from './Education'

const App = () => {
  const master_clicked = () => {
    console.log("master_clicked")
  }

  const logoRef = useRef(null)
  const aboutRef = useRef(null)
  const projectsRef = useRef(null)
  const contactRef = useRef(null)

  return (
    <Grid container direction="column">
      <Grid item>
        <Header 
          logoNav={logoRef}
          aboutNav={aboutRef}
          projectsNav={projectsRef}
          contactNav={contactRef}
        />
      </Grid>
      
      <div className="Main" ref={logoRef}>
          <Title/>
          <div style={{height: "35vh"}}/>
          <Fab href="#about" color="white" aria-label="add" onClick={(e) => { aboutRef.current.scrollIntoView({ block: 'start', behavior: 'smooth' }); e.preventDefault() }}>
            <ArrowDownwardIcon />
          </Fab>
      </div>
      <div style={{height: "10vh"}}/>
      <Grid item container ref={aboutRef}>
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
          
          <div style={{height: "20vh"}}/>
          <h1>Education</h1>

          <Grid item container>
              <Grid item xs={0} sm={2}>
              </Grid>
              <Grid item xs={0} sm={8}>
                <Education/>
              </Grid>
              <Grid item xs={0} sm={2}>
              </Grid>
          </Grid>
          
          <div style={{height: "50vh"}}/>
          <h1>Skills</h1>
          
          <Grid item container>
              <Grid item xs={0} sm={6}>
                {/* <Experience experience="ikea"/> */}
                <SkillList type="technical"/>
              </Grid>
              <Grid item xs={0} sm={6}>
                <SkillList type="soft"/>
              </Grid>
          </Grid>
          {/* <Skills logo="backend" style={{    display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center"}}/>
          <Grid item container>
            <Grid item xs={0} sm={6}/>
            <Grid item xs={0} sm={6}>
              <Skills logo="frontend"/>
            </Grid>
          </Grid>
          <Skills logo="misc"/> */}
          <div style={{height: "5vh"}} ref={projectsRef}/>
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
          {/* <ProjectRow 
            leftName="QA Time Prediction" leftDescription="Prediction of total time required for car to pass QA testing"
            leftPic="videos/dungeon.png" leftUrl="https://github.com/Jyrgal/mercedes_challenge"
            rightName="React Portfolio" rightDescription="Personal project for portfolio"
            rightPic="videos/workshop.png" rightUrl="https://github.com/Jyrgal/react-portfolio"
          />
          <div style={{height: "50px"}}/>
          <ProjectRow
            leftName="Movie Rating Prediction" leftDescription="Prediction of movie review ratings based on textual analysis"
            leftPic="videos/dungeon.png" leftUrl="https://github.com/Jyrgal/imdbML"
            rightName="Stock Prediction" rightDescription="Ongoing project/playground to test stock predictions"
            rightPic="videos/workshop.png" rightUrl="https://github.com/Jyrgal/stcokPredict"
          />
          <div style={{height: "50px"}}/>
          <ProjectRow 
            leftName="Egg Pickup" leftDescription="Robotics project where full automation of egg pickup/delivery"
            leftPic="videos/dungeon.png" leftUrl="https://github.com/Jyrgal/eggPickup"
            rightName="React Workshop" rightDescription="Short demo website used to teach beginner React skills"
            rightPic="videos/workshop.png" rightUrl="https://github.com/Jyrgal/react-workshop"
          /> */}
          <ProjectRow/>
          <div style={{height: "50px"}}/>
          <Grid item container ref={contactRef}>
          <Grid item xs={0} sm={3}>
                
                </Grid>
              <Grid item xs={0} sm={6}>
              <Paper style={{fontSize:'2em'}}>
                Fill the form below to contact me!
                </Paper>
                <div style={{height: "10px"}}/>
                <Form/>
              </Grid>
              <Grid item xs={0} sm={3}>
                
              </Grid>
          </Grid>
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

