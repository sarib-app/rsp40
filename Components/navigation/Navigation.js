import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screens/HomeScreen'; // Your HomeScreen component
import RegisterScreen from './screens/RegisterScreen'; // Your Registration Screen
import AbstractForm from './screens/AbstractForm'; // Your Abstract Submission Screen
// Import other screens similarly

const Drawer = createDrawerNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Registration" component={RegisterScreen} />
        <Drawer.Screen name="Abstract Submission" component={AbstractForm} />
        <Drawer.Screen name="About RSP" component={ComingSoonScreen} />
        <Drawer.Screen name="Messages" component={ComingSoonScreen} />
        <Drawer.Screen name="Executive Council" component={ComingSoonScreen} />
        <Drawer.Screen name="Organizing Committee" component={ComingSoonScreen} />
        <Drawer.Screen name="Scientific Programme" component={ComingSoonScreen} />
        <Drawer.Screen name="Recreational Tour" component={ComingSoonScreen} />
        <Drawer.Screen name="Accommodation" component={ComingSoonScreen} />
        <Drawer.Screen name="Sponsorship Tariff" component={ComingSoonScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
