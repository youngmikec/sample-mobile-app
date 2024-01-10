import React from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput } from 'react-native';
import { Colors } from '../colors';

export default function WelcomeScreen () {
    const [userName, setUserName] = React.useState('');
    return (
        // <ScrollView 
        //     indicatorStyle={'white'}
        //     showsVerticalScrollIndicator={true} 
        //     style={styles.container}
        // >
        //     <Text style={styles.headerText}>Welcome To Little Lemon</Text>
        //     <Text style={styles.itemText}>
        //         Little Lemon is a charming neighbourhood bistro that serves simple food and cocktails on lively but casual environment.
        //         We would love to hear more about your experience with us!
        //     </Text>
        // </ScrollView>
        <ScrollView indicatorStyle="white" style={styles.container}>
            <Text style={styles.headerText}>Welcome to Little Lemon</Text>
            <Text style={styles.regularText}>
                Little Lemon is a charming neighborhood bistro that serves simple food
                and classic cocktails in a lively but casual environment. We would love
                to hear more about your experience with us!
            </Text>

            <TextInput 
                value={userName}
                style={styles.input}
                onChangeText={setUserName}
            />
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
    },
    regularText: {
        fontSize: 14, 
        color: Colors.white, 
        textAlign: 'center'
    },
    input: {
        backgroundColor: Colors.white,
        height: 30,
        marginVertical: 20,
        marginHorizontal: 10,
        padding: 5,
        borderRadius: 8
    }
})