import {View, Text} from 'react-native';
import React, {FC} from 'react';
import {ITaskInputProps} from './interface';
import getStyling from './style';

const TaskInput: FC<ITaskInputProps> = props => {
  const styles = getStyling(props);
  return (
    <View>
      <Text style={{color: 'black'}}>TaskInput</Text>
    </View>
  );
};

export default TaskInput;
