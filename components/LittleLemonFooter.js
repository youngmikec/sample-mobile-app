import * as React from 'react';
import { View, Text } from 'react-native';

export default function LittleLemonFooter () {
    return (
        <View style={{ position: 'absolute', bottom: 10, width: '100%', backgroundColor: '#F4CE14', padding: 8 }}>
            <Text style={{ fontSize: 16, color: 'black', textAlign: 'center', fontWeight: "600" }}>
                All rights reserved by Little Lemon, 2022
            </Text>
        </View>
    )
}