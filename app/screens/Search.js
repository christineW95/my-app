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
import { fetchStaticData } from "../store/fetchDataHook";
import colors from "../theme";
import ActorCard from "../components/actor-card";
const Search = ({ navigation }) => {
  const [query, setQuery] = useState("");
  let superheroes;
  if (query == null || query == "") superheroes = fetchStaticData();
  else
    superheroes = fetchStaticData().filter((item) =>
      item.toLowerCase().includes(query.toLowerCase())
    );
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
        onChangeText={(text) => {
          setQuery(text);
        }}
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
