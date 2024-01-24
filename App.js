import { StyleSheet, Text, View, useColorScheme } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

// icons
import { Ionicons } from '@expo/vector-icons';

import WelcomeScreen from './screens/WelcomeScreen';
import LittleLemonHeader from './components/LittleLemonHeader';
import LittleLemonFooter from './components/LittleLemonFooter';
import MenuItems from './components/MenuItems';
import { Colors } from './colors';
import LoginScreen from './screens/LoginScreen';


//Initiate the stack
const Stack = createStackNavigator();
// Initiate the tab
const Tab = createBottomTabNavigator();
// Initiate the Drawer
const Drawer = createDrawerNavigator();

export default function App() {
  const colorScheme = useColorScheme();
  return (
    // Stack Navigation
    // <NavigationContainer>
    //   <View style={styles.container}>
    //     <LittleLemonHeader />
    //     <Stack.Navigator 
    //       initialRouteName='Login'
    //       screenOptions={{
    //         headerStyle: { backgroundColor: Colors.primary },
    //         headerTintColor: Colors.white,
    //         headerTitleStyle: { fontWeight: 'bold', fontSize: 20 }
    //       }}
    //     >
    //       <Stack.Screen 
    //         options={{
    //           title: 'Home'
    //         }} 
    //         name="Welcome" 
    //         component={WelcomeScreen}
    //       />
    //       <Stack.Screen
    //         name="Menu" 
    //         component={MenuItems} 
    //       />
    //       <Stack.Screen 
    //         name="Login" 
    //         component={LoginScreen} 
    //       />
    //     </Stack.Navigator>
    //     <View style={styles.footerContainer}>
    //       <LittleLemonFooter />
    //     </View>
    //   </View>
    // </NavigationContainer>

    // Tab Navigation
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName='Login'
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;
            if(route.name === 'Welcome'){
              iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline';
            }
            if(route.name === 'Menu'){
              iconName = 'ios-list';
            }
            if(route.name === 'Login'){
              iconName = 'ios-enter';
            }
            return <Ionicons name={iconName} color={color} size={size} />
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'grey'
        })}
      >
        <Tab.Screen name="Welcome" component={WelcomeScreen} />
        <Tab.Screen name="Menu" component={MenuItems} />
        <Tab.Screen name="Login" component={LoginScreen} />
      </Tab.Navigator>
    </NavigationContainer>

    // Drawer Navigation
    // <NavigationContainer>
    //   <View style={styles.container}>
    //     <LittleLemonHeader />
    //     <Drawer.Navigator 
    //       useLegacyImplementation={true}
    //       screenOptions={{
    //         drawerPosition: 'right'
    //       }}
    //     >
    //       <Drawer.Screen name="Login" component={LoginScreen} />
    //       <Drawer.Screen name="Welcome" component={WelcomeScreen} />
    //       <Drawer.Screen name="Menu" component={MenuItems} />
    //     </Drawer.Navigator>
    //     <View style={styles.footerContainer}>
    //       <LittleLemonFooter />
    //     </View>
    //   </View>
    // </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.secondary,
  },
  footerContainer: { backgroundColor: '#333333' },
});
