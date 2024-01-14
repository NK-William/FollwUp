import {StyleProp, ViewStyle} from 'react-native';

export interface ITaskInputProps {
  label: string;
  containerStyle?: StyleProp<ViewStyle>;
  multiline?: boolean;
  numberOfLines?: number;
  entryText?: string;
  onChangeText?: (text: string) => void;
}
