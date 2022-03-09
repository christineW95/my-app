/* eslint-disable prettier/prettier */
import React, { useMemo, useState } from 'react';
import Searchbar from '../components/search-bar';
import { Text, View } from 'react-native';
import ItemsList from '../components/items-list';
import {useFetchMovies} from '../store/fetchDataHook';
const Home = ({ navigation }) => {
    const [query, setQuery] = useState('')
    const searchByName = async text => {
        //TODO: handle response
        //TODO: add Activity Indicator

    };
    const {response,loading,error}=useFetchMovies()
    const arr=response?.Search?.map(item=>{
      return {poster:item.Poster,title:item.Title,type:item.Type,year:item.Year,id:item.imdbID}
    })
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