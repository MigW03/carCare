import React from 'react';
import { NavigationContainer} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Main from './src/pages/Main'
import CarProfile from './src/pages/CarProfile'

export default function App(){

  const Stack = createStackNavigator()

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Main'
          component={Main}
          options={{
            headerShown: false
          }}/>
        <Stack.Screen
          name='CarProfile'
          component={CarProfile}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};