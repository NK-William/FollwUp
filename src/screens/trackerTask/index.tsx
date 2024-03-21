import {View, Text} from 'react-native';
import React from 'react';
import getStyling from './style';
import {
  TaskStatsHeader,
  TaskNumberBadge,
  TaskTrackLine,
  TaskPhaseDetails,
} from '../../components';

const TrackerTask = () => {
  const styles = getStyling();
  return (
    <View>
      <TaskStatsHeader />
      <TaskNumberBadge number={2} />
      <TaskTrackLine />
      <View
        style={{
          flexWrap: 'wrap-reverse',
          alignItems: 'flex-end',
          justifyContent: 'flex-end',
        }}>
        <TaskPhaseDetails
          title="Diagnostic"
          description="We will be diagnosing your car to find the problem"
        />
      </View>
    </View>
  );
};

export default TrackerTask;
