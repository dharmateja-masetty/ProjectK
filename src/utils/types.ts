import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {StackParamList} from '../root';

export type HomeScreenProps = NativeStackScreenProps<StackParamList>;

export type ItemProps = {
  item: ItemData;
  onPress: () => void;
  backgroundColor: string;
  textColor: string;
};

export type ItemData = {
  id: string;
  title: string;
  cost: string;
  imageSource: string;
};
