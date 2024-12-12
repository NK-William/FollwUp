import {View, Text, FlatList, Pressable, Modal, ScrollView} from 'react-native';
import React from 'react';
import {IPhase, ITask, IModalPhase} from '../../interfaces';
import {taskPhaseStatus} from '../../utils/enums';
import {useEditorTask, useRow} from './util';
import {
  ChatBubble,
  FollwUpButton,
  Icon,
  TaskInput,
  TaskNumberBadge,
  TaskPhaseDetails,
  TaskStatsHeader,
  TaskTrackLine,
  UnderlinedText,
} from '../../components';
import getStyling from './style';
import {accent} from '../../constants/colors';
import {modal} from './enums';

// Demo data
const task: ITask = {
  id: 'a2a40445-d8ca-4aa5-30c5-08dd0f1c6c21',
  name: 'Demo Engine rebuild',
  progressToHundred: 0,
  organization: 'KIA LAZARUS',
  status: 0,
  description: 'On a VW GTI, 2016 year model.',
  eta: '2024-12-17T16:01:16.416Z',
  color: '#FFAACC',
  phases: [
    {
      id: '24f1d6b0-c5f9-4a7f-9fd1-08dd0f1c6c61',
      name: 'Diagnostic',
      number: 1,
      description:
        "We will strip the engine to find all the parts we'll need to replace.",
      icon: 'settings-outline',
      status: 2,
    },
    {
      id: 'd87b3d38-be1e-4129-9fd2-08dd0f1c6c61',
      name: 'Quotation',
      number: 2,
      description:
        'We will send a quotation before we start ordering the parts.',
      icon: 'document-text-outline',
      status: 1,
    },
    {
      id: 'e45ed5f9-92d8-4f98-9fd3-08dd0f1c6c61',
      name: 'Awaiting parts',
      number: 3,
      description: 'This will take about 7 working days',
      icon: 'hourglass-outline',
      status: 0,
    },
    {
      id: '6882135c-7570-49aa-9fd4-08dd0f1c6c61',
      name: 'Rebuild process',
      number: 4,
      description: 'This will take about 2 weeks',
      icon: 'construct-outline',
      status: 0,
    },
    {
      id: 'a0852710-1dfa-40e4-9fd5-08dd0f1c6c61',
      name: 'Test',
      number: 5,
      description: 'We will test the car to ensure everything is working.',
      icon: '',
      status: 0,
    },
    {
      id: 'aac7109f-bfa7-4531-9fd6-08dd0f1c6c61',
      name: 'Ready',
      number: 6,
      description: 'Car is ready for collection',
      icon: 'call-outline',
      status: 0,
    },
  ],
  roles: [
    {
      id: '0ae35c90-1475-4003-71db-08dd0f1c6c83',
      roleType: 2,
      taskId: 'a2a40445-d8ca-4aa5-30c5-08dd0f1c6c21',
      profileId: '3689581c-01a6-4949-ed5f-08dcd5b3823b',
    },
  ],
  invitation: {
    id: 'ace0d015-47e3-4a42-bb19-08dd0f1c6c8d',
    phoneNumber: '0711111111',
    roleType: 1,
  },
};

const EditorTask = ({route}: {route: any}) => {
  // parameters

  // const task = route.params as ITask;

  // console.log('Got task editor page: ', JSON.stringify(task));

  const {
    modalPhase,
    modalVisibilities,
    setModalPhase,
    expandPhaseDetails,
    modalToDisplay,
    getNumberOfCompletedPhases,
    onEditClick,
    closeEditModal,
  } = useEditorTask(task);
  const styles = getStyling();

  console.log('Rendered');

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
            <Pressable onPress={() => onEditClick(name, description, icon)}>
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
          ) : (
            <View style={{width: 30}} />
          )}
          <TaskNumberBadge
            containerStyle={{
              ...styles.taskNumberBadge,
              ...taskNumberBadgeStyleOverride,
            }}
            numberStyle={taskNumberBadgeNumberStyleOverride}
            number={number}
          />
          <Pressable
            style={styles.taskPhaseDetails}
            onPress={() =>
              expandPhaseDetails({
                name: name,
                description: description ?? '',
              })
            }>
            <TaskPhaseDetails
              hasLimitedLines
              title={name}
              containerStyle={{
                height: taskPhaseDetailsHeight,
                ...taskPhaseDetailsStyleOverride,
              }}
              description={description}
              textStyle={taskPhaseDetailsTextStyleOverride}
            />
          </Pressable>
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

  const StatsHeader = () => (
    <TaskStatsHeader
      title={task.name}
      PhasesSum={task.phases.length}
      CompletionDate={new Date(task.eta)}
      currentPhase={getNumberOfCompletedPhases()}
    />
  );

  const ModalContent = () => {
    if (modalVisibilities.showPhaseDetailsModal)
      return <PhaseDetailsModalContent />;
    if (modalVisibilities.showPhaseEditModal) return <PhaseEditModalContent />;
  };

  const PhaseDetailsModalContent = () => (
    <Pressable
      onPress={() => modalToDisplay(modal.non)}
      style={styles.phaseDetailsModalContainer}>
      <TaskPhaseDetails
        title={modalPhase.name}
        // containerStyle={{}}
        description={modalPhase.description}
      />
    </Pressable>
  );

  const PhaseEditModalContent = () => (
    <View style={styles.phaseEditModalContainer}>
      <View style={styles.phaseEditModalInnerContainer}>
        <UnderlinedText
          text="Edit Phase"
          containerStyle={styles.underlinedText}
        />
        <View>
          {/* TODO added icon view */}
          {/* TODO fix issue with name and description field input */}
          <TaskInput
            label="Name"
            entryText={modalPhase.name}
            containerStyle={styles.phaseEditModalEntry}
            onChangeText={text => setModalPhase({...modalPhase, name: text})}
          />
          <TaskInput
            label="Description"
            multiline={true}
            numberOfLines={9}
            entryText={modalPhase.description}
            containerStyle={styles.phaseEditModalEntry}
            onChangeText={text =>
              setModalPhase(p => ({...p, description: text}))
            }
          />
          <View style={styles.phaseEditModalButtonContainer}>
            <FollwUpButton
              text="Cancel"
              onPress={() => closeEditModal()}
              containerStyle={styles.phaseEditModalPositiveButton}
              textStyle={styles.phaseEditModalPositiveButtonText}
            />
            <View style={{width: 8}} />
            <FollwUpButton
              text="Update"
              containerStyle={styles.phaseEditModalNegativeButton}
            />
          </View>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <StatsHeader />
      <FlatList
        data={task.phases}
        keyExtractor={item => item.id}
        renderItem={({item}) => <Row item={item} />}
      />
      <Modal
        animationType="fade"
        transparent
        visible={
          modalVisibilities.showPhaseDetailsModal ||
          modalVisibilities.showPhaseEditModal
        }>
        <View style={styles.modalContainer}>
          <ModalContent />
        </View>
      </Modal>
      {/* Chat version 
      <View style={styles.chatIconContainer}>
        {!showModal && (
          <Pressable onPress={() => setShowModal(true)}>
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
          <StatsHeader />
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
            <Pressable onPress={() => setShowModal(false)}>
              <Icon
                iconName="tasks"
                iconType="FontAwesome"
                size={32}
                style={{color: 'white'}}
              />
            </Pressable>
          </View>
        </View>
      </Modal> */}
    </View>
  );
};

export default EditorTask;
