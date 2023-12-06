import {View, Text, TextInput} from 'react-native';
import React, {FC} from 'react';
import {ITaskInputProps} from './interface';
import getStyling from './style';

const TaskInput: FC<ITaskInputProps> = props => {
  const styles = getStyling(props);
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{props.label}</Text>
      <View style={styles.inputContainer}>
        <TextInput {...props} value={props.entryText} style={styles.input} />
      </View>
    </View>
  );
};

export default TaskInput;
