/* eslint-disable prettier/prettier */
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { SafeAreaView } from 'react-native';
import Home from '../screens/Home';
import MovieDetails from '../screens/MovieDetails';

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
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="MovieDetails" component={MovieDetails} />

            </Stack.Navigator>
        </SafeAreaView>
    );
};

export default HomeStackNavigator;