import type {ColorValue, StyleProp, ViewStyle} from 'react-native';

export interface IProgressTaskNameProps {
  clientFirstName?: string;
  clientLastName?: string;
  name: string;
  color: ColorValue;
  containerStyle?: StyleProp<ViewStyle>;
}
