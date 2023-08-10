import {View, Text} from 'react-native';
import React, {FC} from 'react';
import getStyling from './style';
import {ITaskListItemProps} from './interface';
import {useTaskListItem} from './util';
import {PressableText} from '../';
import {accent} from '../../constants/colors';

const TaskListItem: FC<ITaskListItemProps> = props => {
  const {statusViewColor, statusText, names, inviteLinkVisible} =
    useTaskListItem(props);
  const styles = getStyling(props, statusViewColor, inviteLinkVisible);
  return (
    <View style={styles.container}>
      <View style={styles.taskInfoContainer}>
        <View style={styles.taskInfo}>
          <Text style={styles.taskName}>{props.name}</Text>
          <Text style={styles.names}>{names}</Text>
        </View>
        <View style={styles.rightView}>
          <View style={styles.statusView}>
            <Text style={styles.statusText}>{statusText}</Text>
          </View>
          {inviteLinkVisible && (
            <PressableText
              color={accent}
              text="Invite"
              onPress={() => {}}
              textStyle={{fontWeight: 'normal'}}
            />
          )}
        </View>
      </View>
      <View style={styles.progressView}>
        <View style={styles.progress} />
      </View>
    </View>
  );
};

export default TaskListItem;
