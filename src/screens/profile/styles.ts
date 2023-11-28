import {Dimensions, StatusBar, StyleSheet} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    marginVertical: 20,
    marginHorizontal: 30,
  },
  buttonTextStyle: {
    fontSize: 20,
  },
  flexStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container2: {
    flex: 1,
    backgroundColor: 'white',
  },
  itemstyle: {
    borderRadius: 30,
    height: windowHeight / 4,
    width: windowWidth / 3,
  },
  itemImageStyle: {
    borderRadius: 20,
    backgroundColor: 'lightblue',
    width: 160,
    height: 170,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderRadius: 10,
  },
});

export default styles;
