import type {ColorValue, StyleProp, TextStyle} from 'react-native';

export interface IPressableTextProps {
  text?: string;
  color?: ColorValue;
  onPress?: () => void;
  textStyle?: StyleProp<TextStyle>;
}
