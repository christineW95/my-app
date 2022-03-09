/* eslint-disable prettier/prettier */
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { SafeAreaView } from 'react-native';
import Home from '../screens/Home';
import MovieDetails from '../screens/MovieDetails';
import Search from '../screens/Search';

const Stack = createNativeStackNavigator();

const HomeStackNavigator = () => {
    return (
        <SafeAreaView
            style={{
                flex: 1,
            }}>
            <Stack.Navigator
            
                screenOptions={{
                    headerShown:false

                }}>
                {/* <Stack.Screen name="/" component={Search} /> */}
                    
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="MovieDetails" component={MovieDetails} />

            </Stack.Navigator>
        </SafeAreaView>
    );
};

export default HomeStackNavigator;