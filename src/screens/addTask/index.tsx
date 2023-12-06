import {View, Text} from 'react-native';
import React from 'react';
import getStyling from './style';
import {AddTaskDetails} from '../../containers';
import {PositiveButton, PressableText} from '../../components';

const AddTask = () => {
  const styles = getStyling();
  return (
    <View style={styles.container}>
      <AddTaskDetails />
      <PressableText text="Add Phases" textStyle={styles.rightUnderlinedText} />
      <PositiveButton text="Save" containerStyle={styles.positiveButton} />
    </View>
  );
};

export default AddTask;
