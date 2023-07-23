import type {StyleProp, ViewStyle} from 'react-native';

export interface PositiveButtonProps {
  text?: string;
  onPress?: () => void;
  containerStyle?: StyleProp<ViewStyle>;
}
