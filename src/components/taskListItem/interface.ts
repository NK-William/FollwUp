import {StyleProp, ViewStyle} from 'react-native';
import {taskStatus} from '../../utils/enums';

export interface ITaskListItemProps {
  name: string;
  clientFirstName?: string;
  clientLastName?: string;
  status: taskStatus;
  progressToHundred: number;
  containerStyle?: StyleProp<ViewStyle>;
}
