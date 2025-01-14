import {StyleProp, ViewStyle, TextStyle} from 'react-native';

export interface ITaskNumberBadgeProps {
  number: number;
  phaseId: string;
  onPress: (phaseId: string) => void;
  numberStyle?: StyleProp<TextStyle>;
  containerStyle?: StyleProp<ViewStyle>;
}
