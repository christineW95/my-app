import * as React from 'react';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

const LeftContent = props => <Avatar.Icon {...props} icon="movie" color='#F28D79' style={{backgroundColor:'#303C4B'}} />

const MovieCard = ({movie}) => (
  <Card style={{borderRadius:15}}>
    <Card.Title title={movie.title} subtitle={`Release Year : ${movie.year}`} left={LeftContent} titleStyle={{}} titleNumberOfLines={2}/>
    <Card.Cover source={{ uri: movie.poster }} />
    <Card.Actions style={{alignItems:'center',justifyContent:'center'}}>
      <Button labelStyle={{color:'#F28D79'}}> Add to Favorites</Button>
      <Button labelStyle={{color:'#F28D79'}}>Show More</Button>
    </Card.Actions>
  </Card>
);

export default MovieCard;