import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {Text} from 'react-native';

export default function SplashScreen() {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Home' as never);
    }, 3000);
  }, [navigation]);

  return (
    <>
      <Text>Wow screen!</Text>
    </>
  );
}
