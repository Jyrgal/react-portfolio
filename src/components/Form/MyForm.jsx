import Alert from '@material-ui/lab/Alert'
import TextField from '@material-ui/core/TextField'
import React from "react"
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import { Grid } from '@material-ui/core'
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'

export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

  render() {
    const { status } = this.state;
    return (
      <Paper>
        <Grid item container>
          <Grid item xs={8} sm={8} md={8} lg={8}>
            <form noValidate autoComplete="off" onSubmit={this.submitForm}
                  action="https://formspree.io/xknqyrla"
                  method="POST" style={{display: "flex",
                  justifyContent: "center",
                  alignItems: "center", display: " block"}}>
                  <TextField id="standard-basic" label="Email" type="email" name="email" variant="outlined" fullWidth/>
                  <div style={{height: "2vh"}}/>
                  <TextField id="standard-basic" label="Message" type="text" name="message" variant="outlined" fullWidth multiline
                  rowsMax={4}/>
                  <div style={{height: "2vh"}}/>
                  {status === "SUCCESS" ? <Alert variant="filled" severity="success">Cheers! I'll get back in touch soon!</Alert> : 
                  <div style={{display: "flex",
                  justifyContent: "center",
                  alignItems: "center", textAlign: "center"}}>
                    <Button type="submit" variant="contained" color="primary" >
                      Submit
                    </Button>
                  </div>}
                  {status === "ERROR" && <Alert variant="filled" severity="error">Ooops! There was an error!</Alert>}
            </form>
          </Grid>
          <Grid item style={{marginLeft: "10px",
                  justifyContent: "center",
                  alignItems: "center", textAlign: "center"}}xs={3} sm={3} md={3} lg={3}>Fill the form on the left to contact me! <br/> <br/> <br/> <br/> <br/> <br/>
            <Button href="https://github.com/Jyrgal" target="_blank" size="large">
              <GitHubIcon/>
            </Button>
            <Button href="https://www.linkedin.com/in/james-pan-237a82155/" target="_blank" size="large">
              <LinkedInIcon/>
            </Button>
          </Grid>
        </Grid>
      </Paper>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}