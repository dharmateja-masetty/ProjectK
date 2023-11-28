import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/home/index';
import ProfileScreen from '../screens/profile/Profile';
import login from '../screens/login/login';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Login" component={login} />
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Products" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
