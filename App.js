import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';

// Import your screens
import AbstractForm from './Components/AbstractForm/AbstractForm';
import HomeScreen from './Components/HomeScreen/HomeScreen';
import RegisterScreen from './Components/RegisterFormScreen/RegisterForm';
import ComingSoonScreen from './Components/comingSOon/ComingSoon';
import About from './Components/About/About';
import MessagesScreen from './Components/Messages/Messages';
import ExectiveCouncil from './Components/ExecutiveCouncil/ExecutiveCouncil';
import OrganizingCommitteeScreen from './Components/OrganizingCommitteeScreen/OrganizingCommitteeScreen';
import ScientificProgrammeScreen from './Components/ScientificProgrammeScreen/ScientificProgrammeScreen';
import AccommodationScreen from './Components/AccommodationScreen/AccommodationScreen';
import SponsorshipTariffScreen from './Components/SponsorshipTariffScreen/SponsorshipTariffScreen';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator 
    
    screenOptions={{drawerActiveBackgroundColor:"#e33fa1",drawerContentContainerStyle:{
      backgroundColor:"#121212",flex:1
    },
  headerStyle:{
    backgroundColor:"#e33fa1",
    
  },
  drawerLabelStyle:{
    color:"white"
  },
  headerTitle:"RSP40",
    headerTitleStyle:{
      color:"white"
    },
    headerTintColor:"white"
  
  }}
    
    initialRouteName="HomeScreen">
      <Drawer.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: true }} />
      <Drawer.Screen name="About RSP" component={About} options={{ headerShown: false }} />
      <Drawer.Screen name="Messages" component={MessagesScreen} options={{ headerShown: false }} />
      <Drawer.Screen name="Executive Council" component={ExectiveCouncil} options={{ headerShown: false }} />
      <Drawer.Screen name="Organizing Committee" component={OrganizingCommitteeScreen} options={{ headerShown: false }} />
      <Drawer.Screen name="Scientific Programme" component={ScientificProgrammeScreen} options={{ headerShown: false }} />
      <Drawer.Screen name="Accommodation" component={AccommodationScreen} options={{ headerShown: false }} />
      <Drawer.Screen name="Sponsorship Tariff" component={SponsorshipTariffScreen} options={{ headerShown: false }} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen name="Main" component={DrawerNavigator} options={{ headerShown: false }} />
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} options={{ headerShown: false }} />
        <Stack.Screen name="AbstractForm" component={AbstractForm} options={{ headerShown: false }} />
        <Stack.Screen name="ComingSoonScreen" component={ComingSoonScreen} options={{ headerShown: false }} />
        <Stack.Screen name="AboutRSP" component={About} options={{ headerShown: false }} />
        <Stack.Screen name="Messages" component={MessagesScreen} options={{ headerShown: false }} />
        <Stack.Screen name="ExectiveCouncil" component={ExectiveCouncil} options={{ headerShown: false }} />
        <Stack.Screen name="OrganizingCommitteeScreen" component={OrganizingCommitteeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="ScientificProgrammeScreen" component={ScientificProgrammeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="AccommodationScreen" component={AccommodationScreen} options={{ headerShown: false }} />
        <Stack.Screen name="SponsorshipTariffScreen" component={SponsorshipTariffScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
