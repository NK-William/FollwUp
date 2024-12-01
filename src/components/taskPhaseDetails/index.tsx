import {View, Text, ScrollView} from 'react-native';
import React, {FC} from 'react';
import getStyling from './style';
import {ITaskPhaseDetailsProps} from './interface';

const TaskPhaseDetails: FC<ITaskPhaseDetailsProps> = props => {
  const {title, description, hasLimitedLines} = props;
  const styles = getStyling(props);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {description ? (
        // TODO: Limit description or make it scrollable
        <Text
          numberOfLines={hasLimitedLines ? 2 : undefined}
          ellipsizeMode={hasLimitedLines ? 'tail' : undefined}
          style={styles.description}>
          {description}
        </Text>
      ) : null}
    </View>
  );
};

export default TaskPhaseDetails;
