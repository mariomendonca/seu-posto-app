import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import CustomTabBar from '../src/components/CustomTabBar';

import { Home } from '../src/screens/Home';
import Filter from '../src/screens/Filter';

const Tab = createBottomTabNavigator();

export default () =>{
    return(
        <Tab.Navigator 
        initialRouteName="Home"
        tabBar={props=> <CustomTabBar{...props}/>}
        >
            <Tab.Screen name="Filter" component={Filter}/>
            <Tab.Screen name="Home" component={Home}/>
        </Tab.Navigator>
    );
}
