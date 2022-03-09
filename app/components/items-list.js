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

const ItemsList = ({ navigation,data ,renderItem}) => {
   
    // const renderItem = ({ item }) => {
    //     return (
    //         <>
    //             <TouchableOpacity style={{ flex: 1,margin:5 }} key={item?.id} onPress={() => {
    //                 navigation.navigate('MovieDetails',{movie:item})
    //             }}>
    //                 <MovieCard movie={item}/>
                   
    //             </TouchableOpacity>
    //         </>

    //     );
    // };
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