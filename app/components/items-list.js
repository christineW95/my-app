/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from "react";
import { FlatList, View, Text } from "react-native";
import colors from "../theme";

const ItemsList = ({ data, renderItem, horizontal,header }) => {
  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      ListHeaderComponent={header}
      ListEmptyComponent={
        <View>
          <Text style={{ color: colors.grey, textAlign: "center" }}>
            No results to show
          </Text>
        </View>
      }
      horizontal={horizontal}
      keyExtractor={(item, index) => index.toString()}
      contentContainerStyle={{padding:20}}
    />
  );
};
export default ItemsList;
