import {View, Text, TextInput} from 'react-native';
import React, {FC} from 'react';
import {ITaskInputProps} from './interface';
import getStyling from './style';

const TaskInput: FC<ITaskInputProps> = props => {
  const {entryText, label, showOptional} = props;
  const styles = getStyling(props);
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          marginBottom: 8,
          alignItems: 'center',
        }}>
        <Text style={styles.label}>{label}</Text>
        {showOptional && <Text> (optional)</Text>}
      </View>
      <View style={styles.inputContainer}>
        <TextInput {...props} value={entryText} style={styles.input} />
      </View>
    </View>
  );
};

export default TaskInput;
