import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import MainTab from './MainTab'
import { Home } from '../screens/Home'
import { Location } from '../screens/Location';

export function Routes() {
  const { Screen, Navigator } = createStackNavigator()

  return (
    <NavigationContainer>
      <Navigator screenOptions={{
        headerShown: false,
      }}>
        <Screen name='MainTab' component={MainTab}/>
        <Screen name='location' component={Location}/>
      </Navigator>
    </NavigationContainer>
  )
}
