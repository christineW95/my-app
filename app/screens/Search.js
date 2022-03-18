/* eslint-disable prettier/prettier */
import React, { useMemo, useState } from "react";
import Searchbar from "../components/search-bar";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import ItemsList from "../components/items-list";
import colors from "../theme";
import ActorCard from "../components/actor-card";
import { fetchStaticData, useFetchMovies } from "../hooks/fetchDataHook";
import { useDispatch, useSelector } from "react-redux";
import { getRequest } from "../services/APIs/MoviesAPIs";
import { API_KEY, config } from "../services/config";

const Search = ({ navigation}) => {
  const content = useSelector(state => state); //this hook gives us redux store state
  const dispatch = useDispatch(); //this hook gives us dispatch method
  //async action
  function getData() {
    return dispatch => {
      getRequest(config.base_url+config.search_movie, {
        api_key: API_KEY,
        query: query,
      })
      .then(res =>
      {
          dispatch({
          type: "FETCH_DATA",
          data: res.results
        })}
      );
    };
  }
  function onFetchdata() {
    //invoking action
  dispatch(getData());
}
  const [query, setQuery] = useState("");
  let superheroes;
  if (query == null || query == "") superheroes = [];
  onChangeText=(text)=>{
    setQuery(text);
    onFetchdata()
  }
 
  return (
    <View
      style={{
        padding: 7,
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
        See your actors
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
        onChangeText={onChangeText}
        value={query}
      >
             <TouchableOpacity onPress={()=>setQuery(null)}>
                <MaterialCommunityIcons name="close" size={20} color={colors.red} />
            </TouchableOpacity></Searchbar>

      <ItemsList
        renderItem={({ item, index }) => {
          return (
            <View>
              <TouchableOpacity
                style={{ flex: 1, margin: 5 }}
                key={item?.id}
                onPress={() => {
                    navigation.navigate('Home',{actor:item})
                }}
              >
                <ActorCard actor={item} index={index} />
              </TouchableOpacity>
            </View>
          );
        }}
        data={superheroes}
      />
    </View>
  );
};

export default Search;
