import {StyleProp, ViewStyle, TextStyle} from 'react-native';

export interface ITaskNumberBadgeProps {
  number: number;
  numberStyle?: StyleProp<TextStyle>;
  containerStyle?: StyleProp<ViewStyle>;
}
