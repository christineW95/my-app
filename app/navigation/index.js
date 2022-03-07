/* eslint-disable prettier/prettier */
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { SafeAreaView } from 'react-native';
import SearchByName from '../screens/SearchByName';

const Stack = createNativeStackNavigator();

const HomeStackNavigator = () => {
    return (
        <SafeAreaView
            style={{
                flex: 1,
                backgroundColor: '#054F72',
            }}>
            <Stack.Navigator
                screenOptions={{
                    headerStyle: {
                        backgroundColor: '#1E1A3C',
                    },
                    headerTitleStyle: {
                        color: 'white',
                    },

                }}>
                <Stack.Screen name="SearchByName" component={SearchByName} />

            </Stack.Navigator>
        </SafeAreaView>
    );
};

export default HomeStackNavigator;