/* eslint-disable prettier/prettier */
import React, { useEffect, useMemo, useState } from "react";
import Searchbar from "../components/search-bar";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import { Text, TouchableOpacity, View } from "react-native";
import ItemsList from "../components/items-list";
import colors from "../theme";
import MovieCard from "../components/movie-card";
import { useDispatch, useSelector } from "react-redux";
import { getRequest } from "../services/APIs/MoviesAPIs";
import { API_KEY, config } from "../services/config";
import {
  fetchDataError,
  fetchDataPending,
  fetchDataSuccess,
} from "../store/action";
import { ActivityIndicator } from "react-native-paper";

const Search = () => {
  const [query, setQuery] = useState("");
  let results = useSelector((state) => state.payload.results);
  const pending = useSelector((state) => state.pending);
  const error = useSelector((state) => state.error);
  const dispatch = useDispatch();
  function getData() {
    return (dispatch) => {
      dispatch(fetchDataPending());
      getRequest(config.base_url + config.search_movie, {
        api_key: API_KEY,
        query: query,
      })
        .then((res) => dispatch(fetchDataSuccess(res)))
        .catch((err) => dispatch(fetchDataError(err)));
    };
  }

  function onFetchdata() {
    if (query) dispatch(getData());
  }
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
        onEndEditing={() => onFetchdata()}
      >
        <TouchableOpacity
          onPress={() => {
            setQuery(null);
            dispatch(fetchDataSuccess([]));
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
