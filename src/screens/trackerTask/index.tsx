import {View, Text} from 'react-native';
import React from 'react';
import getStyling from './style';
import {
  TaskStatsHeader,
  TaskNumberBadge,
  TaskTrackLine,
} from '../../components';

const TrackerTask = () => {
  const styles = getStyling();
  return (
    <View>
      <TaskStatsHeader />
      <TaskNumberBadge number={2} />
      <TaskTrackLine />
    </View>
  );
};

export default TrackerTask;
