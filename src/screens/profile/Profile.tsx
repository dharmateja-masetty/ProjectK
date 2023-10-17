import {Button, SafeAreaView, Text, View} from 'react-native';
import React from 'react';
import styles from './styles';

const ProfileScreen = ({navigation}: {navigation: any}) => {
  const navigateToGoBack = () => {
    navigation.goBack();
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.flexStyle}>
        <Text style={styles.buttonTextStyle}>{'This is profile'}</Text>
      </View>
      <View>
        <Button title="Go back" onPress={navigateToGoBack} />
      </View>
    </SafeAreaView>
  );
};
export default ProfileScreen;
