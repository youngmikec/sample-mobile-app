import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors } from '../colors';

export default function LittleLemonHeader () {
    return (
        <View style={styles.container}>
            <Text style={styles.headerText} numberOfLines={1}>
                Welcome to {' '}
                <Text style={styles.boldText}>Little Lemon</Text>
            </Text>
        </View>
    )   
}

const styles = StyleSheet.create({
    container: {
        flex: 0.15, 
        backgroundColor: Colors.primary
    },
    headerText: { 
        paddingTop: 30, 
        fontSize: 30, 
        color: Colors.black, 
        textAlign: 'center' 
    },
    boldText: {
        fontWeight: 'bold'
    }
})