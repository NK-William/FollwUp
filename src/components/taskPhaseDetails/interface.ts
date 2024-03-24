import {StyleProp, TextStyle, ViewStyle} from 'react-native';

export interface ITaskPhaseDetailsProps {
  title: string;
  description?: string;
  containerStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
}
