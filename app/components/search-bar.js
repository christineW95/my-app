/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import React, { useState } from 'react';
import { TextInput, TouchableOpacity, View } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Searchbar = (props) => {
    const { searchByName, children } = props;
    const [query, setQuery] = useState('')
    return (
        <View
            style={{
                justifyContent: 'space-between',
                backgroundColor: '#B5CFE8',
                borderRadius: 15,
                padding: 10,
                margin: 2,
                flexDirection: 'row',
            }}>
            <TouchableOpacity onPress={searchByName}>
                <MaterialCommunityIcons name="magnify" size={20} color={'white'} />
            </TouchableOpacity>
            <TextInput
                style={{ justifyContent: 'flex-start', flex: 1 }}
                placeholder='Search'
                placeholderTextColor={'white'}
                onChangeText={text => {
                    setQuery(text)
                    searchByName(text)
                }}
                value={query}
            />
            {children}
        </View>
    );
};
export default Searchbar;