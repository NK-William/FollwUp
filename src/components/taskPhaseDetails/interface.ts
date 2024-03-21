import {StyleProp, View, ViewStyle} from 'react-native';

export interface ITaskPhaseDetailsProps {
  title: string;
  description?: string;
  containerStyle?: StyleProp<ViewStyle>;
}
