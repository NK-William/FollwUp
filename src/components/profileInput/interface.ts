import {StyleProp, ViewStyle} from 'react-native';

export interface IProfileInputProps {
  title: string;
  iconType: 'Ionicons' | 'AntDesign' | 'Fontisto' | 'Feather';
  iconName: string;
  iconSize?: number;
  iconStyle?: any;
  value: string;
  savedText: string;
  onChangeText: (text: string) => void;
  containerStyle?: StyleProp<ViewStyle>;
}
