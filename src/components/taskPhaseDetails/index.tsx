import {View, Text, ScrollView} from 'react-native';
import React, {FC} from 'react';
import getStyling from './style';
import {ITaskPhaseDetailsProps} from './interface';

const TaskPhaseDetails: FC<ITaskPhaseDetailsProps> = props => {
  const {title, description, hasLimitedTitleLines, hasLimitedDescriptionLines} =
    props;
  const styles = getStyling(props);
  return (
    <View style={styles.container}>
      <Text
        numberOfLines={hasLimitedTitleLines ? 1 : undefined}
        ellipsizeMode={hasLimitedTitleLines ? 'tail' : undefined}
        style={styles.title}>
        {title}
      </Text>
      {description ? (
        // TODO: Limit description or make it scrollable
        <Text
          numberOfLines={hasLimitedDescriptionLines ? 2 : undefined}
          ellipsizeMode={hasLimitedDescriptionLines ? 'tail' : undefined}
          style={styles.description}>
          {description}
        </Text>
      ) : null}
    </View>
  );
};

export default TaskPhaseDetails;
