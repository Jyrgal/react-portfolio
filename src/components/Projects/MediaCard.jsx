import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import {GoMarkGithub} from 'react-icons/go'
import Modal from '@material-ui/core/Modal'
import { Paper, Container } from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    backgroundColor: "rgb(0,0,0)",
  },
  media: {
    height: 200,
  },
  title: {
    color: '#ffffff',
    fontSize: '32px',
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  modalTitle: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    color: '#ffffff',
    fontSize: '14px'
  },
  link: {
    color: '#ffffff',
    fontSize: '18px'
  },
  paper: {
    overflowY: 'unset',
  },
  customizedButton: {
    position: 'absolute',
    left: '95%',
    top: '-9%'
  }
})

const MediaCard = (props) => {
  const classes = useStyles();
  const name = props.name
  const pic = props.pic
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  }

  const body = (
    <Container disableGutters maxWidth='sm'style={{   position: "absolute",
      top: "50%",
      left: "50%",
      /* bring your own prefixes */
      transform: "translate(-50%, -50%)"}}>
          <Paper>
            <h1 className={classes.modalTitle}>{props.name}</h1>
            <IconButton aria-label="delete" onClick={handleClose} class={classes.customizedButton}>
              <CloseIcon />
            </IconButton>
            {props.long}

          </Paper>
    </Container>
  )

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={pic}
          title={name}
          onClick={handleOpen}
        />
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
        <CardContent onClick={handleOpen}>
          <Typography className={classes.title} gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Typography className={classes.text} variant="body2" color="textSecondary" component="p">
            {props.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <div style={{width: "75%"}}/>
        <Button className={classes.link} size="small" color="secondary" href={props.url} target="_blank">
          <GoMarkGithub/>
        </Button>
      </CardActions>
    </Card>
  );
}

export default MediaCard
