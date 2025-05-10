import {View, Pressable, ScrollView} from 'react-native';
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
import {useAddTaskPhaseDetails} from './util';
import {home} from '../../constants/pageNames';

const AddTaskPhaseDetails: FC<IAddTaskPhaseDetailsProps> = props => {
  const styles = getStyling();

  const {
    name,
    description,
    phaseNumber,
    icon,
    setName,
    IconSelected,
    setDescription,
    openNextPhaseForm,
    updateShowTaskPhaseContainer,
    displayPreviousPhase,
    OnFinish,
    OnCancel,
  } = props;

  const {returnToPrevious} = useAddTaskPhaseDetails(
    phaseNumber,
    updateShowTaskPhaseContainer,
    displayPreviousPhase,
  );

  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1, marginBottom: 40}}>
        <UnderlinedText
          text={`Phase ${phaseNumber}`}
          containerStyle={styles.underlinedText}
        />
      </View>
      <Pressable>
        <IconPicker
          iconSelected={IconSelected}
          containerStyle={styles.iconPicker}
          initIcon={icon}
        />
      </Pressable>
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
        showOptional
        entryText={description}
        containerStyle={styles.entryLabel}
        onChangeText={text => {
          if (setDescription) setDescription(text);
        }}
      />
      <View style={styles.pressableTextContainer}>
        <PressableText
          text={phaseNumber === 1 ? 'Return to task details' : 'Previous'}
          textStyle={styles.pressableText}
          onPress={returnToPrevious}
        />
        <PressableText
          text="Add another"
          textStyle={styles.pressableText}
          onPress={() => {
            if (openNextPhaseForm) openNextPhaseForm();
          }}
        />
      </View>
      <FollwUpButton
        text="Finish"
        onPress={OnFinish}
        containerStyle={styles.follwUpPositiveButton}
      />

      <FollwUpButton
        text="Cancel"
        textStyle={styles.follwUpNegativeButtonText}
        containerStyle={styles.follwUpNegativeButton}
        onPress={() => OnCancel([{name: home}])}
      />
    </View>
  );
};

export default AddTaskPhaseDetails;
