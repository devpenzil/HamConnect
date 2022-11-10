import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Logs from '../screens/logs/Logs';
import Profile from '../screens/profile/Profile';
import {ROUTE} from '../types/routes';

const Tab = createBottomTabNavigator();
const TabNavigation = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        name={ROUTE.LOG}
        component={Logs}
        options={{tabBarLabel: 'LOG'}}
      />
      <Tab.Screen
        name={ROUTE.PROFILE}
        component={Profile}
        options={{
          tabBarLabel: 'PROFILE',
          tabBarIcon: ({focused, color, size}) => {
            return;
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
