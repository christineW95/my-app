/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from "react";
import { FlatList, View, Text } from "react-native";
import colors from "../theme";

const ItemsList = ({ data, renderItem, horizontal }) => {
  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      ListEmptyComponent={
        <View>
          <Text style={{ color: colors.grey, textAlign: "center" }}>
            No movies to show
          </Text>
        </View>
      }
      horizontal={horizontal}
      keyExtractor={(item, index) => index.toString()}
      contentContainerStyle={{}}
    />
  );
};
export default ItemsList;
