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

type ItemProps = {
  item: ItemData;
  onPress: () => void;
  backgroundColor: string;
  textColor: string;
};

type ItemData = {
  id: string;
  title: string;
};

const Data = [
  {
    id: '11',
    title: 'ersten Item',
  },
  {
    id: '12',
    title: 'zweite Item',
  },
  {
    id: '13',
    title: 'dritte Item',
  },
  {
    id: '14',
    title: 'veirte Item',
  },
  {
    id: '15',
    title: 'funfte Item',
  },
  {
    id: '16',
    title: 'sechste Item',
  },
  {
    id: '17',
    title: 'sibste Item',
  },
  {
    id: '18',
    title: 'achte Item',
  },
  {
    id: '19',
    title: 'neinete Item',
  },
  {
    id: '20',
    title: 'zehnte Item',
  },
  {
    id: '21',
    title: 'elfte Item',
  },
  {
    id: '22',
    title: 'zwolfte Item',
  },
  {
    id: '23',
    title: 'dreizehnte Item',
  },
  {
    id: '24',
    title: 'vierzehnte Item',
  },
];

const Item = ({item, onPress, backgroundColor, textColor}: ItemProps) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, {backgroundColor}]}>
    <View style={[styles.itemstyle]}>
      <View style={[styles.itemImageStyle]}>
        <Image source={require('../../images/ScreenImage.png')} />
      </View>
      <Text style={[styles.buttonTextStyle, {color: textColor}]}>
        {item.title}
      </Text>
      <Text>{'Cost is $$$'}</Text>
    </View>
  </TouchableOpacity>
);

export default function ProfileScreen() {
  const [selectedId, setSelectedId] = useState<string>();

  const renderItem = ({item}: {item: ItemData}) => {
    const backgroundColor = item.id === selectedId ? '#6e3b6e' : '#f9c2ff';
    const color = item.id === selectedId ? 'white' : 'black';

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={backgroundColor}
        textColor={color}
      />
    );
  };
  return (
    <View style={styles.container2}>
      <View>
        {/* <Text style={styles.buttonTextStyle}>{'This is profile'}</Text> */}
        <TextInput style={styles.input} placeholder="Search" />
      </View>
      <FlatList
        data={Data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        extraData={selectedId}
        numColumns={2}
      />
    </View>
  );
}
