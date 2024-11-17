import {View, Pressable} from 'react-native';
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
import {resetToScreen} from '../../utils';
import {home} from '../../constants/pageNames';
import {useNavigation} from '@react-navigation/native';

const AddTaskPhaseDetails: FC<IAddTaskPhaseDetailsProps> = props => {
  const styles = getStyling();

  const {
    name,
    description,
    phaseNumber,
    iconName,
    setName,
    setDescription,
    setShowPickerPopup,
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
      <View style={{flex: 1}}>
        <UnderlinedText
          text={`Phase ${phaseNumber}`}
          containerStyle={styles.underlinedText}
        />
      </View>
      <Pressable>
        <IconPicker
          setShowPickerPopup={setShowPickerPopup}
          iconName={iconName}
          containerStyle={styles.iconPicker}
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
