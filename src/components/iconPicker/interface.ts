import {StyleProp, ViewStyle} from 'react-native';
import {IIconNameType} from '../../interfaces';

export interface IIconPicker {
  initIcon?: IIconNameType;
  containerStyle?: StyleProp<ViewStyle>;
  iconSelected?: (icon: IIconNameType) => void;
}
