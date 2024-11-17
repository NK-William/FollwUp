import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import getStyling from './style';
import {ITask} from '../../interfaces';
import {
  AddTaskDetails,
  AddTaskPhaseDetails,
  OpicFiller,
} from '../../containers';
import {
  TaskFormFieldEnum,
  taskPhaseStatus,
  taskStatus,
} from '../../utils/enums';
import {BackButton, Icon} from '../../components';
import {accent, close, primary} from '../../constants/colors';
import getGlobalStyling from '../../utils/styles';
import {useAddTask} from './utils';
import iconNames from '../../constants/iconNames';
import LoaderKit from 'react-native-loader-kit';

const AddTask = (props: any) => {
  const {navigation} = props;
  // Hooks
  const {
    showTaskPhaseContainer,
    name,
    description,
    iconName,
    task,
    showPickerPopup,
    isSavingTask,
    setName,
    setDescription,
    openNextPhaseForm,
    setShowPickerPopup,
    showTaskForm,
    displayPreviousPhase,
    updateTaskFormDetails,
    validateTaskForm,
    setSelectIcon,
    saveTask,
    resetNavigation,
  } = useAddTask(navigation);

  const styles = getStyling();
  const globalStyles = getGlobalStyling();

  const IconSelector = () => {
    return (
      <OpicFiller>
        <View style={styles.popupContainer}>
          <View style={{alignItems: 'flex-end'}}>
            <View style={styles.closeIconContainer}>
              <TouchableOpacity onPress={() => setShowPickerPopup(false)}>
                <Icon
                  iconType="Ionicons"
                  iconName="close"
                  size={25}
                  style={{color: close}}
                />
              </TouchableOpacity>
            </View>
          </View>
          <ScrollView style={styles.iconPickerScrollView}>
            <View style={styles.popupInnerContainer}>
              {iconNames.map((name, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => setSelectIcon(name)}
                  style={{margin: 2, padding: 5}}>
                  <Icon
                    iconType="Ionicons"
                    iconName={name}
                    style={{color: accent}}
                  />
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>
        </View>
      </OpicFiller>
    );
  };

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
          description={description}
          iconName={iconName}
          phaseNumber={task?.phases.length + 1}
          setName={setName}
          setDescription={setDescription}
          openNextPhaseForm={openNextPhaseForm}
          setShowPickerPopup={setShowPickerPopup}
          updateShowTaskPhaseContainer={value => showTaskForm(value)}
          displayPreviousPhase={displayPreviousPhase}
          OnFinish={saveTask}
          OnCancel={resetNavigation}
        />
      ) : (
        <AddTaskDetails
          name={task?.name}
          // phoneNumber={task?.clientPhoneNumber}
          navigation={navigation}
          description={task?.description}
          updateTaskFormDetails={updateTaskFormDetails}
          updateShowTaskPhaseContainer={validateTaskForm}
        />
      )}
      {showPickerPopup && <IconSelector />}
      {isSavingTask && <ScreenBlockerLoader />}
    </View>
  );
};

export default AddTask;
