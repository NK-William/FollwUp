import {StyleProp, ViewStyle} from 'react-native';
import {TaskTabOptionEnum} from '../../utils/enums';

export interface ITaskTabOptionProps {
  text: string;
  isSelected: boolean;
  onPress: (tabOption: TaskTabOptionEnum) => void;
  option: TaskTabOptionEnum;
  containerStyle?: StyleProp<ViewStyle>;
}
