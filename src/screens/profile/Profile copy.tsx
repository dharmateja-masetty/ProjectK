/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  FlatList,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import React, {useEffect, useState} from 'react';
import styles from './styles';
import {data} from './data.json';
import {useNavigation} from '@react-navigation/native';
import {StackParamList} from '../../root';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ItemData, ItemProps} from '../../utils/types';

const Item = ({item, onPress, backgroundColor, textColor}: ItemProps) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, {backgroundColor}]}>
    <View style={[styles.itemstyle]}>
      <Image style={[styles.itemImageStyle]} source={{uri: item.imageSource}} />
      <Text style={[styles.buttonTextStyle, {color: textColor}]}>
        {item.title}
      </Text>
      <Text style={{color: textColor}}>{`Cost is ${item.cost}`}</Text>
    </View>
  </TouchableOpacity>
);

export default function ProfileScreen() {
  const navigation: NativeStackNavigationProp<StackParamList> = useNavigation();
  const [searchTerm, setSearchTerm] = useState<string>();
  const [displayData, setDisplayData] = useState<ItemData[]>();
  function navigateToProductDetails(item: ItemData) {
    setSelectedId(item.id);
    navigation.navigate('ProductDetail', {
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

  useEffect(() => {
    const filteredData = data.filter(item => item.title.includes(searchTerm));
    setDisplayData(filteredData);
  }, [searchTerm, setDisplayData]);

  return (
    <View style={styles.container2}>
      <View>
        <TextInput
          style={styles.input}
          placeholder="Search"
          onChangeText={(value: string) => setSearchTerm(value)}
        />
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
