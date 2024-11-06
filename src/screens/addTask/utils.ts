import {useState} from 'react';
import {IPhase, ITask} from '../../interfaces';
import {
  TaskFormFieldEnum,
  taskPhaseStatus,
  taskStatus,
} from '../../utils/enums';
import {Alert} from 'react-native';

const taskInit: ITask = {
  name: '',
  phases: [],
  status: taskStatus.Pending,
};

export const useAddTask = () => {
  //#region  Hooks
  const [showTaskPhaseContainer, setShowTaskPhaseContainer] = useState(false);
  const [task, setTask] = useState<ITask>(taskInit);
  const [name, setName] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [showPickerPopup, setShowPickerPopup] = useState(false);
  const [iconName, setIconName] = useState<string>('');
  //#endregion Hooks

  //#region  Methods
  const validateTaskForm = () => {
    if (!task.name) {
      displayAlert('Please enter task name before going to the next step.');
    } else {
      setShowTaskPhaseContainer(true);
    }
  };
  // consol

  const updateTaskFormDetails = (value: string, field: TaskFormFieldEnum) => {
    console.log('filed: ', field);
    switch (field) {
      case TaskFormFieldEnum.name:
        setTask({...task, name: value});
        break;
      // case TaskFormFieldEnum.phoneNumber:
      //   setTask({...task, clientPhoneNumber: value});
      //   break;
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

  const openNextPhaseForm = () => {
    if (
      validateTaskPhaseForm(
        'Please fill all fields before going to the next step.',
        'Please fill enter name before going to the next step.',
        'Please fill enter description before going to the next step.',
      )
    ) {
      const taskPhases = pushNewPhase();

      setTask({
        ...task,
        phases: taskPhases,
      });

      clearPhaseForm();
    }
  };

  const validateTaskPhaseForm = (
    allFieldsMessage: string,
    nameFieldMessage: string,
    descriptionFieldMessage: string,
  ) => {
    let isValid = false;
    if (!name && !description) {
      displayAlert(allFieldsMessage);
    } else if (!name) {
      displayAlert(nameFieldMessage);
    } else if (!description) {
      displayAlert(descriptionFieldMessage);
    } else {
      isValid = true;
    }

    return isValid;
  };

  const pushNewPhase = () => {
    let phases: IPhase[] = Array.from(task.phases);
    let taskNumber = phases.length + 1;

    phases.push({
      name,
      description,
      status: taskPhaseStatus.Pending,
      number: taskNumber,
      icon: iconName,
    });

    return phases;
  };

  const clearPhaseForm = () => {
    setName('');
    setDescription('');
    setIconName('');
  };

  const setSelectIcon = (name: string) => {
    setIconName(name);
    setShowPickerPopup(false);
  };

  const displayAlert = (message: string, title = 'Alert') => {
    Alert.alert(title, message);
  };

  const saveTask = () => {
    if (
      validateTaskPhaseForm(
        'Please fill all fields before submitting task.',
        'Please enter name before submitting task.',
        'Please enter description before submitting task.',
      )
    ) {
      const taskPhases = pushNewPhase();

      const taskToSubmit: ITask = {
        ...task,
        phases: taskPhases,
      };
      console.log('saving task: ', JSON.stringify(taskToSubmit));
    }
  };

  //#endregion Methods

  return {
    showTaskPhaseContainer,
    name,
    description,
    iconName,
    task,
    showPickerPopup,
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
  };
};
