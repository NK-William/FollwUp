import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import getStyling from './style';
import {ITask, ITaskPhase} from '../../interfaces';
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
import {Icon} from '../../components';
import {accent, close} from '../../constants/colors';

const iconNames = [
  'build-outline',
  'construct-outline',
  'settings-outline',
  'hammer-outline',
  'reader-outline',
  'add-circle-outline',
  'alert-circle-outline',
  'bag-add-outline',
  'battery-half',
  'battery-full',
  'briefcase-outline',
  'brush-outline',
  'bulb-outline',
  'calculator-outline',
  'calendar-number-outline',
  'calendar-outline',
  'call-outline',
  'camera-outline',
  'car-outline',
  'car-sport-outline',
  'card-outline',
  'cart-outline',
  'cash-outline',
  'cellular-outline',
  'chatbox-ellipses-outline',
  'chatbubble-ellipses-outline',
  'checkbox-outline',
  'checkmark-circle-outline',
  'checkmark-done',
  'checkmark-outline',
  'clipboard-outline',
  'color-fill-outline',
  'cut-outline',
  'desktop-outline',
  'document-outline',
  'document-text-outline',
  'extension-puzzle-outline',
  'flame-outline',
  'flash-outline',
  'flashlight-outline',
  'flask-outline',
  'funnel-outline',
  'help',
  'home-outline',
  'hourglass-outline',
  'information',
  'key-outline',
  'library-outline',
  'list-outline',
  'location-outline',
  'lock-closed-outline',
  'lock-open-outline',
  'wifi-outline',
  'mail-outline',
  'man-outline',
  'pencil-outline',
  'people-outline',
  'power-outline',
  'print-outline',
  'save-outline',
  'videocam-outline',
];

const taskInit: ITask = {
  name: '',
  clientPhoneNumber: '',
  phases: [],
  status: taskStatus.Pending,
};

const AddTask = () => {
  const [showTasPhaseContainer, setShowTaskPhaseContainer] = useState(false);
  const [task, setTask] = useState<ITask>(taskInit);
  const [name, setName] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [showPickerPopup, setShowPickerPopup] = useState(false);
  const [iconName, setIconName] = useState<string>('');

  const styles = getStyling();

  const validateTaskDetails = () => {
    if (!task.name && !task.clientPhoneNumber) {
      console.log('Please fill in the task details');
    } else if (!task.name) {
      console.log('Please fill in the task name');
    } else if (!task.clientPhoneNumber) {
      console.log('Please fill in the client phone number');
    } else {
      setShowTaskPhaseContainer(true);
    }
  };

  console.log('task::', task);

  const updateTaskFormDetails = (value: string, field: TaskFormFieldEnum) => {
    switch (field) {
      case TaskFormFieldEnum.name:
        setTask({...task, name: value});
        break;
      case TaskFormFieldEnum.phoneNumber:
        setTask({...task, clientPhoneNumber: value});
        break;
      case TaskFormFieldEnum.description:
        setTask({...task, description: value});
        break;
      default:
        setTask(task);
    }
  };

  const showTaskForm = (value: boolean) => {
    setName('');
    setDescription('');
    setShowTaskPhaseContainer(value);
  };

  const displayPreviousPhase = () => {
    let poppedPhase = task.phases.pop();

    if (poppedPhase) {
      setName(poppedPhase.name);
      setDescription(poppedPhase.description ?? '');
    }
  };

  const addPhase = () => {
    if (!name && !description) {
    } else if (!name) {
    } else if (!description) {
    } else {
      let taskNumber = task.phases.length + 1;
      let taskPhase = task.phases;

      taskPhase.push({
        name,
        description,
        status: taskPhaseStatus.Pending,
        number: taskNumber,
        icon: iconName,
      });

      setTask({
        ...task,
        phases: taskPhase,
      });
      setName('');
      setDescription('');
      setIconName('');
    }
  };

  const setSelectIcon = (name: string) => {
    setIconName(name);
    setShowPickerPopup(false);
  };

  return (
    <View style={styles.container}>
      {showTasPhaseContainer ? (
        <AddTaskPhaseDetails
          name={name}
          description={description}
          iconName={iconName}
          phaseNumber={task?.phases.length + 1}
          setName={setName}
          setDescription={setDescription}
          addPhase={addPhase}
          setShowPickerPopup={setShowPickerPopup}
          updateShowTaskPhaseContainer={value => showTaskForm(value)}
          displayPreviousPhase={displayPreviousPhase}
        />
      ) : (
        <AddTaskDetails
          name={task?.name}
          phoneNumber={task?.clientPhoneNumber}
          description={task?.description}
          updateTaskFormDetails={updateTaskFormDetails}
          updateShowTaskPhaseContainer={validateTaskDetails}
        />
      )}
      {showPickerPopup && (
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
      )}
    </View>
  );
};

export default AddTask;
