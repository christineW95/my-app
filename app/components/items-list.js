/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
    FlatList,
    View,
    Text,
    TouchableOpacity,
} from 'react-native';
import MovieCard from './card';

const ItemsList = ({ navigation,data,header }) => {
   
    const renderItem = ({ item,index }) => {
        return (
            <>
                <TouchableOpacity style={{ flex: 1,margin:5 }} key={item?.id} onPress={() => {
                    navigation.navigate('MovieDetails',{movie:item})
                }}>
                    <MovieCard movie={item} index={index}/>
                   
                </TouchableOpacity>
            </>

        );
    };
    return (
        // TODO : ADD Header
        <FlatList data={data} renderItem={renderItem}
        horizontal
        ListHeaderComponent={header}
        onEndReached={()=>console.log('reached')}
            keyExtractor={(item, index) => index.toString()} contentContainerStyle={{
            }} />
    );
};
export default ItemsList;