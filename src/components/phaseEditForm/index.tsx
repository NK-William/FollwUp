import {View, Text} from 'react-native';
import React, {FC} from 'react';
import getStyling from './style';
import {IPhaseEditForm} from './interface';
import {IModalPhase} from '../../interfaces';
import UnderlinedText from '../underlinedText';
import TaskInput from '../taskInput';
import FollwUpButton from '../follwUpButton';
import {usePhaseEditForm} from './util';
import IconPicker from '../iconPicker';

const PhaseEditForm: FC<IPhaseEditForm> = props => {
  const {phase, setPhase, onCancel} = usePhaseEditForm(props);
  const styles = getStyling();

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <UnderlinedText
          text="Edit Phase"
          containerStyle={styles.underlinedText}
        />
        <View>
          <IconPicker
            iconSelected={selectedIcon => {
              console.log('Got icon selected: ', selectedIcon);
            }}
            iconName={phase.icon}
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
              text="Update"
              containerStyle={styles.negativeButton}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default PhaseEditForm;
