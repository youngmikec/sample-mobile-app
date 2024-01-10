import { StyleSheet, Text, View } from 'react-native';

import WelcomeScreen from './src/WelcomeScreen';
import LittleLemonHeader from './components/LittleLemonHeader';
import LittleLemonFooter from './components/LittleLemonFooter';
import MenuItems from './components/MenuItems';
import { Colors } from './colors';
import LoginScreen from './src/LoginScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <LittleLemonHeader />
      {/* <WelcomeScreen /> */}
      {/* <MenuItems /> */}
      <LoginScreen />
      <LittleLemonFooter />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: Colors.secondary
  }
});
