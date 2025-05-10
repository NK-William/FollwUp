import {View} from 'react-native';
import React, {FC} from 'react';
import getStyling from './style';
import {IPhaseEditForm} from './interface';
import {usePhaseEditForm} from './util';
import {
  ScreenBlockerLoader,
  FollwUpButton,
  TaskInput,
  UnderlinedText,
  IconPicker,
} from '..';

const PhaseEditForm: FC<IPhaseEditForm> = props => {
  const {
    phase,
    titleText,
    saveButtonText,
    isLoading,
    setPhase,
    onSave,
    onCancel,
  } = usePhaseEditForm(props);
  const styles = getStyling();

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <UnderlinedText
          text={titleText}
          containerStyle={styles.underlinedText}
        />
        <View>
          <IconPicker
            iconSelected={selectedIcon => {
              setPhase({...phase, icon: selectedIcon});
            }}
            initIcon={phase.icon}
            containerStyle={{alignSelf: 'center', marginVertical: 16}}
          />
          <TaskInput
            label="Name"
            entryText={phase.name}
            containerStyle={styles.entry}
            onChangeText={text => setPhase(m => ({...m, name: text}))}
          />
          <TaskInput
            label="Description"
            multiline={true}
            numberOfLines={9}
            entryText={phase.description}
            containerStyle={styles.entry}
            onChangeText={text => setPhase(m => ({...m, description: text}))}
          />
          <View style={styles.buttonContainer}>
            <FollwUpButton
              text="Cancel"
              onPress={() => onCancel()}
              containerStyle={styles.positiveButton}
              textStyle={styles.positiveButtonText}
            />
            <View style={{width: 8}} />
            <FollwUpButton
              text={saveButtonText}
              containerStyle={styles.negativeButton}
              onPress={onSave}
            />
          </View>
        </View>
      </View>
      {isLoading && <ScreenBlockerLoader />}
    </View>
  );
};

export default PhaseEditForm;
