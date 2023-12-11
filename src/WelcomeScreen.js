import React from 'react';
import { View, Text } from 'react-native';

export default function WelcomeScreen () {
    return (
        <View>
            <Text style={{ fontSize: 30, marginBottom: 30 }}>Welcome To Little Lemon</Text>
            <Text style={{ fontSize: 15}}>
                Little Lemon is a charming neighbourhood bistro that serves simple food and cocktails on lively but casual environment.
                We would love to hear more about your experience with us!
            </Text>
        </View>
    )
}