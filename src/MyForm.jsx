// Customize this 'myform.js' script and add it to your JS bundle.
// Then import it with 'import MyForm from "./myform.js"'.
// Finally, add a <MyForm/> element whereever you wish to display the form.
import Alert from '@material-ui/lab/Alert';
import TextField from '@material-ui/core/TextField';
import React from "react";
import Paper from '@material-ui/core/Paper';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Button from '@material-ui/core/Button';

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