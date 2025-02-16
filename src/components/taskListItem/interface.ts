import {StyleProp, ViewStyle} from 'react-native';
import {taskStatus} from '../../utils/enums';
import {ITask} from '../../interfaces';

export interface ITaskListItemProps {
  task: ITask;
  isTracker: boolean;
  OnSelected: (task: ITask) => void;
  containerStyle?: StyleProp<ViewStyle>;
}
