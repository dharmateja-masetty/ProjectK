import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {Button, Image, Text, View} from 'react-native';
import {StackParamList} from '../../root';
import styles from './styles';
import React from 'react'; //Need to check y?

type ItemData = {
  id: string;
  title: string;
  cost: string;
  imageSource: string;
};

const ProductDetailedPage = () => {
  const route: RouteProp<StackParamList> = useRoute();
  const navigation = useNavigation();
  const items: ItemData | undefined = route.params
    ? route.params.item
    : undefined;
  return (
    <>
      {items && (
        <View style={[styles.container]}>
          <View style={[styles.flexStyle]}>
            <Image
              style={[styles.itemsImageStyle]}
              source={{uri: items.imageSource}}
            />
          </View>
          <View style={[styles.contentStyle]}>
            <Text style={[styles.TitleStyle]}>{items.title}</Text>
            <View style={[styles.descriptionViewStyle]}>
              <View style={[styles.costViewStyle]}>
                <Text style={[styles.costStyle]}>{items.cost}</Text>
                <Text>{'Added Exclusive Discounts| 50% off'}</Text>
              </View>
              <View style={[styles.costViewStyle]}>
                <Text style={[styles.costStyle]}>{'*****'}</Text>
                <Text>{'BASED ON 27 REVIEWS'}</Text>
                <Text>{}</Text>
              </View>
            </View>
          </View>
          <View style={[styles.contentStyle]}>
            <Button title="Go Back" onPress={navigation.goBack} />
          </View>
        </View>
      )}
    </>
  );
};
export default ProductDetailedPage;
