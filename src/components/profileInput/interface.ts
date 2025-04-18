import {StyleProp, ViewStyle} from 'react-native';
import {updateProfileEnum} from '../../utils/enums';

export interface IProfileInputProps {
  title: string;
  iconType: 'Ionicons' | 'AntDesign' | 'Fontisto' | 'Feather';
  iconName: string;
  iconSize?: number;
  iconStyle?: any;
  value: string;
  savedText?: string;
  isReadOnly?: boolean;
  onChangeText?: (text: string) => void;
  onSaveIconPress?: (text: string) => void;
  containerStyle?: StyleProp<ViewStyle>;
}
