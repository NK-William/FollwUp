import {View, Text} from 'react-native';
import React, {FC} from 'react';
import getStyling from './style';
import {ITaskTabOptionProps} from './interface';

const TaskTabOption: FC<ITaskTabOptionProps> = props => {
  const styles = getStyling(props);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Edit</Text>
      <View style={styles.line} />
    </View>
  );
};

export default TaskTabOption;
