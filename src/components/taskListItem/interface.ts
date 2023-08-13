import {StyleProp, ViewStyle} from 'react-native';
import {taskStatus} from '../../utils/enums';

export interface ITaskListItemProps {
  name: string;
  clientFirstName?: string;
  clientLastName?: string;
  organization: string;
  status: taskStatus;
  progressToHundred: number;
  isTracker: boolean;
  containerStyle?: StyleProp<ViewStyle>;
}
