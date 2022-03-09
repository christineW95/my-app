/* eslint-disable prettier/prettier */
import React, { useMemo, useState } from "react";
import Searchbar from "../components/search-bar";
import { ActivityIndicator, ScrollView, Text, View } from "react-native";
import ItemsList from "../components/items-list";
import { fetchStaticData, useFetchMovies } from "../store/fetchDataHook";
import colors from "../theme";
import MovieCard from "../components/card";
import ActorCard from "../components/actor-card";
const Search = ({ navigation }) => {
  const [query, setQuery] = useState("");
  const searchByName = async (text) => {
    //TODO: handle response
    //TODO: add Activity Indicator
  };
  const superheroes=fetchStaticData()
  console.log({superheroes})
  return (
    <View style={{ padding: 7, backgroundColor: "white", flex: 1,paddingVertical:20 }}>
   
    <Text style={{color:colors.darkgrey,fontWeight:'bold',fontSize:25,textAlign:'center',padding:10}}>See your actors</Text>
    <Text style={{color:colors.grey,fontWeight:'bold',fontSize:14,textAlign:'center'}}>We will help you decide what to watch tonight</Text>
    
      <Searchbar searchByName={searchByName} />
      
      <ItemsList  renderItem = {({ item,index }) => {
          return(
              <Text>Hi</Text>
          )
        //   return (
        //       <View>
        //           <TouchableOpacity style={{ flex: 1,margin:5 }} key={item?.id} onPress={() => {
        //             //   navigation.navigate('MovieDetails',{movie:item})
        //           }}>
        //               <ActorCard actor={item} index={index}/>
                     
        //           </TouchableOpacity>
        //       </View>
  
        //   );
      }} data={superheroes} />

    </View>
  );
};

export default Search;
