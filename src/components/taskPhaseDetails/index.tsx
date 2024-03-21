import {View, Text} from 'react-native';
import React, {FC} from 'react';
import getStyling from './style';
import {ITaskPhaseDetailsProps} from './interface';

const TaskPhaseDetails: FC<ITaskPhaseDetailsProps> = props => {
  const styles = getStyling(props);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.title}</Text>
      {props.description ? (
        <Text numberOfLines={2} ellipsizeMode="tail" style={styles.description}>
          {props.description}
        </Text>
      ) : null}
    </View>
  );
};

export default TaskPhaseDetails;
