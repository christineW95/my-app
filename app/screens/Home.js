/* eslint-disable prettier/prettier */
import React, { useMemo, useState } from "react";
import Searchbar from "../components/search-bar";
import { ActivityIndicator, ScrollView, Text, TouchableOpacity, View } from "react-native";
import ItemsList from "../components/items-list";
import { useFetchMovies } from "../store/fetchDataHook";
import MovieCard from "../components/card";
import colors from "../theme";
const Home = ({ route,navigation }) => {
  console.log({navigation})
  const {actor}=route.params;
  let movies=[];
  let {
    result: { loading, data },
    error,
  } = useFetchMovies('movie',actor);
  if (data && data.totalResults) {
    movies = data.Search.map((item) => {
      return {
        poster: item.Poster,
        title: item.Title,
        type: item.Type,
        year: item.Year,
        id: item.imdbID,
      };
    });
  }
  const currentYearMovies=movies.filter(item=>item.year == new Date().getFullYear());
  
  return (
    <ScrollView style={{ padding: 10, backgroundColor: "white", flex: 1 }}>
      {loading ? <ActivityIndicator color={colors.red} size={"large"} /> : null}
      {/* {data && data.totalResults ? (
        <Text>{data.totalResults} results </Text>
      ) : null} */}
    {
    currentYearMovies.length > 0 ?

    <View style={{flex:1}}>
      <View style={{backgroundColor:'white',padding:10}}><Text>Released Current Year</Text></View>
      <ItemsList navigation={navigation} data={currentYearMovies} />
      </View>:null}
      {
        movies.length > 0 ? 
      <View style={{flex:1}}>
      <ItemsList navigation={navigation} data={movies}   renderItem ={ ({ item }) => {
        return (
            <>
                <TouchableOpacity style={{ flex: 1,margin:5 }} key={item?.id} onPress={() => {
                    navigation.navigate('MovieDetails',{movie:item})
                }}>
                    <MovieCard movie={item}/>
                   
                </TouchableOpacity>
            </>

        );
    }}/>
      </View>:null
      }

      
    </ScrollView>
  );
};

export default Home;
