/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
    View,
    Text,
    ScrollView,
} from 'react-native';

const MovieDetails = ({ route, navigation }) => {
    const { stock } = route.params;

    return (
        <View style={{ flex: 1, backgroundColor: style.brandPrimary }}>
            <ScrollView contentContainerStyle={{ padding: 20 }}>
                {/* name */}
                <Text style={style.title}>{stock.name}</Text>
                {/* summary */}
                <Text style={style.title}>{stock.title}
                    <Text style={[style.hint, { textAlignVertical: 'top' }]}>
                        $
                    </Text>
                    145.11</Text>
                <Text style={style.title}>{stock.price}</Text>

                {/* Statistics */}
                <View style={{ backgroundColor: '#79B6EF', padding: 15 }}>
                    <Text style={style.title}>
                        Statistics
                    </Text>
                    {/* TODO:FLATLIST */}
                </View>
                {/* About */}
                <View style={{ backgroundColor: '#79B6EF', padding: 15, marginVertical: 10 }}>
                    <Text style={style.title}>
                        About
                    </Text>
                    {/* TODO:FLATLIST */}
                </View>
            </ScrollView>
        </View>

    );
};
export default MovieDetails;