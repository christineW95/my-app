/* eslint-disable prettier/prettier */
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { SafeAreaView, TouchableOpacity, View } from 'react-native';
import Home from '../screens/Home';
import MovieDetails from '../screens/MovieDetails';
import Search from '../screens/Search';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../theme';

const Stack = createNativeStackNavigator();

const HomeStackNavigator = () => {
    return (
        <SafeAreaView
            style={{
                flex: 1,
            }}>
            <Stack.Navigator
            
            >
                <Stack.Screen name="/" component={Search} options={{
                    headerShown:false

                }} />
                    
                <Stack.Screen name="Home"  component={Home} options={{title:'Hero Spin'}} />
                <Stack.Screen name="MovieDetails" component={MovieDetails} options={{
                    headerShadowVisible:false,
                    
headerTitle:"",
                }} />

            </Stack.Navigator>
        </SafeAreaView>
    );
};

export default HomeStackNavigator;