import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Logs from './app/screens/logs/Logs';
import Profile from './app/screens/profile/Profile';
import TabNavigation from './app/navigation/TabNavigation';
import {ROUTE} from './app/types/routes';
import LoginScreen from './app/screens/auth/login/LoginScreen';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={ROUTE.LOGIN}>
        <Stack.Screen name={ROUTE.TABNAVIGATION} component={TabNavigation} />
        <Stack.Screen name={ROUTE.LOG} component={Logs} />
        <Stack.Screen name={ROUTE.PROFILE} component={Profile} />
        <Stack.Screen name={ROUTE.LOGIN} component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
