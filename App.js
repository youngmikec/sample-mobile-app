import { StyleSheet, Text, View, useColorScheme } from 'react-native';

import WelcomeScreen from './src/WelcomeScreen';
import LittleLemonHeader from './components/LittleLemonHeader';
import LittleLemonFooter from './components/LittleLemonFooter';
import MenuItems from './components/MenuItems';
import { Colors } from './colors';
import LoginScreen from './src/LoginScreen';

export default function App() {
  const colorScheme = useColorScheme();
  return (
    <View style={{
      ...styles.container,
      backgroundColor: colorScheme == 'light' ? Colors.white : Colors.secondary
    }}>
      <LittleLemonHeader />
      <WelcomeScreen />
      {/* <MenuItems /> */}
      {/* <LoginScreen /> */}
      <LittleLemonFooter />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
  }
});
