import {View, Text, Pressable} from 'react-native';
import React, {FC} from 'react';
import getStyling from './style';
import {ITaskTabOptionProps} from './interface';
import {TaskTabOptionEnum} from '../../utils/enums';

const TaskTabOption: FC<ITaskTabOptionProps> = props => {
  const styles = getStyling(props);
  return (
    // <Pressable {/* Tracker option */}
    //   onPress={() => props.onPress(props.option)}
    <View style={styles.container}>
      <Text style={styles.text}>{props.text}</Text>
      <View style={styles.line} />
    </View>
    // </Pressable>
  );
};

export default TaskTabOption;
