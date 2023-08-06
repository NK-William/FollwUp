import {ColorValue} from 'react-native';
import {ITask} from '../../interfaces';

export const useHome = () => {
  const progressBarTasks = (
    tasks: ITask[],
  ): {name: string; color: ColorValue; progressToHundred: number}[] => {
    return tasks.map(({name, color, progressToHundred}) => ({
      name,
      color,
      progressToHundred,
    }));
  };
  return {progressBarTasks};
};
