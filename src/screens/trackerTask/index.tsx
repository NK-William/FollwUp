import {View, Text} from 'react-native';
import React from 'react';
import getStyling from './style';
import {TaskStatsHeader} from '../../components';

const TrackerTask = () => {
  const styles = getStyling();
  return (
    <View>
      <TaskStatsHeader />
      <Text>TrackerTask</Text>
    </View>
  );
};

export default TrackerTask;
