import type {StyleProp, ViewStyle} from 'react-native';

export interface IPositiveButtonProps {
  text?: string;
  onPress?: () => void;
  containerStyle?: StyleProp<ViewStyle>;
}