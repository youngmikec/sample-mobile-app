import { useState } from 'react';
import { ScrollView, View, Text, StyleSheet, TextInput, KeyboardAvoidingView, Platform, Pressable } from 'react-native';
import { Colors } from '../colors';

export default function LoginScreen({ navigation }) {
    const [email, onChangeEmail] = useState('');
    const [password, onChangePassword] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);

  return (
    <KeyboardAvoidingView 
        style={styles.container}
        behavior={ Platform.OS === 'ios' ? 'padding' : 'height' }
    >
        <ScrollView keyboardDismissMode='on-drag'>
            <Text style={styles.headerText}>Welcome to Little Lemon</Text>

            {
              !loggedIn && (
              <View>
                <Text style={styles.regularText}>Login to continue </Text>
                <TextInput 
                    style={styles.inputField}
                    value={email}
                    onChangeText={onChangeEmail}
                    placeholder={'email'}
                    keyboardType='email-address'
                />
                <TextInput 
                    style={styles.inputField}
                    value={password}
                    onChangeText={onChangePassword}
                    placeholder={'password'}
                    keyboardType='default'
                    secureTextEntry={true}
                />

                <View style={styles.buttonContainer}>
                  <Pressable style={styles.button} onPress={() => navigation.navigate('Welcome')}>
                    <Text style={styles.buttonText}>Log in</Text>
                  </Pressable>
                </View>

              </View>
              ) 
            }

            {
              loggedIn && (
                <View style={styles.buttonContainer}>
                  <Text style={styles.regularText}>You are logged In</Text>
                </View>
              )
            }

        </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.secondary
  },
  headerText: {
    padding: 40,
    fontSize: 30,
    color: '#EDEFEE',
    textAlign: 'center',
  },
  regularText: {
    fontSize: 24,
    padding: 20,
    marginVertical: 8,
    color: '#EDEFEE',
    textAlign: 'center',
  },
  inputField: {
    backgroundColor: Colors.white,
    padding: 5,
    height: 30,
    marginVertical: 20,
    marginHorizontal: 20,
    color: Colors.black
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    padding: 5,
    width: 150,
    borderRadius: 20,
    marginHorizontal: 20,
    margineVertical: 20,
    backgroundColor: Colors.primary,
  },
  buttonText: {
    fontSize: 20,
    color: Colors.secondary,
  }
  
});