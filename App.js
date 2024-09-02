import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// import REgFOrm from './Components/RegisterFormScreen/RegisterForm';
import AbstractForm from './Components/AbstractForm/AbstractForm';
import HomeScreen from './Components/HomeScreen/HomeScreen';
import RegisterScreen from './Components/RegisterFormScreen/RegisterForm';
import ComingSoonScreen from './Components/comingSOon/ComingSoon';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} options={{headerShown:false}}/>
        <Stack.Screen name="AbstractForm" component={AbstractForm} options={{headerShown:false}}/>
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown:false}}/>
        <Stack.Screen name="ComingSoonScreen" component={ComingSoonScreen} options={{headerShown:false}}/>



      </Stack.Navigator>
    </NavigationContainer>
  );
}
