/* eslint-disable prettier/prettier */
import React, { useMemo, useState } from "react";
import Searchbar from "../components/search-bar";
import { ActivityIndicator, ScrollView, Text, View } from "react-native";
import ItemsList from "../components/items-list";
import { useFetchMovies } from "../store/fetchDataHook";
const Home = ({ navigation }) => {
  const [query, setQuery] = useState("");
  const [limit,setLimit]=useState(null);
  const searchByName = async (text) => {
    //TODO: handle response
    //TODO: add Activity Indicator
  };
  let movies=[];
  let {
    result: { loading, data },
    error,
  } = useFetchMovies('movie');
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
  console.log({loading,data,error})
  const currentYearMovies=movies.filter(item=>item.year == new Date().getFullYear());
  
  //TODO:handle err
  //TODO:handle empty movies in flatlist
  return (
    <ScrollView style={{ padding: 7, backgroundColor: "#303C4B", flex: 1 }}>
      {loading ? <ActivityIndicator color={"white"} size={"large"} /> : null}
      {/* {data && data.totalResults ? (
        <Text>{data.totalResults} results </Text>
      ) : null} */}
      {/* <Searchbar searchByName={searchByName} /> */}
    {
    currentYearMovies.length > 0 ?

    <View style={{flex:1}}>
      <View style={{backgroundColor:'white',padding:10}}><Text>Released Current Year</Text></View>
      <ItemsList navigation={navigation} data={currentYearMovies} />
      </View>:null}
      <View style={{flex:1}}>
      <View style={{backgroundColor:'white',padding:10}}><Text>All Movies</Text></View>
      <ItemsList navigation={navigation} data={movies} />
      </View>
      
    </ScrollView>
  );
};

export default Home;
