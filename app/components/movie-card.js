import * as React from 'react';
import { Avatar, Card,  } from 'react-native-paper';

const LeftContent = props => <Avatar.Icon {...props} icon="movie" color='#F28D79' style={{backgroundColor:'#303C4B'}} />

const MovieCard = ({movie,index}) => (
  <Card style={{borderRadius:15,}}>
    <Card.Title title={movie.title}  left={LeftContent} titleStyle={{color:'#303C4B'}} titleNumberOfLines={2}/>
 
  </Card>
);

export default MovieCard;