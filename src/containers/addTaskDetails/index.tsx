import {View, Text} from 'react-native';
import React, {FC, useState} from 'react';
import {
  UnderlinedText,
  TaskInput,
  FollwUpButton,
  PressableText,
} from '../../components';
import getStyling from './style';
import {IAddTaskDetailsProps} from './interface';

const AddTaskDetails: FC<IAddTaskDetailsProps> = props => {
  const styles = getStyling();
  const {name, clientPhoneNumber, description} = props.task ?? {};
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1}}>
        <UnderlinedText text="Task" containerStyle={styles.underlinedText} />
      </View>
      <TaskInput
        label="Name"
        entryText={name}
        containerStyle={styles.entryLabel}
      />
      <TaskInput
        label="Customer contact number"
        entryText={clientPhoneNumber}
        containerStyle={styles.entryLabel}
      />
      <TaskInput
        label="Description"
        multiline={true}
        numberOfLines={9}
        entryText={description}
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
