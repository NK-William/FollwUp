import {View, Text} from 'react-native';
import React, {useState} from 'react';
import {
  UnderlinedText,
  TaskInput,
  FollwUpButton,
  PressableText,
} from '../../components';
import getStyling from './style';

const AddTaskDetails = () => {
  const styles = getStyling();
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1}}>
        <UnderlinedText text="Task" containerStyle={styles.underlinedText} />
      </View>
      <TaskInput
        label="Name"
        entryText="Body polishing"
        containerStyle={styles.entryLabel}
      />
      <TaskInput
        label="Customer contact number"
        entryText="0711111111"
        containerStyle={styles.entryLabel}
      />
      <TaskInput
        label="Description"
        multiline={true}
        numberOfLines={9}
        entryText="Description test"
        containerStyle={styles.entryLabel}
      />
      <PressableText text="Add Phases" textStyle={styles.rightPressableText} />
      <FollwUpButton
        text="Cancel"
        textStyle={styles.follwUpButtonText}
        containerStyle={styles.follwUpButton}
      />
    </View>
  );
};

export default AddTaskDetails;
