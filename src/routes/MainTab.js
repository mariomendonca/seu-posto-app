import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import CustomTabBar from '../components/CustomTabBar';

import { Home } from '../screens/Home';
import Filter from '../screens/Filter';
import Favorites from '../screens/Favorites';
import UserProfile from '../screens/UserProfile';

const Tab = createBottomTabNavigator();

export default () =>{
    return(
        <Tab.Navigator 
        initialRouteName="Home"
        tabBar={props=> <CustomTabBar{...props}/>}
        >
            <Tab.Screen name="Home" component={Home}/>
            <Tab.Screen name="Filter" component={Filter}/>
            <Tab.Screen name="Favorites" component={Favorites}/>
            <Tab.Screen name="UserProfile" component={UserProfile}/>
        </Tab.Navigator>
    );
}
