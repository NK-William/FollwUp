import {
  View,
  Text,
  FlatList,
  Pressable,
  Modal,
  ScrollView,
  TextInput,
} from 'react-native';
import React from 'react';
import {IPhase, ITask} from '../../interfaces';
import {
  ModalEnum,
  PhaseSubmissionActionEnum,
  taskPhaseStatus,
} from '../../utils/enums';
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
  PhaseEditForm,
} from '../../components';
import getStyling from './style';
import {OpicFiller} from '../../containers';
import LoaderKit from 'react-native-loader-kit';

const EditorTask = ({route}: {route: any}) => {
  // parameters
  const task = route.params as ITask;

  // console.log('Got set task: ', JSON.stringify(task));

  const {
    taskData,
    modalPhase,
    modalVisibilities,
    phaseModalPositiveButtonToPerform,
    showLoader,
    updatePhaseStatus,
    onEditClick,
    onDelete,
    closeEditModal,
    expandPhaseDetails,
    modalToDisplay,
    getNumberOfCompletedPhases,
    onAddClick,
    phaseModalSaveAction,
  } = useEditorTask(task);
  const styles = getStyling();

  console.log('Rendered');

  const Row = ({item}: {item: IPhase}) => {
    const {id, name, description, number, icon, status} = item;

    const {
      taskNumberBadgeStyleOverride,
      taskNumberBadgeNumberStyleOverride,
      taskPhaseDetailsHeight,
      taskPhaseDetailsStyleOverride,
      taskPhaseDetailsTextStyleOverride,
      taskTrackLineStyleOverride,
      taskIconStyleOverride,
    } = useRow(description, number, taskData.phases.length, status);

    return (
      <View>
        {number === 1 ? (
          <Pressable
            style={{marginLeft: 20, alignSelf: 'center'}}
            onPress={() => onAddClick(number)}>
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
            <Pressable
              onPress={() => onEditClick(name, number, description, icon)}>
              <Icon
                iconType="FontAwesome5"
                iconName="pen"
                size={20}
                style={styles.actionIcon}
              />
            </Pressable>
            <Pressable
              style={{marginLeft: 12}}
              onPress={() => (id ? onDelete(id) : null)}>
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
            onPress={updatePhaseStatus}
            phaseId={id ?? ''}
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
              ...taskTrackLineStyleOverride,
            }}
          />
          <Pressable
            style={{marginLeft: 6, alignSelf: 'center'}}
            onPress={() => onAddClick(number + 1)}>
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
      title={taskData.name}
      PhasesSum={taskData.phases.length}
      CompletionDate={new Date(taskData.eta)}
      currentPhase={getNumberOfCompletedPhases()}
    />
  );

  const ModalContent = () => {
    if (modalVisibilities.showPhaseDetailsModal)
      return <PhaseDetailsModalContent />;
    if (modalVisibilities.showPhaseEditModal)
      return (
        <PhaseEditForm
          positiveButtonToPerform={phaseModalPositiveButtonToPerform}
          {...modalPhase}
          cancel={closeEditModal}
          save={phaseModalSaveAction}
        />
      );
  };

  // TODO::: Create a separate component
  const PhaseDetailsModalContent = () => (
    <Pressable
      onPress={() => modalToDisplay(ModalEnum.None)}
      style={styles.phaseDetailsModalContainer}>
      <TaskPhaseDetails
        title={modalPhase.name ?? ''}
        // containerStyle={{}}
        description={modalPhase.description}
      />
    </Pressable>
  );

  // TODO::: Make this re-usable
  const ScreenBlockerLoader = () => {
    return (
      <OpicFiller>
        <LoaderKit
          name={'BallClipRotatePulse'}
          color={'White'}
          style={{width: 50, height: 50}}
        />
      </OpicFiller>
    );
  };

  return (
    <View style={styles.container}>
      <StatsHeader />
      <FlatList
        data={taskData.phases}
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
      {showLoader && <ScreenBlockerLoader />}
    </View>
  );
};

export default EditorTask;
