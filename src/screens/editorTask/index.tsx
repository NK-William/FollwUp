import {View, Text, FlatList, Pressable} from 'react-native';
import React from 'react';
import {ITaskPhase} from '../../interfaces';
import {taskPhaseStatus} from '../../utils/enums';
import {useRow} from './util';
import {
  Icon,
  TaskNumberBadge,
  TaskPhaseDetails,
  TaskStatsHeader,
  TaskTrackLine,
} from '../../components';
import getStyling from './style';

const demoPhaseData: ITaskPhase[] = [
  {
    id: '1',
    name: 'Diagnostic',
    description: 'We will be diagnosing your car today',
    number: 1,
    icon: 'build-outline',
    status: taskPhaseStatus.Completed,
    taskId: '1',
  },
  {
    id: '2',
    name: 'Parts ordering',
    description: 'Task list items',
    number: 2,
    icon: 'construct-outline',
    status: taskPhaseStatus.Completed,
    taskId: '1',
  },
  {
    id: '3',
    name: 'Repairing',
    description: '',
    number: 3,
    icon: 'settings-outline',
    status: taskPhaseStatus.Completed,
    taskId: '1',
  },
  {
    id: '4',
    name: 'Testing',
    description:
      'We will be running tests to make sure everything is running smooth fvff fgfgfg fgfg fgfgfg fgf gg gff ',
    number: 4,
    icon: 'hammer-outline',
    status: taskPhaseStatus.InProgress,
    taskId: '1',
  },
  {
    id: '5',
    name: 'Completed',
    description: 'Your car is ready for collection.',
    number: 5,
    icon: 'save-outline',
    status: taskPhaseStatus.Pending,
    taskId: '1',
  },
];

const EditorTask = () => {
  const Row = ({item}: {item: ITaskPhase}) => {
    const {name, description, number, icon, status} = item;

    const {
      taskNumberBadgeStyleOverride,
      taskNumberBadgeNumberStyleOverride,
      taskPhaseDetailsHeight,
      taskPhaseDetailsStyleOverride,
      taskPhaseDetailsTextStyleOverride,
      taskTrackLineStyleOverride,
      taskIconStyleOverride,
    } = useRow(description, number, demoPhaseData.length, status);

    return (
      <View>
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
        <View style={{height: 20}}>
          <TaskTrackLine
            containerStyle={{
              ...styles.taskTrackLine,
              ...taskTrackLineStyleOverride,
            }}
          />
        </View>
      </View>
    );
  };
  const styles = getStyling();
  return (
    <View style={{flex: 1}}>
      <TaskStatsHeader />
      <FlatList
        style={{marginVertical: 10}}
        data={demoPhaseData}
        keyExtractor={item => item.id}
        renderItem={({item}) => <Row item={item} />}
      />
    </View>
  );
};

export default EditorTask;
