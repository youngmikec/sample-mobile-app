import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, Image, useColorScheme } from 'react-native';
import { Colors } from '../colors';

export default function WelcomeScreen () {
    const [userName, setUserName] = useState('');
    const [colorScheme, setColorScheme] = useState('dark');
    const colorTheme = useColorScheme();
    
    useEffect(() => {
        console.log('colorTheme', colorTheme)
        setColorScheme(colorTheme)
    }, [colorTheme]);


    return (
        <ScrollView 
            indicatorStyle={'white'}
            showsVerticalScrollIndicator={true} 
            style={{
                ...styles.container,
                backgroundColor: colorScheme === 'light' ? Colors.white : Colors.secondary
            }}
        >   
            <Image 
                style={styles.logo} 
                source={require('../img/LittleLemonLogo.png')} 
                resizeMode="cover"
                accessible={true}
                accessibilityLabel={'Little Lemon Logo'}
            />
            <Text style={{
                ...styles.headerText,
                color: colorScheme === 'light' ? Colors.black : Colors.white
            }}>Welcome To Little Lemon</Text>
            <Text style={{
                ...styles.headerText,
                color: colorScheme === 'light' ? Colors.black : Colors.white
            }}>{ colorScheme }</Text>
            <Text style={{
                ...styles.itemText,
                color: colorScheme === 'light' ? Colors.black : Colors.white
            }}>
                Little Lemon is a charming neighbourhood bistro that serves simple food and cocktails on lively but casual environment.
                We would love to hear more about your experience with us!
            </Text>
        </ScrollView>
        // <ScrollView indicatorStyle="white" style={styles.container}>
        //     <Text style={styles.headerText}>Welcome to Little Lemon</Text>
        //     <Text style={styles.regularText}>
        //         Little Lemon is a charming neighborhood bistro that serves simple food
        //         and classic cocktails in a lively but casual environment. We would love
        //         to hear more about your experience with us!
        //     </Text>

        //     <TextInput 
        //         value={userName}
        //         style={styles.input}
        //         onChangeText={setUserName}
        //     />
        // </ScrollView>
        // <View style={styles.container}>
        //     <Image style={styles.logo} source={require('../img/LittleLemonLogo.png')} />
        //     <Text style={styles.headerText}>
        //         Little Lemon, your local Mediterranean Bistro
        //     </Text>
        // </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 40,
        flex: 1,
        backgroundColor: Colors.secondary
    },
    headerText: { 
        fontSize: 30, 
        marginBottom: 20, 
        textAlign: 'center' 
    },
    itemText: { 
        fontSize: 20, 
        color: Colors.white, 
        textAlign: 'center'
    },
    regularText: {
        fontSize: 14, 
        textAlign: 'center'
    },
    input: {
        backgroundColor: Colors.white,
        height: 30,
        marginVertical: 20,
        marginHorizontal: 10,
        padding: 5,
        borderRadius: 8
    },
    logo: {
        height: 100,
        width: 100,
        borderRadius: 20,
        resizeMode: 'cover'
    }
})