/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import React, { useState } from 'react';
import { TextInput, TouchableOpacity, View } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../theme';

const Searchbar = (props) => {
    const { children ,value,onChangeText} = props;
    return (
        <View
            style={{
                justifyContent: 'space-between',
                alignItems:'center',
                backgroundColor: colors.lightgrey,
                borderRadius: 25,
                padding: 7,
                margin: 15,
                flexDirection: 'row',
            }}>
            <TouchableOpacity onPress={onChangeText}>
                <MaterialCommunityIcons name="magnify" size={20} color={colors.red} />
            </TouchableOpacity>
            <TextInput
                style={{ justifyContent: 'flex-start', flex: 1 }}
                placeholder='Search'
                placeholderTextColor={'white'}
                onChangeText={onChangeText}
                value={value}
            />
            {children}
       
        </View>
    );
};
export default Searchbar;