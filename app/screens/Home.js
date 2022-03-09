/* eslint-disable prettier/prettier */
import React, { useMemo, useState } from "react";
import Searchbar from "../components/search-bar";
import { ActivityIndicator, Text, View } from "react-native";
import ItemsList from "../components/items-list";
import { useFetchMovies } from "../store/fetchDataHook";
const Home = ({ navigation }) => {
  const [query, setQuery] = useState("");
  const searchByName = async (text) => {
    //TODO: handle response
    //TODO: add Activity Indicator
  };
  let arr=[];
  let {
    result: { loading, data },
    error,
  } = useFetchMovies('movie');
  if (data && data?.Search?.length > 0) {
    arr = data.Search.map((item) => {
      return {
        poster: item.Poster,
        title: item.Title,
        type: item.Type,
        year: item.Year,
        id: item.imdbID,
      };
    });
  }
  //TODO:handle err
  //TODO:handle empty arr in flatlist
  return (
    <View style={{ padding: 7, backgroundColor: "#303C4B", flex: 1 }}>
      {loading ? <ActivityIndicator color={"white"} size={"large"} /> : null}
      {data && data.totalResults ? (
        <Text>{data.totalResults} results </Text>
      ) : null}
      <Searchbar searchByName={searchByName} />
      <ItemsList navigation={navigation} data={arr} />
    </View>
  );
};

export default Home;
