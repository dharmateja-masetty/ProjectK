import {View, Button, TextInput} from 'react-native';
import styles from '../profile/styles';

export default function login() {
  return (
    <>
      <View style={styles.flexStyle}>
        <TextInput style={styles.buttonTextStyle}>{'login'}</TextInput>
        <TextInput style={styles.buttonTextStyle}>{'Password'}</TextInput>
      </View>
      <View>
        <Button title="Submit" />
      </View>
    </>
  );
}
