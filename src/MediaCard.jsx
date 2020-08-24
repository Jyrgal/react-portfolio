import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {GoMarkGithub} from 'react-icons/go'

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    backgroundColor: "#e91e63",
  },
  media: {
    height: 200,
  },
  title: {
    color: '#ffda2a',
    fontSize: '32px',
    fontWeight: 'bold',
    fontFamily: 'Dosis',
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    color: '#ffda2a',
    fontSize: '18px',
    fontFamily: 'Dosis'
  },
  link: {
    color: '#00eaff',
    fontSize: '18px',
    fontFamily: 'Dosis'
  },
});

const MediaCard = (props) => {
  const classes = useStyles();
  const name = props.name
  const pic = props.pic
  const url = props.url

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={pic}
          title={name}
        />
        <CardContent>
          <Typography className={classes.title} gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Typography className={classes.text} variant="body2" color="textSecondary" component="p">
            Lasdf
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <div style={{width: "75%"}}/>
        <Button className={classes.link} size="small" color="secondary">
          <GoMarkGithub/>
        </Button>
      </CardActions>
    </Card>
  );
}

export default MediaCard
