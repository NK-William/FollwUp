import {View, Text} from 'react-native';
import React, {FC} from 'react';
import getStyling from './style';
import {ITaskNumberBadgeProps} from './interface';

const TaskNumberBadge: FC<ITaskNumberBadgeProps> = props => {
  const styles = getStyling(props);
  return (
    <View style={styles.container}>
      <Text style={styles.number}>{props.number}</Text>
    </View>
  );
};

export default TaskNumberBadge;
