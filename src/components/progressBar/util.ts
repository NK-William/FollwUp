import {useState} from 'react';
import {IProgressBarProps} from './interface';
import {LayoutChangeEvent} from 'react-native';

export const useProgressBar = (props: IProgressBarProps) => {
  const [progressWidth, setProgressWidth] = useState(0);

  const handleLayout = (event: LayoutChangeEvent) => {
    const {width} = event.nativeEvent.layout;
    if (width > 0) handleProgressWidth(width);
  };

  const handleProgressWidth = (width: number) => {
    const progress = (props.progressToHundred / 100) * width;
    setProgressWidth(progress);
  };

  return {
    progressWidth,
    handleLayout,
  };
};
