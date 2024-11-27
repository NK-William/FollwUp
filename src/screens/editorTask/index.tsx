import {View, Text, FlatList, Pressable, Modal, ScrollView} from 'react-native';
import React from 'react';
import {IPhase, ITask} from '../../interfaces';
import {taskPhaseStatus} from '../../utils/enums';
import {useEditorTask, useRow} from './util';
import {
  ChatBubble,
  Icon,
  TaskNumberBadge,
  TaskPhaseDetails,
  TaskStatsHeader,
  TaskTrackLine,
} from '../../components';
import getStyling from './style';

const EditorTask = ({route}: {route: any}) => {
  // parameters
  const task = route.params as ITask;

  console.log('Got task editor page: ', JSON.stringify(task));

  const {showModal, modalVisible} = useEditorTask();
  const styles = getStyling();

  const Row = ({item}: {item: IPhase}) => {
    const {name, description, number, icon, status} = item;

    const {
      taskNumberBadgeStyleOverride,
      taskNumberBadgeNumberStyleOverride,
      taskPhaseDetailsHeight,
      taskPhaseDetailsStyleOverride,
      taskPhaseDetailsTextStyleOverride,
      taskTrackLineStyleOverride,
      taskIconStyleOverride,
    } = useRow(description, number, task.phases.length, status);

    return (
      <View>
        {number === 1 ? (
          <Pressable
            style={{marginLeft: 20, alignSelf: 'center'}}
            onPress={() => console.log('Add new phase')}>
            <Icon
              iconType="Ionicons"
              iconName="add-circle-outline"
              size={30}
              style={styles.actionIcon}
            />
          </Pressable>
        ) : null}

        <View style={styles.rowContainer}>
          <View style={styles.actionIconContainer}>
            <Pressable onPress={() => console.log('Edit')}>
              <Icon
                iconType="FontAwesome5"
                iconName="pen"
                size={20}
                style={styles.actionIcon}
              />
            </Pressable>
            <Pressable
              style={{marginLeft: 12}}
              onPress={() => console.log('Delete')}>
              <Icon
                iconType="FontAwesome5"
                iconName="trash"
                size={20}
                style={styles.actionIcon}
              />
            </Pressable>
          </View>
          {icon ? (
            <Icon
              style={{...styles.rowIcon, ...taskIconStyleOverride}}
              size={30}
              iconType="Ionicons"
              iconName={icon}
            />
          ) : null}
          <TaskNumberBadge
            containerStyle={{
              ...styles.taskNumberBadge,
              ...taskNumberBadgeStyleOverride,
            }}
            numberStyle={taskNumberBadgeNumberStyleOverride}
            number={number}
          />
          <TaskPhaseDetails
            title={name}
            containerStyle={{
              ...styles.taskPhaseDetails,
              height: taskPhaseDetailsHeight,
              ...taskPhaseDetailsStyleOverride,
            }}
            description={description}
            textStyle={taskPhaseDetailsTextStyleOverride}
          />
        </View>
        <View style={styles.trackContainer}>
          <TaskTrackLine
            containerStyle={{
              ...styles.taskTrackLine,
              ...taskTrackLineStyleOverride,
            }}
          />
          <Pressable
            style={{marginLeft: 6, alignSelf: 'center'}}
            onPress={() => console.log('Add new phase')}>
            <Icon
              iconType="Ionicons"
              iconName="add-circle-outline"
              size={30}
              style={styles.actionIcon}
            />
          </Pressable>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <TaskStatsHeader />
      <FlatList
        data={task.phases}
        keyExtractor={item => item.id}
        renderItem={({item}) => <Row item={item} />}
      />
      <View style={styles.chatIconContainer}>
        {!showModal && (
          <Pressable onPress={() => modalVisible(true)}>
            <Icon
              iconName="chat"
              iconType="Entypo"
              size={35}
              style={styles.chatIcon}
            />
          </Pressable>
        )}
      </View>
      <Modal animationType="fade" transparent visible={showModal}>
        <View style={styles.modalTransparentContainer}>
          <TaskStatsHeader />
          <ScrollView>
            <ChatBubble
              text="Good day, we will be starting with the diagnostics today to find out the cost of the issue, this process should take us long."
              fromSender
            />
            <ChatBubble text="Hi, thanks for the update, hope that will not be a major issue." />
            <ChatBubble text="Keep me posted." />
            <ChatBubble
              text="It won’t be a major issue they way it sounds, if we find the issue we might fix it tomorrow and ready to be collected."
              fromSender
            />
          </ScrollView>
          <View style={styles.chatIconContainer}>
            <Pressable onPress={() => modalVisible(false)}>
              <Icon
                iconName="tasks"
                iconType="FontAwesome"
                size={32}
                style={{color: 'white'}}
              />
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default EditorTask;
