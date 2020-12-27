import React, { useRef } from 'react'
import './App.css';
import { Grid, Paper, Fab } from '@material-ui/core'
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward'
import Header from './components/Header/Header'
import About from './components/About/About'
import Title from './components/Title/Title'
import PastCard from './components/Experience/PastCard'
import ProjectRow from './components/Projects/ProjectRow'
import Form from './components/Form/MyForm'
import SkillList from './components/SkillList/SkillList'
import Education from './components/Education/Education'

const App = () => {
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
          <About id="about"/>
          <div style={{height: "20px"}}/>
          <h1>Experience</h1>
          <Grid item container>
            <Grid item xs={0} sm={6} >
              <PastCard experience="mastercard" company="Mastercard" position="Software Engineer" duration="2019-2020"/>
            </Grid>
            <Grid item xs={0} sm={6}>
              <PastCard experience="ikea" company="Ikea" position="Salesperson" duration="2020-Current"/>
            </Grid>
          </Grid>
          <div style={{height: "20vh"}}/>
          <Grid item container>
              <Grid item xs={0} sm={6}>
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
                <SkillList type="technical"/>
              </Grid>
              <Grid item xs={0} sm={6}>
                <SkillList type="soft"/>
              </Grid>
          </Grid>
          <div style={{height: "5vh"}} ref={projectsRef}/>
          <h1>Projects</h1>
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
        </Grid>
        <Grid item sm/>
      </Grid>
    </Grid>
  )
}

export default App;

