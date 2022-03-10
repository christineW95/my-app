/* eslint-disable prettier/prettier */
import React, { useMemo, useState } from "react";
import {
  ActivityIndicator,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import ItemsList from "../components/items-list";
import { useFetchMovies } from "../store/fetchDataHook";
import MovieCard from "../components/card";
import colors from "../theme";
const Home = ({ route, navigation }) => {
  const { actor } = route.params;
  let {
    result: { loading, data },
    error,
  } = useFetchMovies( actor);
  if (data && data.totalResults) {
    data = data.Search.map((item) => {
      return {
        poster: item.Poster,
        title: item.Title,
        type: item.Type,
        year: item.Year,
        id: item.imdbID,
      };
    });
  }
  let movies =data?.filter(movie=>movie.type=='movie') || [];
 
  let series=data?.filter(movie=>movie.type=='series') || [];

  const currentYearMovies = movies.filter(
    (item) => item.year == new Date().getFullYear()
  );

  return (
    <ScrollView style={{ padding: 10, backgroundColor: "white", flex: 1 }}>
      {loading ? <ActivityIndicator color={colors.red} size={"large"} /> : null}
      {error ? (
        <Text style={{ color: colors.grey, textAlign: "center" }}>
          Error in getting movies
        </Text>
      ) : null}
<View style={{flex:1}}>
{/* <MovieCard movie={}/> */}
</View>

<View style={{ flex: 1 }}>
  <View><Text style={{fontSize:25,fontWeight:'bold'}}>Related Series</Text></View>
          <ItemsList navigation={navigation} data={series}

          renderItem={({ item }) => {
            return (
              <>
                <TouchableOpacity
                  style={{ flex: 1, margin: 5 }}
                  key={item?.id}
                  onPress={() => {
                    navigation.navigate("MovieDetails", { movie: item });
                  }}
                >
                  <MovieCard movie={item} />
                </TouchableOpacity>
              </>
            );
          }}
           horizontal={true}/>
        </View>
   
  
       
        <View style={{ flex: 1 }}>
        <View style={{}}><Text style={{fontSize:25,fontWeight:'bold'}}>Related Movies</Text></View>
          <ItemsList
            navigation={navigation}
            data={movies}
            horizontal={true}
            renderItem={({ item }) => {
              return (
                <>
                  <TouchableOpacity
                    style={{ flex: 1, marginHorizontal:10 }}
                    key={item?.id}
                    onPress={() => {
                      navigation.navigate("MovieDetails", { movie: item });
                    }}
                  >
                    <MovieCard movie={item} />
                  </TouchableOpacity>
                </>
              );
            }}
          />
        </View>
    </ScrollView>
  );
};

export default Home;
