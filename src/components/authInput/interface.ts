import type {KeyboardTypeOptions, StyleProp, ViewStyle} from 'react-native';
import {authFocusedEntry} from '../../utils/enums';

export interface IAuthInputProps {
  title?: string;
  value?: string;
  iconName?: string;
  secureEntry?: boolean;
  focused: boolean;
  entryName: authFocusedEntry;
  keyboardType?: KeyboardTypeOptions | undefined;
  setFocused: (entry: authFocusedEntry) => void;
  onChangeText?: (text: string) => void;
  containerStyle?: StyleProp<ViewStyle>;
}

export interface IStyleProps {
  containerStyle?: StyleProp<ViewStyle>;
  focused?: boolean;
}
