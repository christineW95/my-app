/* eslint-disable prettier/prettier */
import React, { useEffect, useMemo, useState } from "react";
import Searchbar from "../components/search-bar";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import { Text, TouchableOpacity, View } from "react-native";
import ItemsList from "../components/items-list";
import colors from "../theme";
import MovieCard from "../components/movie-card";
import { ActivityIndicator } from "react-native-paper";
import { useFetchMovies } from "../hooks/fetchDataHook";

const Search = () => {
  const [query, setQuery] = useState("");
  let {results,pending,error}=useFetchMovies(query)

  if (query == null || query == "") results = [];
  return (
    <View
      style={{
        padding: 7,
        margin:10,
        backgroundColor: "white",
        flex: 1,
        paddingVertical: 20,
      }}
    >
      <Text
        style={{
          color: colors.darkgrey,
          fontWeight: "bold",
          fontSize: 25,
          textAlign: "center",
          padding: 10,
        }}
      >
        See your movies
      </Text>
      <Text
        style={{
          color: colors.grey,
          fontWeight: "bold",
          fontSize: 14,
          textAlign: "center",
        }}
      >
        We will help you decide what to watch tonight
      </Text>

      <Searchbar
        onChangeText={(text) => setQuery(text)}
        value={query}
        onEndEditing={() => console.log('test')}
      >
        <TouchableOpacity
          onPress={() => {
            setQuery(null);
          }}
        >
          <MaterialCommunityIcons name="close" size={20} color={colors.red} />
        </TouchableOpacity>
      </Searchbar>
      {pending ? <ActivityIndicator size={"large"} color="red" /> : null}
      {error ? alert("ERROR!") : null}
      <ItemsList
        renderItem={({ item, index }) => {
          return (
            <View>
              <TouchableOpacity style={{ flex: 1, margin: 5 }} key={item?.id}>
                <MovieCard movie={item} index={index} />
              </TouchableOpacity>
            </View>
          );
        }}
        data={results}
      />
    </View>
  );
};

export default Search;
