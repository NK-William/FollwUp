import {View, Text} from 'react-native';
import React, {FC} from 'react';
import getStyling from './style';
import {ITaskListItemProps} from './interface';
import {useTaskListItem} from './util';
import {PressableText} from '../';
import {accent} from '../../constants/colors';

const TaskListItem: FC<ITaskListItemProps> = props => {
  const {
    statusViewColor,
    statusText,
    namesOrOrganization,
    inviteLinkVisible,
    handleLayout,
    progressWidth,
  } = useTaskListItem(props);
  const styles = getStyling(
    props,
    statusViewColor,
    inviteLinkVisible,
    progressWidth,
  );
  return (
    <View style={styles.container}>
      <View style={styles.taskInfoContainer}>
        <View>
          <Text style={styles.taskName}>{props.name}</Text>
          <Text style={styles.subName}>{namesOrOrganization}</Text>
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
      <View style={styles.progressView} onLayout={handleLayout}>
        <View style={styles.progress} />
      </View>
      <View style={styles.badge}>
        <Text style={styles.badgeText}>2</Text>
      </View>
    </View>
  );
};

export default TaskListItem;
