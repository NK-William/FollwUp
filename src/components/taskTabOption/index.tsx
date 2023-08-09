import {View, Text, Pressable} from 'react-native';
import React, {FC} from 'react';
import getStyling from './style';
import {ITaskTabOptionProps} from './interface';
import {TaskTabOptionEnum} from '../../utils/enums';

const TaskTabOption: FC<ITaskTabOptionProps> = props => {
  const styles = getStyling(props);
  return (
    <Pressable
      onPress={() => props.onPress(props.option)}
      style={styles.container}>
      <Text style={styles.text}>{props.text}</Text>
      <View style={styles.line} />
    </Pressable>
  );
};

export default TaskTabOption;
