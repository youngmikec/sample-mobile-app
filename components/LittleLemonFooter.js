import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors } from '../colors';

export default function LittleLemonFooter () {
    return (
        <View style={styles.container}>
            <Text style={styles.footerText}>
                All rights reserved by Little Lemon, 2022
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute', bottom: 10, width: '100%', backgroundColor: Colors.primary, padding: 8
    },
    footerText: { 
        fontSize: 16, 
        color: Colors.black, 
        textAlign: 'center', 
        fontWeight: "600"
    },
})