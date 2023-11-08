import {View, Text} from 'react-native';
import React from 'react';
import getStyling from './style';
import {AddTaskDetails} from '../../containers';

const AddTask = () => {
  const styles = getStyling();
  return (
    <View style={styles.container}>
      <AddTaskDetails />
    </View>
  );
};

export default AddTask;
