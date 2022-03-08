/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
    FlatList,
    View,
    Text,
    TouchableOpacity,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

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
                <TouchableOpacity style={{ flexDirection: 'row', flex: 1, padding: 10 }} key={item?.id} onPress={() => {
                }}>
                    <View style={{ flex: 8 }}>
                        {/* title */}
                        <View style={{ paddingVertical: 5 }}>
                            <Text style={{ color: 'white', fontSize: 20, fontWeight: '500' }}>
                                {item?.name}
                            </Text>
                        </View>
                        {/* address */}
                        <View style={{ paddingVertical: 5 }}>
                            <Text style={{ color: 'white', fontSize: 10 }}>
                                placeholder
                            </Text>
                        </View>
                    </View>
                    {/* actions */}
                    <View style={{ flex: 2, alignItems: 'flex-end', justifyContent: 'center' }}>
                        <TouchableOpacity>
                            <MaterialCommunityIcons name='chevron-right' size={16} color={'white'} />
                        </TouchableOpacity>
                    </View>
                </TouchableOpacity>
            </>

        );
    };
    return (
        // TODO : ADD Header
        <FlatList data={data} renderItem={renderItem}
            initialNumToRender={5}
            keyExtractor={(item, index) => index.toString()} contentContainerStyle={{
                backgroundColor: style.brandPrimary
            }} />
    );
};
export default ItemsList;