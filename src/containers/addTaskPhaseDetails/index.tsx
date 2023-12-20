import {View, Text} from 'react-native';
import React from 'react';
import getStyling from './style';
import {
  PressableText,
  TaskInput,
  UnderlinedText,
  FollwUpButton,
  IconPicker,
} from '../../components';

const AddTaskPhaseDetails = () => {
  const styles = getStyling();
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1}}>
        <UnderlinedText text="Task" containerStyle={styles.underlinedText} />
      </View>
      <IconPicker containerStyle={styles.iconPicker} />
      <TaskInput
        label="Name"
        entryText="Diagnosing"
        containerStyle={styles.entryLabel}
      />
      <TaskInput
        label="Description"
        multiline={true}
        numberOfLines={9}
        entryText="Description test"
        containerStyle={styles.entryLabel}
      />
      <View style={styles.pressableTextContainer}>
        <PressableText text="Previous" textStyle={styles.pressableText} />
        <PressableText text="Add Another" textStyle={styles.pressableText} />
      </View>
      <FollwUpButton
        text="Finish"
        containerStyle={styles.follwUpPositiveButton}
      />

      <FollwUpButton
        text="Cancel"
        textStyle={styles.follwUpNegativeButtonText}
        containerStyle={styles.follwUpNegativeButton}
      />
    </View>
  );
};

export default AddTaskPhaseDetails;
