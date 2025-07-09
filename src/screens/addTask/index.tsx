import {View, BackHandler} from 'react-native';
import React, {useEffect} from 'react';
import getStyling from './style';
import {
  AddTaskDetails,
  AddTaskPhaseDetails,
  OpicFiller,
} from '../../containers';
import getGlobalStyling from '../../utils/styles';
import {useAddTask} from './utils';
import LoaderKit from 'react-native-loader-kit';

const AddTask = (props: any) => {
  const {navigation} = props;
  // Hooks
  const {
    showTaskPhaseContainer,
    name,
    description,
    task,
    isSavingTask,
    icon,
    setName,
    setDescription,
    setIcon,
    openNextPhaseForm,
    showTaskForm,
    displayPreviousPhase,
    updateTaskFormDetails,
    validateTaskForm,
    saveTask,
    handleCancelPress,
  } = useAddTask(navigation);

  const styles = getStyling();

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
      {/* <BackButton containerStyle={globalStyles.backButton} /> */}
      {showTaskPhaseContainer ? (
        <AddTaskPhaseDetails
          name={name}
          IconSelected={setIcon}
          icon={icon}
          description={description}
          phaseNumber={task?.phases.length + 1}
          setName={setName}
          setDescription={setDescription}
          openNextPhaseForm={openNextPhaseForm}
          updateShowTaskPhaseContainer={value => showTaskForm(value)}
          displayPreviousPhase={displayPreviousPhase}
          onFinish={saveTask}
          onCancel={handleCancelPress}
        />
      ) : (
        <AddTaskDetails
          name={task?.name}
          email={task?.clientEmail}
          phoneNumber={task?.clientPhone}
          organization={task?.organization}
          firstName={task?.clientFirstName}
          lastName={task?.clientLastName}
          eta={task?.eta}
          navigation={navigation}
          description={task?.description}
          updateTaskFormDetails={updateTaskFormDetails}
          updateShowTaskPhaseContainer={validateTaskForm}
          onCancel={handleCancelPress}
        />
      )}
      {isSavingTask && <ScreenBlockerLoader />}
    </View>
  );
};

export default AddTask;
