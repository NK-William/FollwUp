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
import {TaskFormFieldEnum} from '../../utils/enums';

const AddTaskDetails: FC<IAddTaskDetailsProps> = props => {
  const styles = getStyling();
  const {
    name,
    phoneNumber,
    description,
    updateTaskFormDetails,
    updateShowTaskPhaseContainer,
  } = props;
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1}}>
        <UnderlinedText text="Task" containerStyle={styles.underlinedText} />
      </View>
      <TaskInput
        label="Name"
        entryText={name}
        containerStyle={styles.entryLabel}
        onChangeText={text =>
          updateTaskFormDetails(text, TaskFormFieldEnum.name)
        }
      />
      <TaskInput
        label="Customer contact number"
        entryText={phoneNumber}
        containerStyle={styles.entryLabel}
        onChangeText={text =>
          updateTaskFormDetails(text, TaskFormFieldEnum.phoneNumber)
        }
      />
      <TaskInput
        label="Description"
        multiline={true}
        numberOfLines={9}
        entryText={description}
        containerStyle={styles.entryLabel}
        onChangeText={text =>
          updateTaskFormDetails(text, TaskFormFieldEnum.description)
        }
      />
      <PressableText
        text="Add Phases"
        textStyle={styles.rightPressableText}
        onPress={() => updateShowTaskPhaseContainer()}
      />
      <FollwUpButton
        text="Cancel"
        textStyle={styles.follwUpButtonText}
        containerStyle={styles.follwUpButton}
      />
    </View>
  );
};

export default AddTaskDetails;
