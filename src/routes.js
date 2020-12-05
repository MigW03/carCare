import {createStackNavigator} from '@react-navigation/stack';
import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-community/async-storage';

import Main from './pages/Main';
import CarProfile from './pages/CarProfile';
import CarSettings from './pages/carSetting/CarSettings';

export default function Routes() {
  const [carData, setcarData] = useState();
  const Stack = createStackNavigator();

  useEffect(() => {
    getCarProfile();
  }, []);

  async function getCarProfile() {
    let data = await AsyncStorage.getItem('carProfile');
    setcarData(data);
  }

  return (
    <Stack.Navigator initialRouteName={'CarSettings'}>
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
