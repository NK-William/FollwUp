import {View, Text} from 'react-native';
import React from 'react';
import {UnderlinedText, TaskInput} from '../../components';
import getStyling from './style';

const AddTaskDetails = () => {
  const styles = getStyling();
  return (
    <View>
      <UnderlinedText text="Task" containerStyle={styles.underlinedText} />
      <TaskInput label="Name" />
    </View>
  );
};

export default AddTaskDetails;
