import {StyleProp, ViewStyle} from 'react-native';

export interface ITaskTabOptionProps {
  text?: string;
  isSelected?: boolean;
  onPress?: () => void;
  containerStyle?: StyleProp<ViewStyle>;
}
