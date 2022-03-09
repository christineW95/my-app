import * as React from 'react';
import { Avatar, Card,  } from 'react-native-paper';

const LeftContent = props => <Avatar.Icon {...props} icon="movie" color='#F28D79' style={{backgroundColor:'#303C4B'}} />

const ActorCard = ({actor,index}) => (
  <Card style={{borderRadius:15,}}>
    <Card.Title title={actor}  left={LeftContent} titleStyle={{color:'#303C4B'}} titleNumberOfLines={2}/>
 
  </Card>
);

export default ActorCard;