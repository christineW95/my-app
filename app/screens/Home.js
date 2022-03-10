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
  const generateRandom = (limit) => Math.floor(Math.random() * limit);
  const { actor } = route.params;
  let {
    result: { loading, data },
    error,
  } = useFetchMovies(actor);
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
  let movies = data?.filter((movie) => movie.type == "movie") || [];

  let series = data?.filter((movie) => movie.type == "series") || [];

  let recommendedMovie =
    movies.length > 0 ? movies[generateRandom(movies.length)] : undefined;
  let recommendedSeries =
    series.length > 0 ? series[generateRandom(series.length)] : undefined;
  return (
    <ScrollView style={{ padding: 10, backgroundColor: "white", flex: 1 }}>
      {loading ? <ActivityIndicator color={colors.red} size={"large"} /> : null}
      {error ? (
        <Text style={{ color: colors.grey, textAlign: "center" }}>
          Error in getting movies
        </Text>
      ) : null}
      {recommendedSeries && recommendedSeries !== undefined ? (
        <TouchableOpacity style={{ flex: 2 }}  onPress={() => {
          navigation.navigate("MovieDetails", { movie: recommendedSeries });
        }}>
          
          <View>
            <Text style={{ fontSize: 25, fontWeight: "bold" }}>
              Recommended Series
            </Text>
          </View>

          <MovieCard movie={recommendedSeries} />
        </TouchableOpacity>
      ) : null}

      {series?.length > 0 ? (
        <View style={{ flex: 3 }}>
          <View>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>
              Related Series
            </Text>
          </View>
          <ItemsList
            navigation={navigation}
            data={series}
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
            horizontal={true}
          />
        </View>
      ) : null}

      {recommendedMovie && recommendedMovie !== undefined ? (
        <TouchableOpacity style={{ flex: 2 }}  onPress={() => {
          navigation.navigate("MovieDetails", { movie: recommendedMovie });
        }}>
          <View>
            <Text style={{ fontSize: 25, fontWeight: "bold" }}>
              Recommended Movie
            </Text>
          </View>

          <MovieCard movie={recommendedMovie} />
        </TouchableOpacity>
      ) : null}

      {movies?.length > 0 ? (
        <View style={{ flex: 3, marginVertical: 2 }}>
          <View>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>
              Related Movies
            </Text>
          </View>
          <ItemsList
            navigation={navigation}
            data={movies}
            horizontal={true}
            renderItem={({ item }) => {
              return (
                <>
                  <TouchableOpacity
                    style={{ flex: 1, marginHorizontal: 10 }}
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
      ) : null}
    </ScrollView>
  );
};

export default Home;
