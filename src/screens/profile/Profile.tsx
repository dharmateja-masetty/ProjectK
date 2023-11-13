import {
  FlatList,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import React, {useState} from 'react';
import styles from './styles';
import {data} from './data.json';
import {useNavigation} from '@react-navigation/native';
import {StackParamList} from '../../root';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

type ItemProps = {
  item: ItemData;
  onPress: () => void;
  backgroundColor: string;
  textColor: string;
};

type ItemData = {
  id: string;
  title: string;
  cost: string;
  imageSource: string;
};

const Item = ({item, onPress, backgroundColor, textColor}: ItemProps) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, {backgroundColor}]}>
    <View style={[styles.itemstyle]}>
      <Image style={[styles.itemImageStyle]} source={{uri: item.imageSource}} />
      <Text style={[styles.buttonTextStyle, {color: textColor}]}>
        {item.title}
      </Text>
      <Text style={{color: textColor}}>{'Cost is ' + item.cost}</Text>
    </View>
  </TouchableOpacity>
);

export default function ProfileScreen() {
  const navigation: NativeStackNavigationProp<StackParamList> = useNavigation();

  function navigateToProductDetails(item: ItemData) {
    setSelectedId(item.id);
    navigation.navigate('ProductDetailedPage', {
      item,
    });
  }
  const [selectedId, setSelectedId] = useState<string>();
  const renderItem = ({item}: {item: ItemData}) => {
    const backgroundColor = item.id === selectedId ? 'white' : 'white';
    const color = item.id === selectedId ? 'lightblue' : 'black';

    return (
      <Item
        item={item}
        onPress={() => navigateToProductDetails(item)}
        backgroundColor={backgroundColor}
        textColor={color}
      />
    );
  };
  return (
    <View style={styles.container2}>
      <View>
        <TextInput style={styles.input} placeholder="Search" />
      </View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        extraData={selectedId}
        numColumns={2}
      />
    </View>
  );
}
