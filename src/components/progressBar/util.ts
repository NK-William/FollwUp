import {useState} from 'react';
import {LayoutChangeEvent} from 'react-native';
import {IMutatedIProgressTasks, IProgressBarProps} from './interface';

export const useProgressBar = (props: IProgressBarProps) => {
  const [viewWidth, setViewWidth] = useState(0);
  const {progressTasks} = props;
  let mutatedTasks: IMutatedIProgressTasks[] = [];

  if (viewWidth) {
    const taskWidthSpace = viewWidth / progressTasks.length;

    mutatedTasks = progressTasks.map(progressTask => ({
      ...progressTask,
      width: (progressTask.progressToHundred / 100) * taskWidthSpace,
    }));
  }

  const handleLayout = (event: LayoutChangeEvent) => {
    const {width} = event.nativeEvent.layout;
    setViewWidth(width);
  };
  return {handleLayout, mutatedTasks};
};
