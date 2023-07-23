import type {StyleProp, ViewStyle} from 'react-native';
import {authFocusedEntry} from '../../utils/enums';

export interface IAuthInputProps {
  title?: string;
  value?: string;
  iconName?: string;
  secureTextEntry?: boolean;
  focused: boolean;
  entryName: authFocusedEntry;
  setFocused: (entry: authFocusedEntry) => void;
  onChangeText?: (text: string) => void;
  containerStyle?: StyleProp<ViewStyle>;
}

export interface IStyleProps {
  containerStyle?: StyleProp<ViewStyle>;
  focused?: boolean;
}
