import { View, Text } from 'react-native';
import React from 'react';

const Header = () => {
    return (
        <View
            style={{
                flexDirection: 'row',
                backgroundColor: '#054F72',
            }}>
            <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1, padding: 30 }}>
                <Text style={{ color: 'white', fontSize: 12, fontWeight: 'bold', fontStyle: 'italic' }} >Hero Spin</Text>
            </View>
        </View>
    );
};
export default Header;