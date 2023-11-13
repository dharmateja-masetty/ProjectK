import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from '../screens/splash/splashScreen';
import React from 'react';
import ProfileScreen from '../screens/profile/Profile';
import HomeScreen from '../routes/index';
import ProductDetailedPage from '../screens/ProductDetailPage/ProductDetailedPage';

type ItemData = {
  id: string;
  title: string;
  cost: string;
  imageSource: string;
};
export type StackParamList = {
  Home: undefined;
  Profile: undefined;
  Splash: undefined;
  ProductDetailedPage: {
    item: ItemData;
  };
};

const Stack = createNativeStackNavigator<StackParamList>();

export default function Index() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen
          name="ProductDetailedPage"
          component={ProductDetailedPage}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
