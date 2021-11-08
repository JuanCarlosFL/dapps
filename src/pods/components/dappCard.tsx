import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { routes } from 'core/router';

const useStyles = makeStyles({
  root: {
    minWidth: 345,
    marginBottom: '1.5rem',
  },
  media: {
    height: 240,
  },
  link: {
    textDecoration: 'none',
  }
});

interface Props {
  img: string;
  route: string;
  headerText: string;
  textButton: string;
  text: string;
  title: string;
}

export const DappCard: React.FC<Props> = props => {
  const { img, route, textButton, headerText, text, title } = props;
  const classes = useStyles();

  return (
    <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={img}
              title={title}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {headerText}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {text}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions style={{display: 'flex', justifyContent: 'center'}}>
            <Link to={route} className={classes.link}>
              <Button variant="contained" color="primary">
                {textButton}
              </Button>
            </Link>
          </CardActions>
        </Card>
  )
}
