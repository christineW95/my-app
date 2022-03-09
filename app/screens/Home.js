/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import Searchbar from '../components/search-bar';
import { Text, View } from 'react-native';
import ItemsList from '../components/items-list';

const Home = ({ navigation }) => {
    const [query, setQuery] = useState('')

    const searchByName = async text => {
        //TODO: handle response
        //TODO: add Activity Indicator

    };

    return (
        <View
            style={{ padding: 7, backgroundColor:'#303C4B',flex:1 }}
        >
            <Searchbar searchByName={searchByName} />
            <ItemsList navigation={navigation} />
        </View>
    );
};



export default Home;