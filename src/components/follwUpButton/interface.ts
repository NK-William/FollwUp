import type {StyleProp, TextStyle, ViewStyle} from 'react-native';

export interface IFollwUpButtonProps {
  text?: string;
  loading?: boolean;
  onPress?: () => void;
  textStyle?: StyleProp<TextStyle>;
  containerStyle?: StyleProp<ViewStyle>;
}
