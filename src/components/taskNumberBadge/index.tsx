import {View, Text, Pressable} from 'react-native';
import React, {FC} from 'react';
import getStyling from './style';
import {ITaskNumberBadgeProps} from './interface';

const TaskNumberBadge: FC<ITaskNumberBadgeProps> = props => {
  const {number, phaseId, onPress} = props;
  const styles = getStyling(props);
  return (
    <Pressable onPress={() => onPress(phaseId)} style={styles.container}>
      <Text style={styles.number}>{number}</Text>
    </Pressable>
  );
};

export default TaskNumberBadge;
