import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Colors } from '../colors';

export default function WelcomeScreen () {
    return (
        <ScrollView 
            indicatorStyle={'white'}
            showsVerticalScrollIndicator={true} 
            style={styles.container}
        >
            <Text style={styles.headerText}>Welcome To Little Lemon</Text>
            <Text style={styles.itemText}>
                Little Lemon is a charming neighbourhood bistro that serves simple food and cocktails on lively but casual environment.
                We would love to hear more about your experience with us!
            </Text>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.secondary,
        padding: 40,
        flex: 1
    },
    headerText: { 
        fontSize: 30, 
        marginBottom: 20, 
        color: Colors.white, 
        textAlign: 'center' 
    },
    itemText: { 
        fontSize: 20, 
        color: Colors.white, 
        textAlign: 'center'
    }
})