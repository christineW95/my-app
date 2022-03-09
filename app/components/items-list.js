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

const ItemsList = ({ navigation }) => {
    const data = [
        {
            id: 1,
            name: 'Movie',

        },
        {
            id: 1,
            name: 'Movie',

        },
        {
            id: 1,
            name: 'Movie',

        },
        {
            id: 1,
            name: 'Movie',

        },
        {
            id: 1,
            name: 'Movie',

        },
        {
            id: 1,
            name: 'Movie',

        },
        {
            id: 1,
            name: 'Movie',

        },
        {
            id: 1,
            name: 'Movie',

        },
        {
            id: 1,
            name: 'Movie',

        },
        {
            id: 1,
            name: 'Movie',

        }, {
            id: 1,
            name: 'Movie',

        }, {
            id: 1,
            name: 'Movie',

        }, {
            id: 1,
            name: 'Movie',

        }, {
            id: 1,
            name: 'Movie',

        }, {
            id: 1,
            name: 'Movie',

        }, {
            id: 1,
            name: 'Movie',

        }, {
            id: 1,
            name: 'Movie',

        }, {
            id: 1,
            name: 'Movie',

        }, {
            id: 1,
            name: 'Movie',

        }, {
            id: 1,
            name: 'Movie',

        },

    ];
    const renderItem = ({ item }) => {
        return (
            <>
                <TouchableOpacity style={{ flex: 1,margin:5 }} key={item?.id} onPress={() => {
                    navigation.navigate('MovieDetails',{movie:item})
                }}>
                    <MovieCard/>
                   
                </TouchableOpacity>
            </>

        );
    };
    return (
        // TODO : ADD Header
        <FlatList data={data} renderItem={renderItem}
            initialNumToRender={5}
            keyExtractor={(item, index) => index.toString()} contentContainerStyle={{
                // backgroundColor: style.brandPrimary
            }} />
    );
};
export default ItemsList;