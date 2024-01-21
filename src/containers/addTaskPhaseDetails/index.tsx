import {View, Text} from 'react-native';
import React, {FC} from 'react';
import getStyling from './style';
import {
  PressableText,
  TaskInput,
  UnderlinedText,
  FollwUpButton,
  IconPicker,
} from '../../components';
import {IAddTaskPhaseDetailsProps} from './interface';

const AddTaskPhaseDetails: FC<IAddTaskPhaseDetailsProps> = props => {
  const styles = getStyling();

  const {name, description, phaseNumber, setName, setDescription, addPhase} =
    props;

  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1}}>
        <UnderlinedText
          text={`Phase ${phaseNumber}`}
          containerStyle={styles.underlinedText}
        />
      </View>
      <IconPicker containerStyle={styles.iconPicker} />
      <TaskInput
        label="Name"
        entryText={name}
        containerStyle={styles.entryLabel}
        onChangeText={text => {
          if (setName) setName(text);
        }}
      />
      <TaskInput
        label="Description"
        multiline={true}
        numberOfLines={9}
        entryText={description}
        containerStyle={styles.entryLabel}
        onChangeText={text => {
          if (setDescription) setDescription(text);
        }}
      />
      <View style={styles.pressableTextContainer}>
        <PressableText text="Previous" textStyle={styles.pressableText} />
        <PressableText
          text="Add Another"
          textStyle={styles.pressableText}
          onPress={() => {
            if (addPhase) addPhase();
          }}
        />
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
