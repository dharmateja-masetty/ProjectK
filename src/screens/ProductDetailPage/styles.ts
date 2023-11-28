import {Dimensions, StyleSheet} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flexStyle: {
    flex: 0.7,
    alignItems: 'center',
  },
  itemsImageStyle: {
    // borderRadius: 20,
    resizeMode: 'stretch',
    width: windowWidth,
    height: windowHeight / 2,
  },
  contentStyle: {
    flex: 0.3,
    backgroundColor: 'white',
    Width: 10,
    height: 10,
  },
  TitleStyle: {
    fontSize: 40,
    justifyContent: 'center',
  },
  descriptionViewStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  costViewStyle: {
    width: 200,
    height: 150,
  },
  costStyle: {
    fontSize: 50,
  },
});
export default styles;
