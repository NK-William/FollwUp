import {View, Text, Pressable} from 'react-native';
import React, {FC} from 'react';
import getStyling from './style';
import {ITaskListItemProps} from './interface';
import {useTaskListItem} from './util';
import {PressableText} from '../';
import {accent} from '../../constants/colors';
import {ProgressBar} from '..';

const TaskListItem: FC<ITaskListItemProps> = props => {
  const {
    task,
    statusViewColor,
    statusText,
    namesOrOrganization,
    inviteLinkVisible,
    progressToHundred,
  } = useTaskListItem(props);

  const styles = getStyling(props, statusViewColor, inviteLinkVisible);
  return (
    <Pressable onPress={() => props.OnSelected(task)} style={styles.container}>
      <View style={styles.taskInfoContainer}>
        <View>
          <Text style={styles.taskName}>{task.name}</Text>
          <Text style={styles.subName}>{namesOrOrganization}</Text>
        </View>
        <View style={styles.rightView}>
          <View style={styles.statusView}>
            <Text style={styles.statusText}>{statusText}</Text>
          </View>
          {/* {inviteLinkVisible && (
            <PressableText
              color={accent}
              text="Invite"
              onPress={() => {}}
              textStyle={{fontWeight: 'normal'}}
            />
          )} */}
        </View>
      </View>
      <ProgressBar
        progressToHundred={progressToHundred}
        containerStyle={{
          marginTop: 4,
        }}
      />
      {/* <View style={styles.badge}>
        <Text style={styles.badgeText}>2</Text>
      </View> */}
    </Pressable>
  );
};

export default TaskListItem;
