import type {StyleProp, TextStyle} from 'react-native';

export interface IPressableTextProps {
  text?: string;
  onPress?: () => void;
  textStyle?: StyleProp<TextStyle>;
}
