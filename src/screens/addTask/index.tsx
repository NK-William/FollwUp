import {View, Text} from 'react-native';
import React from 'react';
import getStyling from './style';
import {AddTaskDetails, AddTaskPhaseDetails} from '../../containers';

const AddTask = () => {
  const styles = getStyling();
  return (
    <View style={styles.container}>
      <AddTaskDetails />
      <AddTaskPhaseDetails />
    </View>
  );
};

export default AddTask;
