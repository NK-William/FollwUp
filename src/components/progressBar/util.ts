import {useState} from 'react';
import {LayoutChangeEvent} from 'react-native';

export interface IMutatedTasks {
  name: string;
  color: string;
  progress: number;
  Width?: number;
}

const tasks = [
  {
    name: 'engine rebuild',
    color: 'green',
    progress: 100,
  },
  {
    name: 'name2',
    color: 'orange',
    progress: 90,
  },
  {
    name: 'name3',
    color: 'purple',
    progress: 83,
  },
  {
    name: 'name4',
    color: 'red',
    progress: 50,
  },
  {
    name: 'name5',
    color: 'blue',
    progress: 21,
  },
];

export const useProgressBar = () => {
  const [viewWidth, setViewWidth] = useState(0);

  let mutatedTasks: IMutatedTasks[] = [];

  if (viewWidth) {
    const taskWidthSpace = viewWidth / tasks.length;

    mutatedTasks = tasks.map(task => ({
      ...task,
      Width: (task.progress / 100) * taskWidthSpace,
    }));
  }

  const handleLayout = (event: LayoutChangeEvent) => {
    const {width} = event.nativeEvent.layout;
    setViewWidth(width);
  };
  return {handleLayout, mutatedTasks};
};
