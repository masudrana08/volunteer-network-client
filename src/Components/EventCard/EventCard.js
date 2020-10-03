import React, { useContext, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../App';

const useStyles = makeStyles({
  root: {
    width: 250,
    height:270,
  },
});

export default function EventCard(props) {
  const [user,setUser]=useContext(UserContext)
  const history=useHistory()
  const classes = useStyles();
  const {img, name}=props.event
  
  const eventHandler = () =>{
    setUser({...user,event:props.event})
    history.push('/registation-form')
  }
  return (
    <Card onClick={eventHandler} className={classes.root} style={{background:props.myColor}}>
      <CardActionArea >
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height='200'
          image={img}
          title="Contemplative Reptile"
        />
        <CardContent style={{color:'white'}}>
          <Typography gutterBottom >
            {name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
