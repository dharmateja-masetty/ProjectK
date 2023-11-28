import {Button, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import styles from './styles';
import {HomeScreenProps} from '../../utils/types';

export default function HomeScreen({navigation}: HomeScreenProps) {
  const navigateToProfile = () => {
    navigation.navigate('Profile');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.flexStyle}>
        <Text style={styles.buttonTextStyle}>{'H.O.M.E.'}</Text>
      </View>
      <View>
        <Button title="Go to profile" onPress={navigateToProfile} />
      </View>
    </SafeAreaView>
  );
}
