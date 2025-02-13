import {View, Text, Pressable} from 'react-native';
import React, {FC, useEffect, useState} from 'react';
import {
  UnderlinedText,
  TaskInput,
  FollwUpButton,
  PressableText,
  Icon,
} from '../../components';
import getStyling from './style';
import {IAddTaskDetailsProps} from './interface';
import {TaskFormFieldEnum} from '../../utils/enums';
import DateTimePicker from 'react-native-ui-datepicker';
import dayjs from 'dayjs';
import {accent, light, primary} from '../../constants/colors';
import OpicFiller from '../opicFiller';

const AddTaskDetails: FC<IAddTaskDetailsProps> = props => {
  const styles = getStyling();
  const [date, setDate] = useState(dayjs());
  const [calendarVisible, setCalendarVisible] = useState(false);

  const {
    name,
    // phoneNumber,
    organization,
    eta,
    navigation,
    description,
    updateTaskFormDetails,
    updateShowTaskPhaseContainer,
  } = props;

  useEffect(() => {
    // updateTaskFormDetails(date.format('DD/MM/YYYY'), TaskFormFieldEnum.eta);
    updateTaskFormDetails(date.toDate(), TaskFormFieldEnum.eta);
  }, [date]);

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
      {/* TODO: Organization field can be removed in the future */}
      <TaskInput
        label="Organization"
        entryText={organization}
        containerStyle={styles.entryLabel}
        onChangeText={text =>
          updateTaskFormDetails(text, TaskFormFieldEnum.organization)
        }
      />
      <Pressable
        style={{
          ...styles.entryLabel,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
        onPress={() => setCalendarVisible(!calendarVisible)}>
        <View>
          <Text style={styles.dateEntryLabel}>Select Date Of Completion</Text>
          <View style={{flexDirection: 'row'}}>
            <Text style={{fontSize: 16}}>
              {eta ? eta.toLocaleDateString('en-GB') : ''}
            </Text>
          </View>
        </View>
        <Icon
          iconType="FontAwesome5"
          iconName="calendar-alt"
          size={30}
          style={{marginRight: 0}}
        />
      </Pressable>

      {calendarVisible && (
        <OpicFiller>
          <View style={{margin: 12, backgroundColor: light, borderRadius: 20}}>
            <DateTimePicker
              mode="single"
              selectedItemColor={accent}
              headerButtonColor={primary}
              date={date}
              onChange={params => setDate(dayjs(params.date))}
            />
          </View>
          <FollwUpButton
            text="Close"
            onPress={() => setCalendarVisible(!calendarVisible)}
          />
        </OpicFiller>
      )}
      {/* <TaskInput
        label="Customer contact number"
        entryText={phoneNumber}
        containerStyle={styles.entryLabel}
        onChangeText={text =>
          updateTaskFormDetails(text, TaskFormFieldEnum.phoneNumber)
        }
      /> */}
      <TaskInput
        label="Description"
        multiline={true}
        numberOfLines={9}
        showOptional
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
        onPress={() => navigation.goBack()}
      />
    </View>
  );
};

export default AddTaskDetails;
