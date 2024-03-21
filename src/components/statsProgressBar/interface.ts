import type {ColorValue, StyleProp, ViewStyle} from 'react-native';

export interface IStatsProgressBarProps {
  progressTasks: IProgressTasks[];
  containerStyle?: StyleProp<ViewStyle>;
}

interface IProgressTasks {
  name: string;
  color: ColorValue;
  progressToHundred: number;
}

export interface IMutatedIProgressTasks extends IProgressTasks {
  width?: number;
}
