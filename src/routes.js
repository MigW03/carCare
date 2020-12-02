import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';

import Main from './pages/Main';
import CarProfile from './pages/CarProfile';
import CarSettings from './pages/carSetting/CarSettings';

export default function Routes() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Main"
        component={Main}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="CarProfile"
        component={CarProfile}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="CarSettings"
        component={CarSettings}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
