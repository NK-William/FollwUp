import {StyleProp, ViewStyle} from 'react-native';

export interface IIconPicker {
  iconName: string;
  containerStyle?: StyleProp<ViewStyle>;
  setShowPickerPopup: (value: boolean) => void;
}
