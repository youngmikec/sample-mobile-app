import { useState } from 'react';
import { ScrollView, Text, StyleSheet, TextInput, KeyboardAvoidingView, Platform} from 'react-native';
import { Colors } from '../colors';

export default function LoginScreen() {
    const [email, onChangeEmail] = useState('');
    const [password, onChangePassword] = useState('');
  return (
    <KeyboardAvoidingView 
        style={styles.container}
        behavior={ Platform.OS === 'ios' ? 'padding' : 'height' }
    >
        <ScrollView keyboardDismissMode='on-drag'>
            <Text style={styles.headerText}>Welcome to Little Lemon</Text>
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
        </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  }
});