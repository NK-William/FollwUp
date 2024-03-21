import {StyleProp, ViewStyle} from 'react-native';

export interface IProgressBarProps {
  containerStyle?: StyleProp<ViewStyle>;
  progressToHundred: number;
}
